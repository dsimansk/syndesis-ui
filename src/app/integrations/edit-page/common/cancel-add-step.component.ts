import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CurrentFlow } from '../current-flow.service';

@Component({
  selector: 'syndesis-cancel-add-step',
  template: `
    <button type="button"
            class="btn btn-default"
            (click)="onClick()"
            *ngIf="isIntermediateStep()">Cancel</button>
  `,
})
export class CancelAddStepComponent implements OnInit {

  private position: number;

  constructor(
    public currentFlow: CurrentFlow,
    public route: ActivatedRoute,
    public router: Router,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => this.position = +paramMap.get('position'));
  }

  isIntermediateStep(): boolean {
    return this.position !== 0 && this.position !== this.currentFlow.getLastPosition();
  }

  onClick() {
    this.currentFlow.events.emit({
      kind: 'integration-remove-step',
      position: this.position,
      onSave: () => {
        this.router.navigate(['save-or-add-step'], { relativeTo: this.route.parent });
      },
    });
  };

}