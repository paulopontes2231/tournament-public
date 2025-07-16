import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatchService } from '../../services/match-service';
import { PedidoFiltro } from '../../model/PedidoFiltro';

@Component({
  selector: 'app-filter-bar',
  imports: [MatSelectModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule],
  templateUrl: './filter-bar.html',
  styleUrl: './filter-bar.scss'
})
export class FilterBar {

  selectedEscalao: any = null;
  selectedGenero: any = null;
  nomeEquipa: any = null;


  constructor(private matchService: MatchService) { }

  pesquisar() {
    let pedidoFiltro: PedidoFiltro = {
      escalao: this.selectedEscalao,
      genero: this.selectedGenero,
      nomeEquipa: this.nomeEquipa
    };
    this.matchService.getMatchesByFilter(pedidoFiltro).subscribe({
      next: (matches) => {
        this.matchService.matches = matches;
      },
      error: (error) => {
        console.error('Erro ao buscar os matches filtrados:', error);
      }
    })
  }

  limparFiltros() {
    this.selectedEscalao = null;
    this.selectedGenero = null;
    this.nomeEquipa = null;
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
