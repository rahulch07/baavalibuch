from django.db import models

# Create your models here.
class String(models.Model):
    content = models.TextField()

def __str__(self):
    return self.content