import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {SoundComponent} from "./sound/sound.component";

const soundRoutes: Routes = [
  {
    path: 'sound',
    component: SoundComponent,
    pathMatch: 'full'
  }
];
const appRoutes: Routes = [
  ...soundRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);