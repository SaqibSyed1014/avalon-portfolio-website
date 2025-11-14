"use client";

import React, { useRef, useState, useEffect } from "react";

import { PlayIcon } from "@/components/icons";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  width?: string | number;
  height?: string | number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster, width = "100%", height = "auto" }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.volume = 0;
    video.play().catch(() => {
      // autoplay may fail on some browsers
    });
  }, []);

  const handleClick = () => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    video.muted = false;
    video.volume = 1;
    video.play();
    setIsClicked(true);
  };

  return (
    <div className="relative size-full">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        width={width}
        height={height}
        loop={true}
        playsInline
        preload="metadata"
        style={{ display: "block", maxWidth: "100%", height: "100%", cursor: "pointer", objectFit: "cover" }}
        onClick={handleClick}
      >
        Your browser does not support the video tag.
      </video>

      <div className="flex justify-center items-center size-[68px] rounded-full bg-[#151518] border border-white/25 absolute bottom-4 right-4 z-10 shadow-[0_4px_32px_0.8px_#24242E_inset] bg-[radial-gradient(41%_95%_at_50%_99.9%,rgba(35,35,45,0.5)_0%,rgba(11,11,12,0.5)_100%)]">
        <PlayIcon />
      </div>
    </div>
  );
};

export default VideoPlayer;
