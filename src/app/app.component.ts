import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Vaiku dienos stovykla';

  constructor(private auth: AuthService) {
    auth.isLoggedIn();
  }
}
