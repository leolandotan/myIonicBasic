import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../../pages/detail-page/detail-page';

import { ApiProvider } from '../../providers/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any;

  constructor(
    public navCtrl: NavController,
    private apiProvider: ApiProvider) {

    apiProvider.getArticles().subscribe(
      data => {
        this.items = data;
      }
    );
  }

  goToDetailPage(item) {
    this.navCtrl.push(DetailPage, {
      item: item
    });
  }

}
