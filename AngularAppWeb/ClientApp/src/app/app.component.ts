import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navLinks = [
    { label: 'Introduction', path: '/intro' },
    { label: 'Users', path: '/users' }
  ];
}
