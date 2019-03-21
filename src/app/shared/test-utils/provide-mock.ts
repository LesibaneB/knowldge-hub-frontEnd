import {Type} from '@angular/core';
import {spyOnClass} from './spy-on-class';

export function provideMock<T>(spiedClass: Type<T>): any {
  return {
    provide: spiedClass,
    useValue: spyOnClass(spiedClass)
  };
}
