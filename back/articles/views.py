from django.shortcuts import get_list_or_404, get_object_or_404
from django.db.models import Count

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Article, Comment
from .serializers.article import ArticleSerializer, ArticleListSerializer
from .serializers.comment import CommentSerializer

# Create your views here.
@api_view(['GET', "POST"])
def article_list_or_create(request):

    def article_list():
        articles = Article.objects.annotate(
            comment_count = Count('comments', distinct=True),
            like_count = Count('like_article_users', distinct=True)
        ).order_by('-pk')
        serializer = ArticleListSerializer(articles, many=True)
        return Response(serializer.data)


    def create_article():
        serializer = ArticleSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    if request.method == 'GET':
        return article_list()
    elif request.method == 'POST':
        return create_article()

@api_view(['GET', 'PUT', 'DELETE'])
def article_detail_or_update_or_delete(request, article_pk):
    article = get_object_or_404(Article, pk=article_pk)

    def article_detail():
        serializer = ArticleSerializer(article)
        return Response(serializer.data)
    
    def update_article():
        if request.user == article.user:
            serializer = ArticleSerializer(instance=article, data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)


    def delete_article():
        if request.user == article.user:
            article.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
    
    if request.method == 'GET':
        return article_detail()
    elif request.method == 'PUT':
        return update_article()
    elif request.method == 'DELETE':
        return delete_article()
    
@api_view(['POST'])
def like_article(request, article_pk):
    article = get_object_or_404(Article, pk=article_pk)
    user = request.user
    if article.like_article_users.filter(pk=user.pk).exists():
        article.like_article_users.remove(user)
        serializer = ArticleSerializer(article)
        return Response(serializer.data)
    else: 
        article.like_article_users.add(article)
        serializer = ArticleSerializer(article)
        return Response(serializer.data)

@api_view(['GET', "POST"])
def comment_list_or_create(request, article_pk):
    article = get_object_or_404(Article, pk=article_pk)

    def comment_list():
        comments = get_list_or_404(Comment)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)


    def create_comment():
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(article=article, user=request.user)
            comments = article.comments.all()
            serializer = CommentSerializer(comments, many=True)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    if request.method == 'GET':
        return comment_list()
    elif request.method == 'POST':
        return create_comment()


@api_view(['GET','PUT', 'DELETE'])
def comment_detail_or_update_or_delete(request, article_pk, comment_pk):
    article = get_object_or_404(Article, pk=article_pk)
    comment = get_object_or_404(Comment, pk=comment_pk)

    def comment_detail():
        serializer = CommentSerializer(article)
        return Response(serializer.data)

    def update_comment():
        if request.user == comment.user:
            serializer = CommentSerializer(instance=comment, data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                comments = article.comments.all()
                serializer = CommentSerializer(comments, many=True)
                return Response(serializer.data)
    
    def delete_comment():
        if request.user == comment.user:
            comment.delete()
            comments = article.comments.all()
            serializer = CommentSerializer(comments, many=True)
            return Response(serializer.data)
        
    if request.method == 'GET':
        return comment_detail()
    elif request.method == 'PUT':
        return update_comment()
    elif request.method == 'DELETE':
        return delete_comment()