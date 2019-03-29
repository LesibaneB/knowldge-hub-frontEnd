import {Component, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  public ngOnInit(): void {
  }

  public signIn(): void {
    console.log('Signing in');
  }

  public signUp(): void {
    console.log('Signing up');
  }
}
