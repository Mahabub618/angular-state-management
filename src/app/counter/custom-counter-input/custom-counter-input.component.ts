import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {CounterState} from "../state/counter.state";
import {changeName, customIncrement} from "../state/counter.actions";
import {Subject, takeUntil} from "rxjs";
import {getName} from "../state/counter.selector";

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent {
  value: number = 0;
  name: string = '';
  destroy$: Subject<any> = new Subject<any>();

  constructor(private store: Store<{ counter: CounterState}>) {
  }

  ngOnInit(): void {
    this.store.select(getName)
      .pipe(takeUntil(this.destroy$))
      .subscribe((name) => {
        // console.log('Name Observable called');
        this.name = name;
    })
  }

  onAdd() {
    this.store.dispatch(customIncrement({count: +this.value}));
  }

  onChangeName() {
    this.store.dispatch(changeName());
  }
}
