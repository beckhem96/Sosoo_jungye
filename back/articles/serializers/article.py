from rest_framework import serializers
from django.contrib.auth import get_user_model
from .comment import CommentSerializer
from ..models import Article


class ArticleSerializer(serializers.ModelSerializer):

    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = get_user_model()
            fields = '__all__'


    comments = CommentSerializer(many=True, read_only=True)
    user = UserSerializer(read_only=True)
    like_article_users = UserSerializer(read_only=True, many=True)

    class Meta:
        model = Article
        fields = '__all__'


class ArticleListSerializer(serializers.ModelSerializer):

    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = get_user_model()
            fields = '__all__'
    
    user = UserSerializer(read_only=True)
    comment_count = serializers.IntegerField()
    like_count = serializers.IntegerField()

    class Meta:
        model = Article
        fields = '__all__'