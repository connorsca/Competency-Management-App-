import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css'],
})
export class TeamInfoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.oodQuals();
  }

  teamMemInfo: any;
  teamMemName: any;
  teamQualInfo = [
    [
      'M. Trafford',
      { qual: 'Human Factors', exp: '16/07/2021' },
      { qual: 'DIMP', exp: '23/08/2021' },
      { qual: 'Manual Handling', exp: '01/05/2023' },
      { qual: 'Noise Awareness', exp: '01/07/2020' },
      { qual: 'Dangerous Substances', exp: '01/05/2025' },
    ],
    [
      'D. Wilkinson',
      { qual: 'Human Factors', exp: '29/05/2020' },
      { qual: 'DIMP', exp: '19/05/2021' },
      { qual: 'Manual Handling', exp: '01/05/2023' },
      { qual: 'Noise Awareness', exp: '01/07/2022' },
      { qual: 'Dangerous Substances', exp: '01/05/2025' },
    ],
    [
      'D. Hall',
      { qual: 'Seat Pins', exp: '29/05/2025' },
      { qual: 'DIMP', exp: '19/05/2021' },
      { qual: 'Manual Handling', exp: '01/05/2023' },
      { qual: 'Noise Awareness', exp: '01/07/2022' },
      { qual: 'Dangerous Substances', exp: '01/05/2025' },
    ],
  ];

  oodQuals() {
    let today = new Date();

    this.teamQualInfo.forEach((teamMember) => {
      let totalOod = 0;
      teamMember.slice(1).forEach((teamMemberQual) => {
        Object.keys(teamMemberQual).forEach(function (key, index) {
          if (key === 'exp') {
            let dateString = Object.values(teamMemberQual)[index];
            let formatDateString =
              dateString.substr(6, 4) +
              ', ' +
              dateString.substr(3, 2) +
              ', ' +
              dateString.substr(0, 2);
            let convertDateString = new Date(formatDateString);
            if (convertDateString.getTime() <= today.getTime()) {
              totalOod++;
            }
          }
        });
      });
      teamMember.splice(1, 0, totalOod.toString());
    });
  }

  removeItem(i: any) {
    this.teamQualInfo.splice(i, 1);
  }

  viewInfo(i: any) {
    this.teamMemInfo = this.teamQualInfo[i];
    this.teamMemName = this.teamMemInfo[0];
    this.teamMemInfo.splice(0, 2);
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
          alert('User: ' + inputName + ' added.');
          this.teamQualInfo.push([
            inputName,
            { qual: inputQual, exp: inputExp },
          ]);
        }
      }
    }
    this.oodQuals();
    console.log(this.teamQualInfo);
  }
}
