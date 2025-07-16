import { Component } from '@angular/core';
import { FilterBar } from "../filter-bar/filter-bar";
import { AllMatches } from "../all-matches/all-matches";

@Component({
  selector: 'app-landing-page',
  imports: [FilterBar, AllMatches],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPage {

}
