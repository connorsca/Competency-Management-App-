import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private data: DataService) {}

  ngOnInit(): void {}

  addNewTeamMem() {
    this.data.addNewTeamMem();
    this.data.setupNewTeamMem();
  }
}
