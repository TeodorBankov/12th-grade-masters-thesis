import asyncio
from shazamio import Shazam
import sys

async def main():
    shazam = Shazam()
    path = __file__.split('/')
    path.pop()
    out = await shazam.recognize_song('/'.join(path) + '/' + sys.argv[1])
    print(out)

loop = asyncio.get_event_loop()
loop.run_until_complete(main())

# https://github.com/dotX12/ShazamIO
