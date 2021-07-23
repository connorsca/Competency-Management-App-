import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class StatsComponent implements OnInit {
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getStats();
  }

  totalTeamMem = 0
  totalOod = 0
  totalInDate = 0
  totalOodThirtyDays = 0


  getStats() {
    let returnedStats = this.data.setStats();
    this.totalTeamMem = returnedStats[0]
    this.totalOod = returnedStats[1]
    this.totalInDate = returnedStats[2]
    this.totalOodThirtyDays = returnedStats[3]
  }
}
