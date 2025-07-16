import { Component } from '@angular/core';
import { MatchTile } from '../../match-tile/match-tile';
import { CommonModule } from '@angular/common';
import { MatchService } from '../../../services/match-service';
import { UpdateMatch } from "../update-match/update-match";

@Component({
  selector: 'app-all-matches-admin',
  imports: [MatchTile, CommonModule, UpdateMatch],
  templateUrl: './all-matches.html',
  styleUrl: './all-matches.scss'
})
export class AllMatches {
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
