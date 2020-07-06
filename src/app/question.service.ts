import { Injectable } from '@angular/core';
import { DropdownQuestion } from './questiondropdown';
import { QuestionBase } from './questionbase';
import { TextboxQuestion } from './questiontexbox';
import { of } from 'rxjs';

@Injectable()
export class QuestionService {

    //TODO: get from a remote source of question metadata
    getQuestions() {

        let questions: QuestionBase<string>[] = [

            new DropdownQuestion({
                key: 'grade',
                label: 'Grade Performance',
                options: [
                   {key: 'excellent', value: 'Excellent'},
                   {key: 'good', value: 'Good'},
                   {key: 'satisfactory', value: 'Satisfactory'},
                   {key: 'poor', value: 'Poor'}
                ],
                order: 3
            }),

            new TextboxQuestion({
                key: 'StudentName',
                label: 'Student Name',
                value: 'Ali Atan',
                required: true,
                order: 1
            }),

            new TextboxQuestion({
                key: 'TestGrade',
                label: 'Test Grade',
                //type: 'email',
                order: 2
            })
        ];
        return of(questions.sort((a, b) => a.order - b.order));
    }
}