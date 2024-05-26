from django.db import models


class ContentHeader(models.Model):
    header = models.CharField(db_index=True, unique=True, max_length=100)
    content = models.TextField()

    def __str__(self) -> str:
        return self.header


class DetailsSee(models.Model):
    header = models.CharField(db_index=True, unique=True, max_length=100)
    details = models.TextField()
