import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit {
  constructor(private data: DataService) {}

  ngOnInit() {
    this.getUserQualInfo();
  }

  userQualInfo: any;
  title = '';

  getUserQualInfo() {
    this.userQualInfo = this.data.getUserQualInfo();
    this.title = this.userQualInfo[0];
  }

  removeItem(i: any) {
    this.userQualInfo = this.data.removeUserQual(i+2);
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
        this.userQualInfo = this.data.addUserQual(inputQual, inputExp);
      }
    }
  }
}
