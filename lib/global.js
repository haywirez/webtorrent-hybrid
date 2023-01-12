import { announceList } from "create-torrent";
import werift from "werift";

import { RTCRtpSender } from "werift/lib/webrtc/src/media/rtpSender.js";
import { RTCRtpReceiver } from "werift/lib/webrtc/src/media/rtpReceiver.js";

// copied over from wrtc...
function RTCPeerConnectionIceEvent(type, eventInitDict) {
  Object.defineProperties(this, {
    type: {
      value: type,
      enumerable: true,
    },
    candidate: {
      value: eventInitDict.candidate,
      enumerable: true,
    },
    target: {
      value: eventInitDict.target,
      enumerable: true,
    },
  });
}

function RTCDataChannelEvent(type, eventInitDict) {
  Object.defineProperties(this, {
    bubbles: {
      value: false,
    },
    cancelable: {
      value: false,
    },
    type: {
      value: type,
      enumerable: true,
    },
    channel: {
      value: eventInitDict.channel,
      enumerable: true,
    },
    target: {
      value: eventInitDict.target,
      enumerable: true,
    },
  });
}

const augmentedWeriftExports = {
  ...werift,
  RTCRtpSender,
  RTCRtpReceiver,
  RTCPeerConnectionIceEvent,
  RTCDataChannelEvent,
};

globalThis.WEBTORRENT_ANNOUNCE = announceList
  .map((arr) => arr[0])
  .filter((url) => url.indexOf("wss://") === 0 || url.indexOf("ws://") === 0);

globalThis.WRTC = augmentedWeriftExports;
