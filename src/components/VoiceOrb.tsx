// components/VoiceOrb.tsx
"use client";

import { Player } from "@lottiefiles/react-lottie-player";

const VoiceOrb = () => {
  return (
    <div className="flex justify-center">
      <div className="w-48 h-48">
        <Player
          src="/voiceOrb.json"
          autoplay
          loop
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default VoiceOrb;
