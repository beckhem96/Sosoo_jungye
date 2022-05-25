from rest_framework import serializers
from django.contrib.auth import get_user_model
from movies.models import Movie, Review
from articles.models import Article
from .models import Recommendation

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'


class ProfileSerializer(serializers.ModelSerializer):
    
    class ReviewMovieSerializer(serializers.ModelSerializer):
        
        movie = MovieSerializer()

        class Meta:
            model = Review
            fields = '__all__'
    
    class ArticleSerializer(serializers.ModelSerializer):
        class Meta:
            model = Article
            fields = '__all__'
    

    movie_comments = ReviewMovieSerializer(many=True, read_only=True)
    articles = ArticleSerializer(many=True, read_only=True)


    class Meta:
        model = get_user_model()
        fields = '__all__'

class RecommendationSerializer(serializers.ModelSerializer):

    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = get_user_model()
            fields = ('pk', 'username')
    
    like_users = UserSerializer(read_only=True, many=True)

    class Meta:
        model = Recommendation
        fields = '__all__'