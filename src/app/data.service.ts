import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  // Team info variables
  teamMemInfo: any;

  // Data setter variables
  userQualInfo = [
    'Personal Information',
    0,
    { qual: 'Human Factors', exp: '01/02/2021' },
    { qual: 'DIMP', exp: '01/05/2021' },
    { qual: 'Manual Handling', exp: '01/05/2023' },
    { qual: 'Noise Awareness', exp: '01/07/2022' },
    { qual: 'Dangerous Substances', exp: '01/05/2025' },
  ];

  teamQualInfo = [
    [
      'M. Trafford',
      0,
      { qual: 'Human Factors', exp: '16/07/2021' },
      { qual: 'DIMP', exp: '23/08/2021' },
      { qual: 'Manual Handling', exp: '01/05/2023' },
      { qual: 'Noise Awareness', exp: '01/07/2020' },
      { qual: 'Dangerous Substances', exp: '01/05/2025' },
    ],
    [
      'D. Wilkinson',
      0,
      { qual: 'Human Factors', exp: '29/05/2020' },
      { qual: 'DIMP', exp: '19/05/2021' },
      { qual: 'Manual Handling', exp: '01/05/2023' },
      { qual: 'Noise Awareness', exp: '01/07/2022' },
      { qual: 'Dangerous Substances', exp: '01/05/2025' },
    ],
    [
      'D. Hall',
      0,
      { qual: 'Seat Pins', exp: '29/05/2025' },
      { qual: 'DIMP', exp: '19/05/2021' },
      { qual: 'Manual Handling', exp: '01/05/2023' },
      { qual: 'Noise Awareness', exp: '01/07/2022' },
      { qual: 'Dangerous Substances', exp: '01/05/2025' },
    ],
  ];

  // User page methods
  getUserQualInfo() {
    return this.userQualInfo;
  }

  removeUserQual(i: any) {
    this.userQualInfo.splice(i, 1);
    return this.userQualInfo;
  }

  addUserQual(inputQual: string, inputExp: string) {
    this.userQualInfo.push({ qual: inputQual, exp: inputExp });
    return this.userQualInfo;
  }

  // Team page methods
  getTeamQualInfo() {
    return this.teamQualInfo;
  }

  removeTeamMem(i: any) {
    this.teamQualInfo.splice(i, 1);
    return this.teamQualInfo;
  }

  addTeamMem(inputName: string, inputQual: string, inputExp: string) {
    this.teamQualInfo.push([inputName, { qual: inputQual, exp: inputExp }]);
    return this.teamQualInfo;
  }

  oodTeamQuals() {
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
      teamMember[1] = totalOod.toString();
    });
  }

  setSelectedQualInfo(teamInfo: any) {
    this.teamMemInfo = teamInfo;
  }

  // Team qualification page mwthods
  getSelectedQualInfo() {
    return this.teamMemInfo;
  }

  removeTeamMemQual(i: any) {
    this.teamMemInfo.splice(i, 1);
    return this.teamMemInfo;
  }

  addTeamMemQual(inputQual: string, inputExp: string) {
    this.teamMemInfo.push([{ qual: inputQual, exp: inputExp }]);
    return this.teamMemInfo;
  }
}
