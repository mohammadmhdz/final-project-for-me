from django.db.models.signals import pre_save
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.conf import settings
from django.core.files import File
import os


def updateUser(sender, instance, **kwargs):
    user = instance
    if user.email != '':
        user.username = user.email


pre_save.connect(updateUser, sender=User)




@receiver(pre_save)
def add_default_image(sender, instance, **kwargs):
    # Check if the model has an `image` field
    if hasattr(instance, 'image'):
        image_field = getattr(instance, 'image')

        # Check if the `image` field is null
        if not image_field:
            # Set the default image address
            default_image_path = os.path.join(settings.MEDIA_ROOT, 'img-3.png')

            # Check if the default image file exists
            if os.path.isfile(default_image_path):
                # Open the default image file and assign it to the `image` field
                with open(default_image_path, 'rb') as f:
                    default_image = File(f)
                    image_field.save('img-3.png', default_image, save=False)