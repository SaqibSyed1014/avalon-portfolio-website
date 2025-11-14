"use client";

import React, { useRef, useState, useEffect } from "react";

import { PlayIcon } from "@/components/icons";
import { PauseIcon } from "@/components/icons";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  width?: string | number;
  height?: string | number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster, width = "100%", height = "auto" }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [firstClickDone, setFirstClickDone] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true); // autoplay starts as playing

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.volume = 0;

    video.play().catch(() => {});
  }, []);

  const handleToggle = () => {
    const video = videoRef.current;
    if (!video) return;

    // FIRST CLICK → Restart, unmute, play
    if (!firstClickDone) {
      video.currentTime = 0;
      video.muted = false;
      video.volume = 1;
      video.play();
      setIsPlaying(true);
      setFirstClickDone(true);
      return;
    }

    // AFTER FIRST CLICK → normal toggle
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative size-full">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        width={width}
        height={height}
        loop
        playsInline
        preload="metadata"
        style={{
          display: "block",
          maxWidth: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        onClick={handleToggle}
      />

      <button
        onClick={handleToggle}
        className={`
          flex justify-center items-center cursor-pointer size-[68px] rounded-full 
          bg-[#151518] border border-white/25 absolute bottom-4 right-4 z-10
          shadow-[0_4px_32px_0.8px_#24242E_inset]
          bg-[radial-gradient(41%_95%_at_50%_99.9%,rgba(35,35,45,0.5)_0%,rgba(11,11,12,0.5)_100%)]
          transition-all duration-500`}
      >
        {!firstClickDone ? (
          <PauseIcon />
        ) : isPlaying ? (
          <PauseIcon />
        ) : (
          <PlayIcon />
        )}
      </button>
    </div>
  );
};

export default VideoPlayer;
