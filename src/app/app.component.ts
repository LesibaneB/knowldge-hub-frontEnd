import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'knowledge-hub-front-end';

  constructor(private readonly _router: Router) {

  }

  public async ngOnInit(): Promise<void> {
    await this._router.navigate(['dashboard']);
  }

}
