import { Component } from '@angular/core';
import { QuestionService } from './question.service';
import { QuestionBase } from './questionbase';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  template: `
  <div>
    <h2> Student UbiComp 2020 Grades </h2>
    <app-dynamicform [questions]="questions$ | async"></app-dynamicform>
    </div>
    `,
    providers: [QuestionService]
})
export class AppComponent {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
