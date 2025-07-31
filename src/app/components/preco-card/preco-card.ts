import { Component, OnInit } from '@angular/core';
import { AcoesMercadoService } from '../../service/acoes-mercado-service/acoes-mercado-service';
import { CommonModule } from '@angular/common';
import { take } from 'rxjs';

@Component({
  selector: 'app-preco-card',
  imports: [CommonModule],
  templateUrl: './preco-card.html',
  styleUrl: './preco-card.css'
})
export class PrecoCard implements OnInit {
  preco: any;

  constructor(private readonly acoesMercadoService: AcoesMercadoService) {}

  ngOnInit(): void {
    this.acoesMercadoService.getPrecos().pipe(take(1)).subscribe(data => {
      if (data?.ticker) {
        this.preco = data;
      }
    });
  }
}
