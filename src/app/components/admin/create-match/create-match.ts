import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Match } from '../../../model/match';
import { MatchService } from '../../../services/match-service';

@Component({
  selector: 'app-create-match',
  imports: [MatSelectModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule],
  templateUrl: './create-match.html',
  styleUrl: './create-match.scss'
})
export class CreateMatch {

  constructor(private matchService: MatchService) { }


  match: Match = {
    teamA: '',
    teamB: '',
    startTime: "",
    round: '',
    gameNumber: '',
    field: '',
    score: [],
    status: 'pending',
    level: '',
    gender: ''
  }

  submitMatch() {
    // Convert score back to array if needed
    try {

    } catch {
      alert('Invalid score format. Must be JSON.');
      return;
    }

    console.log('Submitting match:', this.match);
    this.matchService.createMatch(this.match).subscribe({
      next: (response: JSON) => {
        console.log('Match created successfully:', response);
        alert('Jogo criado com sucesso!');
        this.matchService.getAllMatches().subscribe({
          next: (matches) => {  
            this.matchService.matches = matches;
          },
          error: (error) => {
            console.error('Erro ao buscar os matches:', error);
            alert('Erro ao buscar os jogos. Por favor, tente novamente.');
          }
        });
        this.match = {
          teamA: '',
          teamB: '',
          startTime: "",
          round: '',
          gameNumber: '',
          field: '',
          score: [],
          status: 'pending',
          level: '',
          gender: ''
        };
      },
      error: (error: any) => {
        console.error('Error creating match:', error);
        alert('Erro ao criar o jogo. Por favor, tente novamente.');
      }
    })
  }
}
