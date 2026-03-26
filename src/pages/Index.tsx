import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X } from "lucide-react";
import { letters } from "@/data/letters";
import MusicToggle from "@/components/MusicToggle";
import type { Letter } from "@/data/letters";

const pastelTones = [
  "bg-secondary/60 hover:bg-secondary/80",
  "bg-blush/30 hover:bg-blush/50",
  "bg-accent/30 hover:bg-accent/50",
  "bg-gold-light/30 hover:bg-gold-light/50",
  "bg-muted hover:bg-muted/80",
  "bg-secondary/40 hover:bg-secondary/60",
  "bg-blush/20 hover:bg-blush/40",
];

const scatterPositions = [
  { rotate: -4, x: 0, y: 0 },
  { rotate: 3, x: 0, y: 0 },
  { rotate: -2, x: 0, y: 0 },
  { rotate: 5, x: 0, y: 0 },
  { rotate: -3, x: 0, y: 0 },
  { rotate: 2, x: 0, y: 0 },
  { rotate: -5, x: 0, y: 0 },
];

const Index = () => {
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);
  const letterAudioRef = useRef<HTMLAudioElement | null>(null);

  const openLetter = useCallback((letter: Letter) => {
    // Stop any currently playing letter audio
    if (letterAudioRef.current) {
      letterAudioRef.current.pause();
      letterAudioRef.current = null;
    }
    // Play this letter's song
    const audio = new Audio(letter.musicUrl);
    audio.loop = true;
    audio.volume = 0.25;
    audio.play().catch(() => {});
    letterAudioRef.current = audio;
    setSelectedLetter(letter);
  }, []);

  const closeLetter = useCallback(() => {
    if (letterAudioRef.current) {
      letterAudioRef.current.pause();
      letterAudioRef.current = null;
    }
    setSelectedLetter(null);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 py-8 paper-texture">
      {/* Subtle decorative dots */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gold/20"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
            }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.div
        className="relative z-10 mb-8 text-center sm:mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="font-display text-4xl font-bold italic text-foreground sm:text-5xl lg:text-6xl">
          Open When…
        </h1>
        <div className="mx-auto my-4 h-px w-20 bg-gradient-to-r from-transparent via-gold to-transparent" />
        <p className="font-handwritten text-xl text-muted-foreground sm:text-2xl">
          seven little love notes, waiting just for you
        </p>
      </motion.div>

      {/* Letters — scattered grid */}
      <div className="relative z-10 mx-auto grid w-full max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4">
        {letters.map((letter, i) => (
          <motion.button
            key={letter.id}
            onClick={() => openLetter(letter)}
            className={`group relative rounded-xl border border-border/60 px-4 py-5 text-left shadow-soft transition-all duration-300 hover:shadow-lifted sm:px-5 sm:py-6 ${pastelTones[i]} ${i === 6 ? "col-span-2 sm:col-span-1" : ""}`}
            initial={{ opacity: 0, y: 20, rotate: scatterPositions[i].rotate }}
            animate={{ opacity: 1, y: 0, rotate: scatterPositions[i].rotate }}
            transition={{
              duration: 0.5,
              delay: 0.3 + i * 0.1,
              ease: "easeOut",
            }}
            whileHover={{
              rotate: 0,
              scale: 1.05,
              y: -4,
              transition: { duration: 0.25 },
            }}
            whileTap={{ scale: 0.97 }}
          >
            <h3 className="font-display text-sm font-semibold italic leading-snug text-foreground sm:text-base">
              {letter.label}
            </h3>
            <div className="mt-2 h-px w-8 bg-gold/30 transition-all duration-300 group-hover:w-full group-hover:bg-gold/60" />
          </motion.button>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        className="relative z-10 mt-8 flex items-center gap-2 text-muted-foreground sm:mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="font-handwritten text-base">with love, always</span>
        <Heart className="h-3.5 w-3.5 animate-pulse-soft fill-blush text-blush" />
      </motion.div>

      {/* Letter Modal */}
      <AnimatePresence>
        {selectedLetter && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
              onClick={closeLetter}
            />
            <motion.div
              className="relative z-10 w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl bg-cream border border-border paper-texture"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.96 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="h-1.5 rounded-t-2xl bg-gradient-to-r from-gold/40 via-blush/40 to-gold/40" />
              <button
                onClick={closeLetter}
                className="absolute right-3 top-5 z-20 rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="flex">
                {/* Left image */}
                <motion.div
                  className="hidden sm:block w-36 flex-shrink-0 overflow-hidden rounded-bl-2xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                >
                  <img
                    src={selectedLetter.imageUrl}
                    alt=""
                    className="h-full w-full object-cover opacity-70"
                    loading="lazy"
                  />
                </motion.div>

                {/* Letter content */}
                <div className="flex-1 px-8 py-10 sm:px-10 sm:py-12">
                  <div className="mb-6 text-center">
                    <h2 className="font-display text-xl font-semibold italic text-foreground sm:text-2xl">
                      {selectedLetter.label}
                    </h2>
                    <div className="mx-auto mt-3 h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
                  </div>
                  <motion.div
                    className="font-handwritten text-xl leading-relaxed text-warm-brown sm:text-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    {selectedLetter.message.split("\n").map((line, i) => (
                      <p key={i} className={line === "" ? "h-3" : "mb-1.5"}>
                        {line}
                      </p>
                    ))}
                  </motion.div>
                  <div className="mt-8 flex items-center justify-center gap-2 text-blush/60">
                    <div className="h-px w-10 bg-blush/30" />
                    <Heart className="h-3 w-3 fill-current" />
                    <div className="h-px w-10 bg-blush/30" />
                  </div>
                </div>

                {/* Right image */}
                <motion.div
                  className="hidden sm:block w-36 flex-shrink-0 overflow-hidden rounded-br-2xl"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                >
                  <img
                    src={selectedLetter.imageUrl}
                    alt=""
                    className="h-full w-full object-cover opacity-70"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <MusicToggle />
    </div>
  );
};

export default Index;
