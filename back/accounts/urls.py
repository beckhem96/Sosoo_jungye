from django.urls import path
from . import views

app_name = 'accounts'

urlpatterns = [
    path('profile/<username>/', views.profile),
    path('<int:recommendation_pk>/like/', views.like_recommendation),
    path('<username>/recommendations/', views.recommendation),
]