import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions:Question[];
  constructor() {
  this.questions = [{
    text: 'what is your name?',
    answer: 'My name is oswaldo',
    hide: true
  },
  {
    text: 'what is your favorite color?',
    answer: 'My favorite color is blue',
    hide: true

  },
  {
    text: 'what is your favorite language?',
    answer: 'My favorite language is JavaScript',
    hide: true

  }];
}
  getQuestions(){
    return this.questions;
  }
}
