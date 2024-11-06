import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeneralComponent } from './general/general.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GeneralComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
}
