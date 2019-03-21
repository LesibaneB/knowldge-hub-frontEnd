import {Type} from '@angular/core';

export function spyOnClass<T>(spiedClass: Type<T>): any {
  const prototype = spiedClass.prototype;

  const methods = Object.getOwnPropertyNames(prototype)
  // Object.getOwnPropertyDescriptor is required to filter functions
    .map(name => [name, Object.getOwnPropertyDescriptor(prototype, name)])
    .filter(([name, descriptor]) => {
      // select only functions
      return (descriptor as PropertyDescriptor).value instanceof Function;
    })
    .map(([name]) => name);

  return jasmine.createSpyObj('spy', [...methods]);
}
