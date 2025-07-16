import { Component, Input, OnInit } from '@angular/core';
import { MatchService } from '../../services/match-service';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-match-tile',
  imports: [MatIconModule, CommonModule],
  templateUrl: './match-tile.html',
  styleUrl: './match-tile.scss'
})
export class MatchTile implements OnInit {
  @Input() index!: number;
  // Aqui você pode definir as propriedades necessárias para o componente
  match: any; // Substitua 'any' pelo tipo correto se necessário
  title: string = '';
  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
    this.match = this.matchService.matches[this.index];
    if (this.match.status === 'Finalizado') {
      let gameScore = this.getResult(this.match.score);
      this.title = this.match.teamA + ' ' + gameScore[0] + ' vs '  + gameScore[1] + " " + this.match.teamB ;
    } else {
      this.title = this.match.teamA + ' vs ' + this.match.teamB;
    }

    if (!this.match) {
      console.error(`Match not found for index: ${this.index}`);
    } else {
    }
  }

  getResult(score: number[][]): [number, number] {
  let result: [number, number] = [0, 0]; // [teamA wins, teamB wins]

  for (const set of score) {
    if (set[0] > set[1]) {
      result[0]++; // teamA wins this set
    } else if (set[1] > set[0]) {
      result[1]++; // teamB wins this set
    }
    // if equal, nobody wins — ignore
  }

  return result;
}
}

