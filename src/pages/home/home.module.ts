// Comment/Uncomment all page to switch from live reload/no live reload

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage)
  ]
})
export class HomePageModule { }
