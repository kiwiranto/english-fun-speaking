export type DataQuestion = {
  category: string,
  description: string,
  level: string,
  totalQuestion: number | undefined,
  questions: {
    id: number;
    question: string;
  }[];
};

export type Question = {
    id: number;
    question: string;
};

export interface SelectedCategory {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectedLevel {
  label: string;
  value: string;
  disabled?: boolean;
}