import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css'],
})
export class TeamInfoComponent implements OnInit {
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getTeamQualInfo();
  }

  teamQualInfo: any;

  getTeamQualInfo() {
    this.data.oodTeamQuals();
    this.teamQualInfo = this.data.getTeamQualInfo();
  }

  removeItem(i: any) {
    this.teamQualInfo = this.data.removeTeamMem(i);
  }

  viewInfo(i: any) {
    this.data.setSelectedQualInfo(this.teamQualInfo[i]);
  }

  addItem() {
    var inputName = prompt('Name:');
    if (inputName === '' || inputName === null) {
      return;
    } else {
      var inputQual = prompt('Qualification Title:');
      if (inputQual === '' || inputQual === null) {
        return;
      } else {
        var inputExp = prompt('Qualification Expiary:');
        if (inputExp === '' || inputExp === null) {
          return;
        } else {
          this.teamQualInfo = this.data.addTeamMem(
            inputName,
            inputQual,
            inputExp
          );
          alert('User: ' + inputName + ' added.');
        }
      }
    }
    this.data.oodTeamQuals();
  }
}
