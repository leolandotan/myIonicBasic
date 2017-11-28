import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'detail-page.html'
})
export class DetailPage {
  item: any;

  constructor(
      public navCtrl: NavController,
      private navParams: NavParams) {
    console.log(navParams);
    this.item = navParams.data.item;
  }
}
