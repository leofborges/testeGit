import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroAnimalPage } from './cadastro-animal';

@NgModule({
  declarations: [
    CadastroAnimalPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroAnimalPage),
  ],
})
export class CadastroAnimalPageModule {}
