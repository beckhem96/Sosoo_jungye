from django.shortcuts import get_list_or_404, get_object_or_404
from django.contrib.auth import get_user_model

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Recommendation
from .serializers import ProfileSerializer, RecommendationSerializer

User = get_user_model()

@api_view(['GET'])
def profile(request, username):
    user = get_object_or_404(User, username=username)
    serializer = ProfileSerializer(user)
    return Response(serializer.data)

@api_view(['POST'])
def like_recommendation(request, recommendation_pk):
    user = request.user
    recommendation = get_object_or_404(Recommendation, pk=recommendation_pk)
    if recommendation.like_users.filter(pk=user.pk).exists():
        recommendation.like_users.remove(user)
        serializer = RecommendationSerializer(recommendation)
        return Response(serializer.data)
    else:
        recommendation.like_users.add(user)
        serializer = RecommendationSerializer(recommendation)
        return Response(serializer.data)


@api_view(['GET'])
def recommendation(request, username):
    user = get_object_or_404(User, username=username)
    recommendations = get_list_or_404(Recommendation)
    if request.user == user:
        serializer = RecommendationSerializer(recommendations, many=True)
        return Response(serializer.data)
    return Response(status=status.HTTP_400_BAD_REQUEST)
        