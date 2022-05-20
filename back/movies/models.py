from django.db import models
from django.conf import settings

# Create your models here.
class Director(models.Model):
    name = models.CharField(max_length=100)

class Actor(models.Model):
    name = models.CharField(max_length=100)

class Genre(models.Model):
    name = models.CharField(max_length=100)


class Movie(models.Model):
    like_users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='like_movies')
    title = models.CharField(max_length=100)
    overview = models.TextField()
    release_date = models.DateField()
    poster_path = models.TextField()
    vote_average = models.FloatField()
    directors = models.ManyToManyField(Director, related_name='directors_movies')
    actors = models.ManyToManyField(Actor, related_name='actors_movies')
    genres = models.ManyToManyField(Genre, related_name='genres_movies')