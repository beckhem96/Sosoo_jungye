from django.urls import path
from . import views

app_name = 'movies'

urlpatterns = [
    path('', views.movie_list),
    path('popular/', views.popular_movie_list),
    path('high_rating/', views.high_rating_movie_list),
    path('<int:movie_pk>/', views.movie_detail),
    path('actors/', views.actor_list),
    path('actors/<int:actor_pk>/', views.actor_detail),
    path('directors/', views.director_list),
    path('directors/<int:director_pk>/', views.director_detail),
    path('genres/', views.genre_list),
    path('genres/<int:genre_pk>/', views.genre_detail),
    path('<int:movie_pk>/reviews/', views.review_list_or_create),
    path('<int:movie_pk>/reviews/<int:review_pk>/', views.review_detail),
]