import letterSad from "@/assets/letter-sad.jpg";
import letterMiss from "@/assets/letter-miss.jpg";
import letterSleep from "@/assets/letter-sleep.jpg";
import letterMotivation from "@/assets/letter-motivation.jpg";
import letterHappy from "@/assets/letter-happy.jpg";
import letterAlone from "@/assets/letter-alone.jpg";
import letterReminder from "@/assets/letter-reminder.jpg";

export interface Letter {
  id: string;
  label: string;
  emoji: string;
  color: string;
  message: string;
  musicUrl: string;
  imageUrl: string;
}

export const letters: Letter[] = [
  {
    id: "sad",
    label: "Open when you're sad",
    emoji: "🥺",
    color: "from-blush/40 to-secondary/60",
    message: `My love,\n\nI know the world feels heavy right now, and I wish more than anything I could wrap you in my arms and make it all better. But even from here, I want you to know — your sadness doesn't scare me. I'm here through every tear, every quiet moment, every storm.\n\nYou are so much stronger than you know. The fact that you feel so deeply is one of the most beautiful things about you. Let yourself feel it. Don't fight it. And when you're ready, let the warmth come back in.\n\nI love you endlessly — on your brightest days and your hardest ones.\n\nAlways yours. 💛`,
    musicUrl: "https://cdn.pixabay.com/audio/2024/11/28/audio_3a239021c5.mp3",
    imageUrl: letterSad,
  },
  {
    id: "miss-me",
    label: "Open when you miss me",
    emoji: "💌",
    color: "from-secondary/50 to-blush/40",
    message: `Hey you,\n\nIf you're reading this, it means I'm not right there beside you — and I hate that. But close your eyes for a second. Think about my voice, my laugh, the way I look at you like you're the whole universe.\n\nI'm thinking of you right now. Right this very second. Wherever I am, a part of me is always with you. The distance? It's temporary. But what we have? That's forever.\n\nUntil I can hold you again, hold this letter close. It carries all my love.\n\nMissing you more than words can say. 💕`,
    musicUrl: "https://cdn.pixabay.com/audio/2022/10/25/audio_600368f2de.mp3",
    imageUrl: letterMiss,
  },
  {
    id: "cant-sleep",
    label: "Open when you can't sleep",
    emoji: "🌙",
    color: "from-accent/30 to-muted/50",
    message: `Sweet dreams, my love,\n\nCan't sleep? I wish I were there to play with your hair, to whisper softly, to just be your calm in the quiet of the night.\n\nClose your eyes. Breathe slowly. Imagine us in our favorite place — wherever that is for you. Maybe on the couch, maybe under the stars. I'm right there with you.\n\nYou are safe. You are loved. And tomorrow will come gently.\n\nNow rest, my heart. I'll be here when you wake up.\n\nGoodnight, my everything. 🌙`,
    musicUrl: "https://cdn.pixabay.com/audio/2023/10/30/audio_e4b498ef40.mp3",
    imageUrl: letterSleep,
  },
  {
    id: "motivation",
    label: "Open when you need motivation",
    emoji: "🔥",
    color: "from-gold-light/40 to-accent/30",
    message: `Listen to me,\n\nYou are capable of incredible things. I have watched you overcome challenges that would break most people, and you did it with grace and strength that took my breath away.\n\nWhatever you're facing right now — you've got this. Not because it's easy, but because you are extraordinary. I believe in you with every fiber of my being.\n\nSo take that deep breath. Stand tall. And go show the world what I already know — that you are unstoppable.\n\nYour biggest fan, always. 🌟`,
    musicUrl: "https://cdn.pixabay.com/audio/2023/07/19/audio_e552178fd4.mp3",
    imageUrl: letterMotivation,
  },
  {
    id: "happy",
    label: "Open when you're happy",
    emoji: "✨",
    color: "from-gold-light/30 to-cream",
    message: `YOU'RE HAPPY!\n\nAnd that makes my heart so full it could burst. I love seeing you smile, hearing you laugh, watching your eyes light up with joy.\n\nWhatever is making you happy right now — you deserve every single bit of it. Soak it in. Dance if you want to. Laugh until your cheeks hurt.\n\nThis moment? This feeling? Hold onto it. And know that your happiness is my happiness too.\n\nKeep shining, beautiful soul. ✨`,
    musicUrl: "https://cdn.pixabay.com/audio/2024/02/14/audio_8e65064a9e.mp3",
    imageUrl: letterHappy,
  },
  {
    id: "alone",
    label: "Open when you feel alone",
    emoji: "🤍",
    color: "from-muted to-card",
    message: `My dearest,\n\nYou are not alone. I know it might feel that way right now, and I'm sorry. Loneliness can be so loud in the silence.\n\nBut I need you to hear this: you are loved beyond measure. By me. By the people who care about you. By this universe that was kind enough to bring us together.\n\nEven when I'm not beside you, I am with you — in every memory we've made, in every promise I've kept, in the love that connects us across any distance.\n\nYou are never, ever alone. I promise.\n\nWith all my love. 🤍`,
    musicUrl: "https://cdn.pixabay.com/audio/2023/04/07/audio_417b023a49.mp3",
    imageUrl: letterAlone,
  },
  {
    id: "reminder",
    label: "Open when you need a reminder of us",
    emoji: "💞",
    color: "from-blush/30 to-secondary/40",
    message: `Remember us?\n\nRemember the first time we talked and couldn't stop? The way everything just clicked, like the universe had been waiting for us to find each other?\n\nRemember the laughter, the late-night conversations, the comfortable silences that said more than words ever could?\n\nWe are a love story still being written. And every chapter gets more beautiful.\n\nSo whenever you need a reminder — we are real. We are strong. We are magic.\n\nAnd I'd choose you again. Every single time.\n\nForever yours. 💞`,
    musicUrl: "https://cdn.pixabay.com/audio/2023/09/27/audio_3bff27687d.mp3",
    imageUrl: letterReminder,
  },
];
