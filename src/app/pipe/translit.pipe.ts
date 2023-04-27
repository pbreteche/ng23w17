import { Pipe, PipeTransform } from '@angular/core';
import { transliterate } from 'transliteration';

@Pipe({
  name: 'translit'
})
export class TranslitPipe implements PipeTransform {

  transform(value: string|undefined, ignore: string[] = []): string|undefined {
    if (typeof value != 'string') {
      return;
    }
    
    return transliterate(value, {ignore: ignore})
  }
}
