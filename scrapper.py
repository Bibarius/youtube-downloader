from pytube import YouTube
from json import JSONEncoder


def get_download_urls(url):
    links = []
    streams = YouTube(url).streams.filter(progressive=True)
    for stream in streams:
        links.append({stream.resolution: stream.url})

    return links
