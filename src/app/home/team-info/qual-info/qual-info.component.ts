import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qual-info',
  templateUrl: './qual-info.component.html',
  styleUrls: ['./qual-info.component.css'],
})
export class QualInfoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  userQualInfo = [
    { qual: 'Human Factors', exp: '01/02/2021' },
    { qual: 'DIMP', exp: '01/05/2021' },
    { qual: 'Manual Handling', exp: '01/05/2023' },
    { qual: 'Noise Awareness', exp: '01/07/2022' },
    { qual: 'Dangerous Substances', exp: '01/05/2025' },
  ];

  removeItem(i: any) {
    this.userQualInfo.splice(i, 1);
  }

  addItem() {
    var inputQual = prompt('Qualification Title:');
    if (inputQual === '' || inputQual === null) {
      return;
    } else {
      var inputExp = prompt('Qualification Expiary:');
      if (inputExp === '' || inputExp === null) {
        return;
      } else {
        alert(
          'Qualification: ' +
            inputQual +
            '\nwith the Expiary: ' +
            inputExp +
            '\nadded.'
        );
        this.userQualInfo.push({ qual: inputQual, exp: inputExp });
      }
    }
  }
}
