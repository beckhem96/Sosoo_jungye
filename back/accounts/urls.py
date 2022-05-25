from django.urls import path
from . import views

app_name = 'accounts'

urlpatterns = [
    path('profile/<username>/', views.profile),
    path('recommendation/', views.recommendation),
    path('recommendation/<int:recommendation_pk>/like/', views.like_recommendation),
]