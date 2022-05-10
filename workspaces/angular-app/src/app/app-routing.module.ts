import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SetupComponent } from './components/setup/setup.component';
import { WaitroomComponent } from './components/waitroom/waitroom.component';
import { GameComponent } from './components/game/game.component';


const routes: Routes = [
  {
    path: '', component: SetupComponent
  },
  {
    path: 'wait', component: WaitroomComponent
  },
  {
    path: 'play', component: GameComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
