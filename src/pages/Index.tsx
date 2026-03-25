import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { letters } from "@/data/letters";
import LetterCard from "@/components/LetterCard";
import LetterModal from "@/components/LetterModal";
import MusicToggle from "@/components/MusicToggle";
import heroBg from "@/assets/hero-bg.jpg";
import envelopeImg from "@/assets/envelope.png";
import type { Letter } from "@/data/letters";

const Index = () => {
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt=""
            className="h-full w-full object-cover opacity-40"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        </div>

        <motion.div
          className="relative z-10 max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Envelope image */}
          <motion.img
            src={envelopeImg}
            alt="Love letter envelope"
            className="mx-auto mb-8 w-28 sm:w-36"
            width={512}
            height={512}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />

          <motion.h1
            className="font-display text-5xl font-bold italic text-foreground sm:text-7xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Open When…
          </motion.h1>

          <motion.div
            className="mx-auto my-6 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />

          <motion.p
            className="font-handwritten text-2xl leading-relaxed text-muted-foreground sm:text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Seven letters. Seven moments. One love that stretches across every
            distance and fills every silence.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            className="mt-12 flex flex-col items-center gap-2 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <span className="text-sm tracking-widest uppercase">
              Scroll to read
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="h-4 w-4 fill-blush text-blush" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Letters Grid */}
      <section className="relative px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl font-semibold italic text-foreground sm:text-4xl">
              Your Letters
            </h2>
            <p className="mt-3 font-handwritten text-xl text-muted-foreground">
              Each one written just for you, for that exact moment
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {letters.map((letter, index) => (
              <LetterCard
                key={letter.id}
                letter={letter}
                index={index}
                onClick={() => setSelectedLetter(letter)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pb-20 pt-10 text-center">
        <motion.div
          className="flex items-center justify-center gap-2 text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="font-handwritten text-lg">Made with</span>
          <Heart className="h-4 w-4 animate-pulse-soft fill-blush text-blush" />
          <span className="font-handwritten text-lg">just for you</span>
        </motion.div>
      </footer>

      {/* Modal */}
      <LetterModal
        letter={selectedLetter}
        onClose={() => setSelectedLetter(null)}
      />

      {/* Music Toggle */}
      <MusicToggle />
    </div>
  );
};

export default Index;
