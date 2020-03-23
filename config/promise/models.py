from django.db import models
from uuid import uuid4
# from config.userdetail.models import User
from userdetail.models import User
from django.utils.text import slugify
from autoslug import AutoSlugField
from autoslug.settings import slugify as default_slugify
from django.db.models.signals import post_save
from django.dispatch import receiver


class Promise(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, blank=False)
    slug = models.SlugField(unique=True, blank=True)
    description = models.CharField(max_length=2024, blank=False, default='')
    deadline = models.CharField(max_length=2024, blank=False, default='60')
    status = models.CharField(max_length=1, blank=False, default='D')
    is_approved = models.BooleanField(default=False)
    modify_time = models.DateTimeField(auto_now=True)
    create_time = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, related_name='promise', on_delete=models.CASCADE)


    def save(self, *args, **kwargs):
        prefix = self.owner.__str__()
        self.slug = prefix + '-' + str(uuid4())[:8]
        super(Promise, self).save(*args, **kwargs)

    class Meta:
        db_table = 'dt_promise'
        # verbose_name = 'DT_PROMISE'


# class UserInfo(models.Model):
#     # name = models.ForeignKey('auth.User', related_name='user', on_delete=models.CASCADE)
#     user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
#     nickname = models.CharField(max_length=255, unique=True, blank=True)
#     first_name = models.CharField(max_length=255, blank=True)
#     last_name = models.CharField(max_length=255, blank=True)
#     age = models.CharField(max_length=50, blank=True)
#     sex = models.CharField(max_length=6, blank=True)
#     statistic = models.CharField(max_length=2024, blank=True)
#     about = models.CharField(max_length=2024, blank=True)
#     points = models.CharField(max_length=100, blank=True)
#     # friends = models.ManyToManyField('auth.User', blank=True)
#
#     class Meta:
#         db_table = 'DT_USER'
#         verbose_name = 'DT_USER'



