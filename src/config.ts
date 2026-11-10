export const birthday = {
  name: "Fahim Talukdar",
  date: "11 November 2026",
  letter: [
    "A very special day belongs to a very special person.",
    "Today is a reminder of how amazing, kind, and irreplaceable you are.",
    "This little universe was made just for you.",
  ],
  scenes: [
    "invitation",
    "letter",
    "portal",
    "constellation",
    "garden",
    "memories",
    "challenge",
    "gift",
    "celebration",
  ],
} as const;

export type PersonalMedia = {
  photo?: string;
  photoPosition?: string;
  voice?: string;
  video?: string;
  ambientMusic?: string;
};
// Set local /media/... paths here when personal media is available.
export const personalMedia: PersonalMedia = {
  ambientMusic: "/audio/birthday-theme.mp3",
  photo: "/images/fahim/fahim-03.jpg",
  photoPosition: "50% 25%",
};
export const giftMessage = {
  greeting: `Dear ${birthday.name},`,
  paragraphs: [
    "Life is filled with countless moments, but some people make those moments a little brighter.",
    "You are one of those people.",
    "On your birthday, I wish you happiness, good health, success, and countless reasons to smile.",
    "May the coming year bring you beautiful memories, exciting opportunities, and dreams worth chasing.",
  ],
  birthdayWish: `Happy Birthday, ${birthday.name}!`,
  signoff: "Keep shining, always.",
};
export const finalWishes = {
  subtitle: "The universe is brighter because you exist.",
  paragraphs: [
    "May your days be filled with happiness, your heart with peace, and your future with wonderful possibilities.",
    "Keep dreaming, keep smiling, and keep being the amazing person you are.",
  ],
  cardWish:
    "May your days be filled with happiness, your heart with peace, and your future with wonderful possibilities.",
};

export const wishes = [
  {
    id: "happiness",
    title: "Happiness",
    message:
      "May you always find happiness in every little thing you do. You deserve all the good things in this world, Fahim Talukdar.",
  },
  {
    id: "success",
    title: "Success",
    message:
      "May every small step bring you closer to your biggest dreams. Keep believing in yourself, Fahim Talukdar — wonderful things are ahead.",
  },
  {
    id: "health",
    title: "Good Health",
    message:
      "May your days be filled with strength, peaceful nights, and the energy to do everything you love.",
  },
  {
    id: "adventures",
    title: "Beautiful Adventures",
    message:
      "May life lead you to beautiful places, unexpected discoveries, and adventures that make your heart feel alive.",
  },
  {
    id: "memories",
    title: "Wonderful Memories",
    message:
      "May you collect moments worth keeping forever, surrounded by people who are happy to share them with you.",
  },
];
export const flowers = [
  "You make ordinary moments feel special.",
  "May your dreams grow bigger every year.",
  "Never lose that wonderful smile.",
  "Your best adventures are still ahead.",
  "Stay exactly the amazing person you are.",
];
export type Memory = {
  id: string;
  image?: string;
  caption: string;
  date?: string;
  description?: string;
  imagePosition?: string;
  imageFit?: "cover" | "contain";
};
// Fahim's birthday memories.
export const memories: Memory[] = [
  {
    id: "festive-moments",
    image: "/images/fahim/fahim-01.jpg",
    imagePosition: "50% 35%",
    caption: "A special moment, a memory worth keeping.",
    description: "Here is to celebrations and all the joy they bring.",
  },
  {
    id: "next-adventure",
    image: "/images/fahim/fahim-02.jpg",
    imagePosition: "50% 35%",
    caption: "A little sunshine, a world of possibilities.",
    description: "May the next chapter bring even more reasons to smile.",
  },
  {
    id: "keep-shining",
    image: "/images/fahim/fahim-03.jpg",
    imagePosition: "50% 35%",
    caption: "Keep dreaming. Keep smiling. Keep being you.",
    description: "The best adventures are still waiting for you, Fahim Talukdar.",
  },
];
export const puzzlePhoto = {
  image: "/images/fahim/fahim-03.jpg",
  position: "50% 35%",
  alt: "Fahim Talukdar wearing sunglasses and a magenta panjabi",
};
export const quiz = [
  {
    question: "What makes a birthday truly special?",
    answers: [
      "Expensive gifts",
      "People who care about you",
      "A perfect cake",
      "Social media likes",
    ],
    correct: 1,
    feedback: "Exactly. The people who care make every celebration brighter.",
  },
  {
    question: "What should Fahim Talukdar collect in this magical universe?",
    answers: ["Stress", "Worries", "Happiness and memories", "Homework"],
    correct: 2,
    feedback: "Happiness and memories — the best treasures to keep.",
  },
  {
    question: "What is waiting at the end of this journey?",
    answers: [
      "An ordinary webpage",
      "A magical surprise",
      "A login screen",
      "An exam",
    ],
    correct: 1,
    feedback: "A little magic is waiting just for you!",
  },
];
