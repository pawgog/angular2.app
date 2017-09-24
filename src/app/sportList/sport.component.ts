import { Component, OnInit } from '@angular/core';

import { Sport } from './sport';
import { SportService } from './sport.service';

@Component({
  selector: 'sport-list',
  templateUrl: 'template.sport.html',
  styleUrls: ['sport.style.css'],
  providers: [SportService]
})
export class AppComponent2 implements OnInit {
  title = 'Lista najbogatszych sportowców świata';
  sports: Sport[];
  selectedSport: Sport;

  constructor(private sportService: SportService) { }

  getSports(): void {
    this.sportService.getSports().then(sports => this.sports = sports);
  }

  ngOnInit(): void {
    this.getSports();
  }

  onSelect(sport: Sport): void {
    this.selectedSport = sport;
  }
}