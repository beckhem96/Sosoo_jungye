from rest_framework import serializers
from ..models import Movie, Actor, Director, Genre
from .review import ReviewSerializer

class MovieListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields = ('pk','title', 'poster_path')

class MovieRatingListSerializer(serializers.ModelSerializer):
    vote_average = serializers.FloatField()

    class Meta:
        model = Movie
        fields = ('pk','title', 'poster_path', 'vote_average')

class ActorListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Actor
        fields = ('pk','name',)

class DirectorListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Director
        fields = ('pk','name',)

class GenreListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Genre
        fields = ('pk','name',)

class MovieSerializer(serializers.ModelSerializer):
    actors = ActorListSerializer(many=True, read_only=True)
    directors = DirectorListSerializer(many=True, read_only=True)
    genres = GenreListSerializer(many=True, read_only=True)
    reviews = ReviewSerializer(many=True, read_only=True)
    review_count = serializers.IntegerField()
    vote_average = serializers.FloatField()

    class Meta:
        model = Movie
        fields = '__all__'


class ActorSerializer(serializers.ModelSerializer):
    movies = MovieListSerializer(many=True, read_only=True)

    class Meta:
        model = Actor
        fields = '__all__'


class DirectorSerializer(serializers.ModelSerializer):
    movies = MovieListSerializer(many=True, read_only=True)

    class Meta:
        model = Director
        fields = '__all__'


class GenreSerializer(serializers.ModelSerializer):
    movies = MovieListSerializer(many=True, read_only=True)

    class Meta:
        model = Genre
        fields = '__all__'