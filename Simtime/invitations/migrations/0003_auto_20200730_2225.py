# Generated by Django 3.0.4 on 2020-07-30 13:25

import django.contrib.postgres.fields.jsonb
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('invitations', '0002_auto_20200730_2223'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='event_place',
            field=django.contrib.postgres.fields.jsonb.JSONField(default={'lat': 0, 'lng': 0, 'name': 15}),
        ),
    ]
