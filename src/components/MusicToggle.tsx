import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Using a royalty-free ambient music URL
    audioRef.current = new Audio(
      "https://cdn.pixabay.com/audio/2024/11/28/audio_3a239021c5.mp3"
    );
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 rounded-full bg-card/80 p-3 shadow-warm backdrop-blur-sm border border-border transition-colors hover:bg-secondary"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isPlaying ? "Mute music" : "Play music"}
    >
      {isPlaying ? (
        <Volume2 className="h-5 w-5 text-gold" />
      ) : (
        <VolumeX className="h-5 w-5 text-muted-foreground" />
      )}
    </motion.button>
  );
};

export default MusicToggle;
