from rest_framework import serializers
from ..models import Movie
from .actor import ActorListSerializer
from .director import DirectorListSerializer
from .genre import GenreListSerializer
from .review import ReviewSerializer

class MovieListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields = ('title', 'poster_url')

class MovieSerializer(serializers.Serializer):
    actors = ActorListSerializer(many=True, read_only=True)
    directors = DirectorListSerializer(many=True, read_only=True)
    genres = GenreListSerializer(many=True, read_only=True)
    review_set = ReviewSerializer(many=True, read_only=True)
    vote_average = serializers.FloatField()

    class Meta:
        model = Movie
        fields = '__all__'