import asyncio
from shazamio import Shazam
import sys
import json
import os

async def main():
    shazam = Shazam()
    path = os.getcwd()
    out = await shazam.recognize_song(os.path.join(path, 'scripts',sys.argv[1]))
    print(json.dumps(out))

loop = asyncio.get_event_loop()
loop.run_until_complete(main())

# https://github.com/dotX12/ShazamIO
