import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HeaderStickyDirective} from './header-sticky.directive';
import {Component, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('HeaderStickyDirective', () => {
  let component: TestHoverFocusComponent;
  let fixture: ComponentFixture<TestHoverFocusComponent>;
  let debugElement: DebugElement;

  @Component({
    template: `
      <div class="header" id="header" appHeaderSticky></div>`
  })
  class TestHoverFocusComponent {
  }

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TestHoverFocusComponent, HeaderStickyDirective]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHoverFocusComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should fires scroll event successfully', function (): void {
    fixture.detectChanges();
    const appliedDirective = debugElement.query(By.css('.header'));
    appliedDirective.nativeElement.scrollTop += 100;
    appliedDirective.nativeElement.scrollLeft += 100;
    console.log(appliedDirective);
  });
});
