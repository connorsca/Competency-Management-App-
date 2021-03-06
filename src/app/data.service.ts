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
    { qual: 'Human Factors', exp: '01/08/2021' },
    { qual: 'DIMP', exp: '01/05/2021' },
    { qual: 'Manual Handling', exp: '20/08/2021' },
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
      { qual: 'Manual Handling', exp: '20/08/2021' },
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

  addTeamMem(inputName: string) {
    this.teamQualInfo.push([inputName]);
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

  // Team qualification page methods
  getSelectedQualInfo() {
    return this.teamMemInfo;
  }

  removeTeamMemQual(i: any) {
    this.teamMemInfo.splice(i, 1);
    return this.teamMemInfo;
  }

  addTeamMemQual(inputQual: string, inputExp: string) {
    this.teamMemInfo.push({ qual: inputQual, exp: inputExp });
    return this.teamMemInfo;
  }

  // Add team member function
  addNewTeamMem() {
    var inputName = prompt('Name:');
    if (inputName === '' || inputName === null) {
      return;
    } else {
      this.addTeamMem(inputName);
      alert('User: ' + inputName + ' added.');
    }
  }

  setupNewTeamMem() {
    var i = this.teamQualInfo.length;
    this.setSelectedQualInfo(this.teamQualInfo[i - 1]);
  }

  // Statisitcs functions
  setStats() {
    let totalOod = 0;
    let totalQuals = 0;
    let totalInDate = 0;
    let totalOodThirtyDays = 0;
    this.oodTeamQuals();
    // Amount in team
    var totalTeamMem = this.teamQualInfo.length;

    // OOD
    for (var i = 0; i < this.teamQualInfo.length; i++) {
      var teamMem = this.teamQualInfo[i];
      var teamMemOod = teamMem[1];
      totalOod += Number(teamMemOod);
    }

    // in date
    for (var i = 0; i < this.teamQualInfo.length; i++) {
      var teamMem = this.teamQualInfo[i];
      var totalTeamMemQuals = teamMem.length - 2;
      totalQuals += Number(totalTeamMemQuals);
    }
    totalInDate = totalQuals - totalOod;

    // OOD in 30 days
    this.oodInThirtyDays();
    totalOodThirtyDays = this.oodInThirtyDays();

    return [totalTeamMem, totalOod, totalInDate, totalOodThirtyDays];
  }

  oodInThirtyDays() {
    let today = new Date();
    let oneMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      today.getDate()
    );
    let totalOod = 0;

    this.teamQualInfo.forEach((teamMember) => {
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
            if (
              convertDateString.getTime() >= today.getTime() &&
              convertDateString.getTime() <= oneMonth.getTime()
            ) {
              totalOod++;
            }
          }
        });
      });
    });
    return totalOod;
  }
}
