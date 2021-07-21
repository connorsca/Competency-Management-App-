import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-qual-info',
  templateUrl: './qual-info.component.html',
  styleUrls: ['./qual-info.component.css'],
})
export class QualInfoComponent implements OnInit {
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getSelectedTeamInfo();
  }

  selectedTeamMem: any;
  name = ""


  getSelectedTeamInfo() {
    this.selectedTeamMem = this.data.getSelectedQualInfo();
    this.name = this.selectedTeamMem[0];
  }

  removeItem(i: any) {
    this.data.removeTeamMemQual(i+2)
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
        )
        this.data.addTeamMemQual(inputQual, inputExp);
      }
    }
  }
}
