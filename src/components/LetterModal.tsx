import { motion, AnimatePresence } from "framer-motion";
import { X, Heart } from "lucide-react";
import type { Letter } from "@/data/letters";

interface LetterModalProps {
  letter: Letter | null;
  onClose: () => void;
}

const LetterModal = ({ letter, onClose }: LetterModalProps) => {
  if (!letter) return null;

  return (
    <AnimatePresence>
      {letter && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-foreground/30 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Letter Content */}
          <motion.div
            className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-cream border border-border paper-texture"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Top decorative gradient */}
            <div className={`h-2 rounded-t-2xl bg-gradient-to-r ${letter.color}`} />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-6 rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="px-8 py-10 sm:px-12 sm:py-14">
              {/* Header */}
              <div className="mb-8 text-center">
                <motion.span
                  className="mb-3 inline-block text-4xl"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  {letter.emoji}
                </motion.span>
                <h2 className="font-display text-2xl font-semibold italic text-foreground sm:text-3xl">
                  {letter.label}
                </h2>
                <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
              </div>

              {/* Letter Body */}
              <motion.div
                className="font-handwritten text-xl leading-relaxed text-warm-brown sm:text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {letter.message.split("\n").map((line, i) => (
                  <p key={i} className={line === "" ? "h-4" : "mb-2"}>
                    {line}
                  </p>
                ))}
              </motion.div>

              {/* Footer decoration */}
              <motion.div
                className="mt-10 flex items-center justify-center gap-2 text-blush"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="h-px w-12 bg-blush/50" />
                <Heart className="h-4 w-4 fill-current" />
                <div className="h-px w-12 bg-blush/50" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LetterModal;
