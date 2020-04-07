from pytube import YouTube


def get_download_urls(url) -> list:
    links = []
    streams = YouTube(url).streams.filter(progressive=True)
    for stream in streams:
        links.append({stream.resolution: stream.url})

    return links


# url = "https://www.youtube.com/watch?v=5wMAPUrd0ag"
# print(get_download_urls(url))
