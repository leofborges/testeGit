import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { HttpClientModule }    from '@angular/common/http';

import { MyApp } from './app.component';
import { AnimalPage } from '../pages/animal/animal';  
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { FeedPage } from '../pages/feed/feed';
import { LoginPage } from '../pages/login/login';
import { LoginEmailPage } from '../pages/login-email/login-email';
import { RedefSenhaPage } from '../pages/redef-senha/redef-senha';
import { CadastroUserPage } from '../pages/cadastro-user/cadastro-user';
import { CadastroAnimalPage } from '../pages/cadastro-animal/cadastro-animal';
import { HistoricoPage } from '../pages/historico/historico';
import { MensagensPage } from '../pages/mensagens/mensagens';
import { MensagemPage } from '../pages/mensagem/mensagem';


@NgModule({
  declarations: [
    MyApp,
    AnimalPage,
    FavoritosPage,
    FeedPage,
    LoginPage,
    LoginEmailPage,
    RedefSenhaPage,
    CadastroUserPage,
    CadastroAnimalPage,
    HistoricoPage,
    MensagensPage,
    MensagemPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AnimalPage,
    FavoritosPage,
    FeedPage,
    LoginPage,
    LoginEmailPage,
    RedefSenhaPage,
    CadastroUserPage,
    CadastroAnimalPage,
    HistoricoPage,
    MensagensPage,
    MensagemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
