import json

from pytube import YouTube


def get_download_urls(url):
    links = []
    streams = YouTube(url).streams.filter(progressive=True)
    for stream in streams:
        links.append({stream.resolution: stream.url})

    return json.dumps(links)
