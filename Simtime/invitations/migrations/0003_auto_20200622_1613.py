# Generated by Django 3.0.4 on 2020-06-22 16:13

from django.db import migrations, models
import invitations.models


class Migration(migrations.Migration):

    dependencies = [
        ('invitations', '0002_event_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='photo',
            field=models.ImageField(default='no_image.png', upload_to=invitations.models.user_path),
        ),
    ]
