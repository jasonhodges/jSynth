import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoundComponent } from './sound.component';
import soundRoutes from './sound.routes';
import { BoardComponent } from './board/board.component';
import { NoteComponent } from './note/note.component';


@NgModule({
  declarations: [SoundComponent, BoardComponent, NoteComponent],
  exports: [SoundComponent, BoardComponent, NoteComponent],
  imports: [CommonModule, soundRoutes],
})

export default class SoundModule {}
