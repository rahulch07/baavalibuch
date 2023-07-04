from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from nltk import ngrams
import json


@csrf_exempt
def ngrams_comparison(request):
    data = json.loads(request.body.decode('utf-8'))
    string1 = data.get('string1', '')
    string2 = data.get('string2', '')
    print("Recieved Strings:",string1,string2)

    # Perform ngrams comparison
    ngrams_list = []
    n = 3  # Adjust the value of n as per your requirement
    for ng in ngrams(string1.split(), n):
        if ' '.join(ng) in string2:
            ngrams_list.append(' '.join(ng))

    return JsonResponse({'ngrams': ngrams_list})

