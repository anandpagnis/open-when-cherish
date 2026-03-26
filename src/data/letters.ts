export interface Letter {
    id: string;
    label: string;
    emoji: string;
    color: string;
    message: string;
    musicUrl: string;
}


import sixMonthSong from "../assets/6mjapan.mp3";


export const letters: Letter[] = [
    {
        id: "6month",
        label: "Open when its our 6 month Anniversary",
        emoji: "🥺",
        color: "from-blush/40 to-secondary/60",
        message: `Asmi, My love,\n\n This is big, We have been through fights, tough times and some very kinky times, these past 6 months have been a rollercoaster and one that I wanna sit in forever\n
       \nI love everything about you, the way you talk to me, the little faces you make the noises that you make, the video notes that you send me, they fill my heart with love and it just has some kind of special warmth to it. \n
       \n I cherish the best days with you, the movies we watched together, the way you lift me up when im feeling low, the conversations we have, how sexy and cute and pretty and amazing you look everyday, I love how sexy you get when we talk dirty even when im in class, or just the warmth and peace of sitting in silence with you. \n
       I dread the worst days, Even though I love when you make your pouty faces when you get mad at me, I hate that I cant make you feel my love for you even in those moments.\n
        But in this all, my heart and my throat swells up in the best way possible when I see your pretty smile pop up on my screen despite of when you hate me.\n
        There's been times where I was upset with you but through it all the only person I wanted to talk to was you, the only thing I would long for is to see you smile and give me a pyaari si pucchi.\n
         I cant put it into words how much you mean to me and how much I love us for choosing each other even on our worst days.\n
          I've seen your nakhre, Ive seen your mood swings, Ive seen you blossom and Ive seen u gloom and I would choose you on every single one of those days, I love all of it and I love all of you.\n
       \nAlways yours, Anand 💛`,
        musicUrl: sixMonthSong,
    },
    // {
    //     id: "miss-me",
    //     label: "Open when you miss me",
    //     emoji: "💌",
    //     color: "from-secondary/50 to-blush/40",
    //     message: `Hey you,\n\nIf you're reading this, it means I'm not right there beside you — and I hate that. But close your eyes for a second. Think about my voice, my laugh, the way I look at you like you're the whole universe.\n\nI'm thinking of you right now. Right this very second. Wherever I am, a part of me is always with you. The distance? It's temporary. But what we have? That's forever.\n\nUntil I can hold you again, hold this letter close. It carries all my love.\n\nMissing you more than words can say. 💕`,
    //     musicUrl: "https://cdn.pixabay.com/audio/2022/10/25/audio_600368f2de.mp3",
    // },
    // {
    //     id: "cant-sleep",
    //     label: "Open when you can't sleep",
    //     emoji: "🌙",
    //     color: "from-accent/30 to-muted/50",
    //     message: `Sweet dreams, my love,\n\nCan't sleep? I wish I were there to play with your hair, to whisper softly, to just be your calm in the quiet of the night.\n\nClose your eyes. Breathe slowly. Imagine us in our favorite place — wherever that is for you. Maybe on the couch, maybe under the stars. I'm right there with you.\n\nYou are safe. You are loved. And tomorrow will come gently.\n\nNow rest, my heart. I'll be here when you wake up.\n\nGoodnight, my everything. 🌙`,
    //     musicUrl: "https://cdn.pixabay.com/audio/2023/10/30/audio_e4b498ef40.mp3",
    // },
    // {
    //     id: "motivation",
    //     label: "Open when you need motivation",
    //     emoji: "🔥",
    //     color: "from-gold-light/40 to-accent/30",
    //     message: `Listen to me,\n\nYou are capable of incredible things. I have watched you overcome challenges that would break most people, and you did it with grace and strength that took my breath away.\n\nWhatever you're facing right now — you've got this. Not because it's easy, but because you are extraordinary. I believe in you with every fiber of my being.\n\nSo take that deep breath. Stand tall. And go show the world what I already know — that you are unstoppable.\n\nYour biggest fan, always. 🌟`,
    //     musicUrl: "https://cdn.pixabay.com/audio/2023/07/19/audio_e552178fd4.mp3",
    // },
    // {
    //     id: "happy",
    //     label: "Open when you're happy",
    //     emoji: "✨",
    //     color: "from-gold-light/30 to-cream",
    //     message: `YOU'RE HAPPY!\n\nAnd that makes my heart so full it could burst. I love seeing you smile, hearing you laugh, watching your eyes light up with joy.\n\nWhatever is making you happy right now — you deserve every single bit of it. Soak it in. Dance if you want to. Laugh until your cheeks hurt.\n\nThis moment? This feeling? Hold onto it. And know that your happiness is my happiness too.\n\nKeep shining, beautiful soul. ✨`,
    //     musicUrl: "https://cdn.pixabay.com/audio/2024/02/14/audio_8e65064a9e.mp3",
    // },
    // {
    //     id: "alone",
    //     label: "Open when you feel alone",
    //     emoji: "🤍",
    //     color: "from-muted to-card",
    //     message: `My dearest,\n\nYou are not alone. I know it might feel that way right now, and I'm sorry. Loneliness can be so loud in the silence.\n\nBut I need you to hear this: you are loved beyond measure. By me. By the people who care about you. By this universe that was kind enough to bring us together.\n\nEven when I'm not beside you, I am with you — in every memory we've made, in every promise I've kept, in the love that connects us across any distance.\n\nYou are never, ever alone. I promise.\n\nWith all my love. 🤍`,
    //     musicUrl: "https://cdn.pixabay.com/audio/2023/04/07/audio_417b023a49.mp3",
    // },
    // {
    //     id: "reminder",
    //     label: "Open when you need a reminder of us",
    //     emoji: "💞",
    //     color: "from-blush/30 to-secondary/40",
    //     message: `Remember us?\n\nRemember the first time we talked and couldn't stop? The way everything just clicked, like the universe had been waiting for us to find each other?\n\nRemember the laughter, the late-night conversations, the comfortable silences that said more than words ever could?\n\nWe are a love story still being written. And every chapter gets more beautiful.\n\nSo whenever you need a reminder — we are real. We are strong. We are magic.\n\nAnd I'd choose you again. Every single time.\n\nForever yours. 💞`,
    //     musicUrl: "https://cdn.pixabay.com/audio/2023/09/27/audio_3bff27687d.mp3",
    // },
];
