import asyncio
from shazamio import Shazam

async def main():
    shazam = Shazam()
    out = await shazam.recognize_song('examples_data_dora.ogg')
    print(out)

loop = asyncio.get_event_loop()
loop.run_until_complete(main())

# https://github.com/dotX12/ShazamIO