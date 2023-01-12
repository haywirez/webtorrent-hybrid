import { announceList } from 'create-torrent'
import wrtc from 'werift'

globalThis.WEBTORRENT_ANNOUNCE = announceList
  .map(arr => arr[0])
  .filter(url => url.indexOf('wss://') === 0 || url.indexOf('ws://') === 0)

globalThis.WRTC = wrtc
