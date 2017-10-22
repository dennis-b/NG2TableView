import { Injector } from '@angular/core';

let appInjectorRef:Injector;
export const setInjector = (injector?:Injector) => {
    if (injector) {
    appInjectorRef = injector;
  }
};


export const getInjector = ():Injector => {
  return appInjectorRef;
};


export class Utils {

  static appInjectorRef:Injector = getInjector();

  static getService(service) {
    return appInjectorRef.get(service);
  }


}
