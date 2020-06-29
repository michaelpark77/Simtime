# Generated by Django 3.0.4 on 2020-06-24 21:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0005_auto_20200624_2053'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='relationship',
            unique_together={('account_id', 'friend_id')},
        ),
        migrations.AlterUniqueTogether(
            name='relationship_friendgroup_map',
            unique_together={('group_id', 'relationship_id')},
        ),
    ]