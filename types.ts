export interface StoryStep {
  title: string;
  description: string;
  image: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  myAnswer: string;
  note: string;
}

export interface FuturePlan {
  title: string;
  icon: string;
}

export interface LetterBlock {
  heading: string;
  text: string;
}