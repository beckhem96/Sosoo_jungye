from rest_framework import serializers
from ..models import Actor
from .movie import MovieListSerializer

class ActorListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Actor
        fields = ('name',)

class ActorSerializer(serializers.ModelSerializer):
    movies = MovieListSerializer(many=True, read_only=True)

    class Meta:
        model = Actor
        fields = '__all__'