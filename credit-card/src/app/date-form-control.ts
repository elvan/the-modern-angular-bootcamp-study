import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl {
  setValue(value: any, options: any) {
    if (value.length === 2 && !value.includes('/')) {
      super.setValue(value + '/', { ...options, emitModelToViewChange: true });
    } else {
      super.setValue(value, { ...options, emitModelToViewChange: true });
    }
  }
}
