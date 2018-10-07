import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginEmailPage } from '../login-email/login-email';
import { CadastroUserPage } from './../cadastro-user/cadastro-user';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  carregaLoginEmail(){
    this.navCtrl.push(LoginEmailPage)
  }

  carregaCadastroUser(){
    this.navCtrl.push(CadastroUserPage)
  }

}
