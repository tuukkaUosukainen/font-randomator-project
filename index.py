#!/usr/bin/python

from flask import Flask, Response
import urllib2
import os

app = Flask(__name__)
api_key = os.environ['API_KEY']
fonts_url = 'https://www.googleapis.com/webfonts/v1/webfonts?key=%s' % api_key

@app.route('/api/fonts')
def get_fonts():
    fonts = urllib2.urlopen(fonts_url).read() 
    return Response(fonts, mimetype='application/json')
