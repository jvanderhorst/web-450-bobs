import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';
//import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { QuestionService } from '../services/question.service';
import { Question } from '../models/question';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  questions: Question[];
  
  constructor(
    private authService: AuthService,
    private questionService: QuestionService
    ) {}

  ngOnInit() {
    this.getAllQuestions();
  }

  onSubmit(form: NgForm) {
    this.authService.postUser(form.value).subscribe(
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

  /*checkPasswords(form: NgForm){
    let password = group.controls.password.value;
    let confirmPassword = group.controls.confirmPassword.value;

    return password === confirmPassword ? null : { notSame: true }
  }*/

  resetForm(form: NgForm) {
    this.authService.selectedUser = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      streetAddress: '',
      city: '',
      state: '',
      zipCode: '',
      username: '',
      password: '',
      confirmPassword: '',
      questionOne: {
        questionName: '',
        answer: ''
      },
      questionTwo: {
        questionName: '',
        answer: ''
      },
      questionThree: {
        questionName: '',
        answer: ''
      },
      role: 'standard'
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

  getAllQuestions(): void {
    this.questionService.getAllQuestions()
    .subscribe(questions => this.questions = questions)
  }

}
