import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonalInfoComponent } from './home/personal-info/personal-info.component';
import { TeamInfoComponent } from './home/team-info/team-info.component';
import { StatsComponent } from './home/stats/stats.component';
import { AddComponent } from './home/add/add.component';
import { UploadComponent } from './home/upload/upload.component';
import { DownloadComponent } from './home/download/download.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'personal-info', component: PersonalInfoComponent },
  { path: 'team-memebrs', component: TeamInfoComponent },
  { path: 'team-stats', component: StatsComponent },
  { path: 'add', component: AddComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'download', component: DownloadComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonalInfoComponent,
    TeamInfoComponent,
    StatsComponent,
    AddComponent,
    UploadComponent,
    DownloadComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
