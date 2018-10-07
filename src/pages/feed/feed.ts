import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnimalPage } from '../animal/animal'
import { FavoritosPage } from '../favoritos/favoritos'
import { LoginPage } from '../login/login'
import { LoginEmailPage } from '../login-email/login-email'
import { CadastroAnimalPage } from '../cadastro-animal/cadastro-animal'
import { HistoricoPage } from '../historico/historico'

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  posts: any;

  carregaAnimal(){
    this.navCtrl.push(AnimalPage)
  }

  carregaFavoritos(){
    this.navCtrl.push(FavoritosPage)
  }

  carregaLogin(){
    this.navCtrl.push(LoginPage)
  }

  carregaLoginEmail(){
    this.navCtrl.push(LoginEmailPage)
  }

  carregaCadastroAnimal(){
    this.navCtrl.push(CadastroAnimalPage)
  }

  carregaHistorico(){
    this.navCtrl.push(HistoricoPage)
  }
}
