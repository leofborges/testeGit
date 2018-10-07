import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnimalPage } from '../animal/animal';
import { FeedPage } from '../feed/feed';

/**
 * Generated class for the FavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  carregaAnimal(){
    this.navCtrl.push(AnimalPage)
  }

  carregaFeed(){
    this.navCtrl.push(FeedPage)
  }

}
