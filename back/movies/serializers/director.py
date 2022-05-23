from rest_framework import serializers
from ..models import Director
from .movie import MovieListSerializer

class DirectorListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Director
        fields = ('name',)

class DirectorSerializer(serializers.ModelSerializer):
    movies = MovieListSerializer(many=True, read_only=True)

    class Meta:
        model = Director
        fields = '__all__'