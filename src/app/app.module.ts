import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BoardComponent } from './sound/board/board.component';
import { NoteComponent } from './sound/note/note.component';
import {AudioService} from "./sound/services/audio.service";
import {routing, appRoutingProviders} from "./app.routing";
import { SoundComponent } from './sound/sound.component';
import {MdCoreModule} from '@angular2-material/core';
import {MdButtonToggleModule} from '@angular2-material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    NoteComponent,
    SoundComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdCoreModule.forRoot(),
    MdButtonToggleModule.forRoot()
  ],
  providers: [
    appRoutingProviders,
    AudioService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
