from pytube import YouTube
import json


def get_download_urls(url):
    links = []
    streams = YouTube(url).streams.filter(progressive=True)
    for stream in streams:
        links.append({stream.resolution: stream.url})

    return json.dumps(links)
