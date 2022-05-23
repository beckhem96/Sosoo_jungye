from rest_framework import serializers
from ..models import Genre
from .movie import MovieListSerializer

class GenreListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Genre
        fields = ('name',)

class GenreSerializer(serializers.ModelSerializer):
    movies = MovieListSerializer(many=True, read_only=True)

    class Meta:
        model = Genre
        fields = '__all__'