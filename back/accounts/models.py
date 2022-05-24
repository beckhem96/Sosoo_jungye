from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class User(AbstractUser):
    pass


class Recommendation(models.Model):
    name = models.CharField(max_length=100)
    like_users = models.ManyToManyField(User, related_name='like_recommendations')