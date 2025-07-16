import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../services/match-service';
import { MatchTile } from "../match-tile/match-tile";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-matches',
  imports: [MatchTile, CommonModule],
  templateUrl: './all-matches.html',
  styleUrl: './all-matches.scss'
})
export class AllMatches implements OnInit {
  // Aqui você pode definir as propriedades necessárias para o componente
  matches: any; // Substitua 'any' pelo tipo correto se necessário

 constructor(public matchService: MatchService) { }

  ngOnInit(): void {
    this.matchService.getAllMatches().subscribe({
      next: (matches) => {
      
        this.matchService.matches = matches;
      },
      error: (error) => {
        console.error('Erro ao buscar os matches:', error);
      }
    });
  }

}
