import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { NgperfComponent, NgperfService } from '@coderbaseit/ngperf3';

@Component({
  selector: 'hello',
  template: `
  <h1>Hello {{name}}! </h1>
  <ul>
  <li *ngFor="let log of logs$ | async">  {{ log }} </li>
  </ul>
  
  `,
  styles: [`h1 { font-family: Lato; }`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloComponent
  extends NgperfComponent
  implements DoCheck, OnChanges
{
  @Input() name: string;
  constructor(private NgperfService: NgperfService) {
    super(NgperfService);
  }

  ngOnChanges(simple: SimpleChanges) {
    super.ngOnChanges(simple);
  }

  ngDoCheck() {
    super.ngDoCheck();
  }
}
