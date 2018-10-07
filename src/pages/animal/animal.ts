import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedPage } from '../feed/feed'
import { FavoritosPage } from '../favoritos/favoritos'
import { MensagensPage } from '../mensagens/mensagens'

/**
 * Generated class for the AnimalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-animal',
  templateUrl: 'animal.html',
})
export class AnimalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  carregaFavoritos(){
    this.navCtrl.push(FavoritosPage)
  }

  carregaFeed(){
    this.navCtrl.push(FeedPage)
  }

  carregaMensagens(){
    this.navCtrl.push(MensagensPage)
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimalPage');
  }

}
