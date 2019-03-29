import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHeaderSticky]'
})
export class HeaderStickyDirective {

  constructor(private readonly _elem: ElementRef,
              private readonly _renderer: Renderer2) {
  }

  @HostListener('window:scroll', ['$event'])
  public onScrollEvent($event): void {
    const header = document.getElementById('header');
    const sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
      this._renderer.addClass(this._elem.nativeElement, 'sticky');
    } else {
      this._renderer.removeClass(this._elem.nativeElement, 'sticky');
    }
  }

}
