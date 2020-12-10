import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: number, targetUnits: string): number {
    if (!value) {
      return 0;
    }

    switch (targetUnits) {
      case 'km':
        return value * 1.60934;
      case 'm':
        return value * 1.60934 * 1000;
      case 'mm':
        return value * 1.60934 * 1000 * 1000;
      default:
        throw new Error('Target unit not supported');
    }
  }
}
