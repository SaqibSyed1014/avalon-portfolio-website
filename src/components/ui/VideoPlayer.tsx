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

      <div className="opacity-0 flex justify-center items-center size-12 rounded-full bg-[#151518] custom-gradient absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <PlayIcon />
      </div>
    </div>
  );
};

export default VideoPlayer;
