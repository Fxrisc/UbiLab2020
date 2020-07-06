import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../questionbase';
import { QuestionControlService } from '../questioncontrol.service';


@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  providers: [ QuestionControlService]
})
export class DynamicformComponent implements OnInit {

  @Input() questions: QuestionBase<string>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

}
