from django.http import JsonResponse
import json
import os

# Path to the JSON file
JSON_FILE_PATH = os.path.join(os.path.dirname(__file__), 'movies.json')


def load_movies():
    with open(JSON_FILE_PATH, 'r') as file:
        return json.load(file)


movies_data = load_movies()


def Home(request):
    return JsonResponse(
        {'message': 'Hello Roulettech, lets play with Django/React!'})


def Movies(request):
    return JsonResponse(movies_data, safe=False)
