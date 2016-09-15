import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {SoundComponent} from "./sound/sound.component";
import {NoteService} from "./sound/services/note.service";

const homeRoutes: Routes =[
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  }
];
const soundRoutes: Routes = [
  {
    path: 'sound',
    component: SoundComponent
  },
  {
    path: 'sound/note/notes.json',
    component: NoteService,
    pathMatch: 'full'
  }
];
const appRoutes: Routes = [
  ...homeRoutes,
  ...soundRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);