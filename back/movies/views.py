from django.shortcuts import get_list_or_404, get_object_or_404
from django.db.models import Avg, Count
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Actor, Director, Genre, Movie, Review
from .serializers.movie import MovieListSerializer, MovieRatingListSerializer, MovieSerializer, GenreListSerializer, GenreSerializer,DirectorListSerializer, DirectorSerializer, ActorListSerializer, ActorSerializer
from .serializers.review import ReviewSerializer
import random
# Create your views here.
@api_view(['GET'])
def movie_list(request):
    movies = get_list_or_404(Movie)
    serializer = MovieListSerializer(movies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def popular_movie_list(request):
    movies = Movie.objects.order_by()[:10]
    serializer = MovieListSerializer(movies, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def high_rating_movie_list(request):
    movies = Movie.objects.annotate(
        vote_average = Avg('reviews__star_rating')
    ).order_by('-vote_average')[:10]
    serializer = MovieRatingListSerializer(movies, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def movie_detail(request, movie_pk):
    movie = Movie.objects.annotate(
        vote_average = Avg('reviews__star_rating'),
        review_count = Count('reviews', distinct=True)
    ).get(pk=movie_pk)
    serializer = MovieSerializer(movie)
    return Response(serializer.data)


@api_view(['GET'])
def actor_list(request):
    actors = get_list_or_404(Actor)
    serializer = ActorListSerializer(actors, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def actor_detail(request, actor_pk):
    actor = get_object_or_404(Actor, pk=actor_pk)
    serialzer = ActorSerializer(actor)
    return Response(serialzer.data)

@api_view(['GET'])
def director_list(request):
    directors = get_list_or_404(Director)
    serializer = DirectorListSerializer(directors, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def director_detail(request, director_pk):
    director = get_object_or_404(Director, pk=director_pk)
    serialzer = DirectorSerializer(director)
    return Response(serialzer.data)

@api_view(['GET'])
def genre_list(request):
    genres = get_list_or_404(Genre)
    serializer = GenreListSerializer(genres, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def genre_detail(request, genre_pk):
    genre = get_object_or_404(Genre, pk=genre_pk)
    serialzer = GenreSerializer(genre)
    return Response(serialzer.data)


@api_view(['GET','POST'])
def review_list_or_create(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)

    def review_list():
        reviews = get_list_or_404(Review)
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data)
    
    def create_review():
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(movie=movie, user=request.user)
            reviews = movie.reviews.all()
            serializer = ReviewSerializer(reviews, many=True)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    if request.method == 'GET':
        return review_list()
    elif request.method == 'POST':
        return create_review()

@api_view(['GET', 'PUT', 'DELETE'])
def review_detail(request, movie_pk, review_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    review = get_object_or_404(Review, pk=review_pk)

    def review_detail():
        serializer = ReviewSerializer(review)
        return Response(serializer.data)
    
    def update_review():
        if request.user == review.user:
            serializer = ReviewSerializer(instance=review, data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                reviews = movie.reviews.all()
                serializer = ReviewSerializer(reviews, many=True)
                return Response(serializer.data)
    
    def delete_review():
        if request.user == review.user:
            review.delete()
            reviews = movie.reviews.all()
            serializer = ReviewSerializer(reviews, many=True)
            return Response(serializer.data)
    
    if request.method == 'GET':
        return review_detail()
    elif request.method == 'PUT':
        return update_review()
    elif request.method == 'DELETE':
        return delete_review()

@api_view(['GET'])
def recommended_movie_list(request):
    movie_box = []
    for genre in request.user.genres.all():
        movies = Movie.objects.filter(genres=genre)[:10]
        for movie in movies:
            if movie not in movie_box:
                movie_box.append(movie)
    numbers = random.sample(range(0, len(movie_box), 10))
    movie_list = []
    for i in numbers:
        movie_list.append(movie_box[i])
    serializer = MovieSerializer(movie_list, many=True)
    return Response(serializer.data)
