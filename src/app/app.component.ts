import { Component, OnInit } from '@angular/core';
import { ITempoAtual } from './interfaces';
import { TempoService } from './tempo/tempo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  tempoAtual!: ITempoAtual
  constructor(private tempoService: TempoService) { }
  
  ngOnInit(): void {
  this.tempoService.getCurrentWeather('Lages', 'Brasil').subscribe((data) => 
  this.tempoService.tempoAtual.next(data))
  }
}