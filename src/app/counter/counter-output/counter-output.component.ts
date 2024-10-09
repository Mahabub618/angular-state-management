import {Component, Input} from '@angular/core';
import {Store} from "@ngrx/store";
import {CounterState} from "../state/counter.state";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent {
  counter: number = 0;
  destroy$: Subject<any> = new Subject<any>();
  constructor(private store: Store<{ counter: CounterState }>) {
  }

  ngOnInit(): void {
    this.store.select('counter')
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
      this.counter = data.counter;
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(undefined);
    this.destroy$.complete();
  }
}
