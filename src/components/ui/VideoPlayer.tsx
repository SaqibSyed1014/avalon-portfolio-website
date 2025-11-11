// components/VideoPlayer.tsx
import React, { useRef, useState, useEffect } from "react";

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

    // Play muted on page load
    video.muted = true;
    video.volume = 0;
    video.play().catch(() => {
      // autoplay may fail on some browsers
    });
  }, []);

  const handleClick = () => {
    const video = videoRef.current;
    if (!video) return;

    // Restart and unmute
    video.currentTime = 0;
    video.muted = false;
    video.volume = 1;
    video.play();
    setIsClicked(true);
  };

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      width={width}
      height={height}
      playsInline
      preload="metadata"
      style={{ display: "block", maxWidth: "100%", height: "100%", cursor: "pointer" }}
      onClick={handleClick}
    >
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
