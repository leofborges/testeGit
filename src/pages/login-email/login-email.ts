import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RedefSenhaPage } from '../redef-senha/redef-senha';
import { HttpClient } from '@angular/common/http';
import { FeedPage } from '../feed/feed';
import { UsuarioModel } from './../../modelos/usuario-model';

import { Observable } from 'rxjs';

/**
 * Generated class for the LoginEmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-email',
  templateUrl: 'login-email.html',
})
export class LoginEmailPage {

  usuarios_recebidos: UsuarioModel[];

  usuario_atual: UsuarioModel = new UsuarioModel();

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  carregaRedefSenha() {
    this.navCtrl.push(RedefSenhaPage)
  }

  carregaFeed() {
    this.navCtrl.push(FeedPage)
  }


  fazerLogin() {
    this.getUsers();
    console.log(this.usuarios_recebidos[0]);
    /*this.http.get('https://api.mlab.com/api/1/databases/miaudote/collections/usuario?apiKey=XRSrAQkYZvpYR1cLVVbR5rknsPC0hZff')
    .subscribe(val => this.usuarios_recebidos = val);*/
  }

  getUsuarios(): Observable<UsuarioModel[]> {
    return this.http.get<UsuarioModel[]>('https://api.mlab.com/api/1/databases/miaudote/collections/usuario?apiKey=XRSrAQkYZvpYR1cLVVbR5rknsPC0hZff')
  }

  getUsers(){
    this.getUsuarios()
    .subscribe(
      users => this.usuarios_recebidos = users
    );
  }
} 
