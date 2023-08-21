# Generated by Django 4.2.3 on 2023-08-21 14:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='favorite_employee',
            field=models.ManyToManyField(blank=True, null=True, to='base.employee'),
        ),
        migrations.AlterField(
            model_name='employee',
            name='favorite_jobs',
            field=models.ManyToManyField(blank=True, null=True, to='base.job'),
        ),
        migrations.AddConstraint(
            model_name='request',
            constraint=models.UniqueConstraint(fields=('employee', 'job'), name='unique_employee_job'),
        ),
    ]
