import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DebugElement} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {SearchBarComponent} from '../search-bar/search-bar.component';
import {HeaderComponent} from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        SearchBarComponent,
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        NgZorroAntdModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  function getDebugElement(cssSelector: string): DebugElement {
    return debugElement.query(By.css(cssSelector));
  }

  it('should call signIn() when the sign-in button is clicked', function (): void {
    const signInButton: DebugElement = getDebugElement('#sign-in');
    spyOn(component, 'signIn').and.callThrough();
    signInButton.nativeElement.click();
    expect(component.signIn).toHaveBeenCalled();
  });

  it('should call signIn() when the sign-in button is clicked', function (): void {
    const signInButton: DebugElement = getDebugElement('#sign-up');
    spyOn(component, 'signUp').and.callThrough();
    signInButton.nativeElement.click();
    expect(component.signUp).toHaveBeenCalled();
  });
});
