import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { MyProvider } from '../../subModulesCommon/commonModule/src';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private myProvider: MyProvider
    ) {

  }

  ngOnInit() {
    this.myProvider.myMethod();
    this.navCtrl.push("MyPage");
  }

}
