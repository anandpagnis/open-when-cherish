import { motion } from "framer-motion";
import type { Letter } from "@/data/letters";

interface LetterCardProps {
  letter: Letter;
  index: number;
  onClick: () => void;
}

const LetterCard = ({ letter, index, onClick }: LetterCardProps) => {
  return (
    <motion.button
      onClick={onClick}
      className={`group relative w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${letter.color} p-6 text-left shadow-soft transition-all duration-300 hover:shadow-lifted hover:-translate-y-1 sm:p-8`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Envelope flap decoration */}
      <div className="absolute right-0 top-0 h-16 w-16 overflow-hidden">
        <div className="absolute -right-8 -top-8 h-16 w-16 rotate-45 bg-gold/10 transition-colors group-hover:bg-gold/20" />
      </div>

      <span className="mb-3 inline-block text-3xl transition-transform group-hover:scale-110">
        {letter.emoji}
      </span>

      <h3 className="font-display text-lg font-semibold italic text-foreground sm:text-xl">
        {letter.label}
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        Tap to read your letter...
      </p>

      {/* Bottom line accent */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-gold to-blush transition-all duration-500 group-hover:w-full" />
    </motion.button>
  );
};

export default LetterCard;
