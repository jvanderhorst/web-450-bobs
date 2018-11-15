import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from '../models/question';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  selectedQuestion: Question = {
    questionId: '',
    questionName: ''
    };
    questions: Question[];
  constructor(private http: HttpClient) { }

//get all questions
getAllQuestions (): Observable<Question[]> {
  return this.http.get<Question[]>('/api/question')
}

postQuestion(question: Question){
  return this.http.post('/api/addQuestion', question);
}

deleteQuestion(questionId: string) {
  return this.http.delete('/api/removeQuestion/:questionId');
}

updateQuestion(question: Question) {
  return this.http.put('/api/updateQuestion/:questionId', question)
}

}
