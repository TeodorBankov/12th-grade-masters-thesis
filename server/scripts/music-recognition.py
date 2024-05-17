import asyncio
from shazamio import Shazam
import sys
import json
import os

async def main():
    shazam = Shazam()
    path = os.getcwd()
    # print(os.path.join(path, 'scripts',sys.argv[1]))
    out = await shazam.recognize(os.path.join(path, 'scripts', sys.argv[1]))
    print(json.dumps(out))

# loop = asyncio.get_event_loop()
# loop.run_until_complete(main())
asyncio.run(main())

# https://github.com/dotX12/ShazamIO
