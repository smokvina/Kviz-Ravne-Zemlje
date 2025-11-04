import { Component, ChangeDetectionStrategy, signal, computed, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from '../../services/quiz.service';
import { QuizQuestion } from '../../models/quiz.model';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizComponent implements OnInit {
  private quizService = inject(QuizService);
  
  readonly TOTAL_QUESTIONS = 10;

  quizState = signal<'start' | 'playing' | 'finished'>('start');
  questions = signal<QuizQuestion[]>([]);
  currentQuestionIndex = signal(0);
  selectedAnswer = signal<string | null>(null);
  isAnswerCorrect = signal<boolean | null>(null);
  score = signal(0);
  showEvidence = signal(false);

  currentQuestion = computed(() => {
    if (this.questions().length > 0 && this.currentQuestionIndex() < this.questions().length) {
      return this.questions()[this.currentQuestionIndex()];
    }
    return undefined;
  });

  ngOnInit() {
    this.questions.set(this.quizService.getQuestions(this.TOTAL_QUESTIONS));
  }
  
  startQuiz() {
    this.questions.set(this.quizService.getQuestions(this.TOTAL_QUESTIONS));
    this.currentQuestionIndex.set(0);
    this.score.set(0);
    this.selectedAnswer.set(null);
    this.isAnswerCorrect.set(null);
    this.showEvidence.set(false);
    this.quizState.set('playing');
  }

  selectAnswer(answer: string) {
    if (this.selectedAnswer() !== null) return;

    const question = this.currentQuestion();
    if (!question) return;

    this.selectedAnswer.set(answer);
    const correct = answer === question.correctAnswer;
    this.isAnswerCorrect.set(correct);
    
    if (correct) {
      this.score.update(s => s + 1);
      setTimeout(() => this.showEvidence.set(true), 500);
    }
  }

  nextQuestion() {
    this.showEvidence.set(false);
    if (this.currentQuestionIndex() < this.questions().length - 1) {
      this.currentQuestionIndex.update(i => i + 1);
      this.selectedAnswer.set(null);
      this.isAnswerCorrect.set(null);
    } else {
      this.quizState.set('finished');
    }
  }

  getButtonClass(option: string): string {
    if (this.selectedAnswer() === null) {
      return 'bg-slate-700 hover:bg-slate-600';
    }
    const question = this.currentQuestion();
    if(!question) return '';
    const isCorrect = option === question.correctAnswer;
    const isSelected = option === this.selectedAnswer();

    if (isCorrect) {
      return 'bg-green-600';
    }
    if (isSelected && !isCorrect) {
      return 'bg-red-600';
    }
    return 'bg-slate-700 opacity-50 cursor-not-allowed';
  }
}
