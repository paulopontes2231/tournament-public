import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatchService } from '../../../services/match-service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FinishMatch } from '../finish-match/finish-match';

@Component({
  selector: 'app-update-match',
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './update-match.html',
  styleUrl: './update-match.scss'
})
export class UpdateMatch implements OnInit {
  @Input() index!: number;
  finalizado: boolean = false;
  constructor(public matchService: MatchService, public matDialog: MatDialog) { }

  ngOnInit(): void {
    if (this.matchService.matches[this.index].status === 'Finalizado') {
      this.finalizado = true;
    }
  }

  start() {
    this.matchService.matches[this.index].status = 'A decorrer';
    this.matchService.startMatch(this.matchService.matches[this.index]).subscribe({
      next: (match) => {
        this.matchService.matches[this.index] = match;
      },
      error: (error) => {
        console.error('Erro ao iniciar o jogo:', error);
      }
    });
  }

  finish() {
    this.matDialog.open(FinishMatch, {
      width: '600px',
      height: '600px',
      data: {
        index: this.index,
        match: this.matchService.matches[this.index]
      }
    }).afterClosed().subscribe(result => {
      if (result) {
        this.matchService.matches[this.index].status = 'Finalizado';
        this.matchService.finishMatch(this.matchService.matches[this.index]).subscribe({
          next: (match) => {
            this.matchService.matches[this.index] = match;
            this.finalizado = true;
          },
          error: (error) => {
            console.error('Erro ao finalizar o jogo:', error);
          }
        });
      }
    })
      ;

  }

  deleteMatch() {
    this.matchService.deleteMatch(this.matchService.matches[this.index]).subscribe({
      next: () => {
        this.matchService.matches.splice(this.index, 1);
      },
      error: (error) => {
        console.error('Erro ao apagar o jogo:', error);
      }
    });
  }


}
