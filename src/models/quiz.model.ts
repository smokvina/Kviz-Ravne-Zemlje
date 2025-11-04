export interface Claim {
  id: number;
  claim_summary_hr: string;
  claim_full_text_en: string;
  sources: number[];
}

export interface QuizQuestion {
  id: number;
  questionText: string;
  options: string[];
  correctAnswer: string;
  evidence: string;
}
