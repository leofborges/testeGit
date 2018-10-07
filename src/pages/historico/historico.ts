import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosPage } from '../favoritos/favoritos';
import { FeedPage } from '../feed/feed';

/**
 * Generated class for the HistoricoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html',
})
export class HistoricoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  carregaFavoritos(){
    this.navCtrl.push(FavoritosPage)
  }

  carregaFeed(){
    this.navCtrl.push(FeedPage)
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoricoPage');
  }

}
