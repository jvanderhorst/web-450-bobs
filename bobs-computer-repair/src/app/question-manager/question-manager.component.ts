import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QuestionService } from '../services/question.service';
import { Question } from '../models/question';

@Component({
  selector: 'app-question-manager',
  templateUrl: './question-manager.component.html',
  styleUrls: ['./question-manager.component.css']
})
export class QuestionManagerComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;
  questions: Question[];
  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.getAllQuestions();
  }
  onSubmit(form: NgForm) {
    this.questionService.postQuestion(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please try again';
      }
    );
  }

  resetForm(form: NgForm) {
    this.questionService.selectedQuestion = {
      questionId: '',
      questionName: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

  getAllQuestions(): void {
    this.questionService.getAllQuestions()
    .subscribe(questions => this.questions = questions)
  }

  onDelete(questionName: string, form: NgForm) {
    if(confirm ('Are you sure you want to delete this question?') == true) {
      this.questionService.deleteQuestion(questionName).subscribe((res) => {
        this.getAllQuestions();
        alert('Deleted successfully')
      })
    }
  }

  onEdit(question: Question) {
    this.questionService.selectedQuestion = question;
    this.getAllQuestions();
      
  }

  refreshquestionList() {
    this.questionService.getAllQuestions().subscribe((res) => {
      this.questionService.questions = res as Question[];
    })
  }


}
