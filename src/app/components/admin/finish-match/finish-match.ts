import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Match } from '../../../model/match';
import { MatchService } from '../../../services/match-service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-finish-match',
  imports: [MatSelectModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './finish-match.html',
  styleUrl: './finish-match.scss'
})
export class FinishMatch implements OnInit {

    scores: string[][] = [["", ""]];


  constructor(public dialog: MatDialogRef<FinishMatch>, public matchService: MatchService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.data.match.scores =  [["",""]];
  }

  submitMatch() {
    this.data.match.status = 'Finalizado';
    this.matchService.matches[this.data.index].score = this.scores;
    this.dialog.close(this.data.match);
  }

  addSet() {
    this.scores.push(["", ""]);
  }

  removeSet(i: number) {
    this.scores.splice(i, 1);
  }

}
