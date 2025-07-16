import { Component, OnInit } from '@angular/core';
import { FilterBar } from '../filter-bar/filter-bar';
import { CreateMatch } from "./create-match/create-match";
import { AllMatches } from './all-matches/all-matches';

@Component({
  selector: 'app-admin',
  imports: [FilterBar, AllMatches, CreateMatch],
  templateUrl: './admin.html',
  styleUrl: './admin.scss'
})
export class Admin implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Admin component initialized');
  }

  // Adicione métodos e propriedades conforme necessário para a lógica do componente

}
