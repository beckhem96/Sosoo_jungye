from django.db import models
from django.conf import settings
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.
class Director(models.Model):
    name = models.CharField(max_length=100)

class Actor(models.Model):
    name = models.CharField(max_length=100)

class Genre(models.Model):
    name = models.CharField(max_length=100)

class Movie(models.Model):
    title = models.CharField(max_length=100)
    overview = models.TextField()
    release_date = models.DateField()
    poster_path = models.TextField()
    directors = models.ManyToManyField(Director, related_name='directors_movies')
    actors = models.ManyToManyField(Actor, related_name='actors_movies')
    genres = models.ManyToManyField(Genre, related_name='genres_movies')

class Review(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, related_name='reviews')
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='movie_comments')
    star_rating = models.IntegerField(
        default=0,
        validators=[
            MaxValueValidator(10),
            MinValueValidator(0)
        ]
    )
    title = models.CharField(max_length=50)
    content = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Serieson(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, related_name='serieson')
    link = models.TextField()

class Google(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, related_name='google')
    link = models.TextField()