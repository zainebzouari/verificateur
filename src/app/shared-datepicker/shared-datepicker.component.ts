import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-shared-datepicker',
  templateUrl: './shared-datepicker.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SharedDatepickerComponent),
      multi: true,
    },
  ],
})
export class SharedDatepickerComponent implements ControlValueAccessor, OnInit {
  private innerValue: any;

  constructor() {}

  writeValue(value: any): void {
    this.innerValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // Implement if needed
  }

  ngOnInit(): void {}

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  onDateChange(event: any): void {
    const newValue = event.value;
    this.innerValue = newValue;
    this.onChange(newValue);
    this.onTouched();
  }
}

