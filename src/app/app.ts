import { Component, signal } from '@angular/core';
import { LandingPage } from "./components/landing-page/landing-page";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('tournament-public');
}
