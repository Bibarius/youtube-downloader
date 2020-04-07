from pytube import YouTube, exceptions


def get_download_urls(url) -> list:
    links = {}
    streams = YouTube(url).streams.filter(progressive=True)
    for stream in streams:
        links[stream.resolution] = stream.url

    return links
