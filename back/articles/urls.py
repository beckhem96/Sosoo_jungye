from django.urls import path
from . import views

app_name = 'articles'

urlpatterns = [
    path('', views.article_list_or_create),  # list or create
    path('<int:article_pk>/', views.article_detail_or_update_or_delete), # detail
    path('<int:article_pk>/like/', views.like_article), # 좋아요
    
    path('<int:article_pk>/comments/', views.comment_list_or_create), # create
    path('<int:article_pk>/comments/<int:comment_pk>/', views.comment_detail_or_update_or_delete) #update or delere

]
