import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdButtonToggleModule } from '@angular/material';
import { routing, appRoutingProviders } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WidgetTwoComponent } from './widgets/widget-two.component';
import { WidgetOneComponent } from './widgets/widget-one.component';
import SoundModule from './sound/sound.module';

@NgModule({
  declarations: [
    AppComponent, WidgetOneComponent, WidgetTwoComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    HttpModule,
    MdButtonModule,
    // Button toggle and checkbox can't work due to https://github.com/angular/angular/issues/17050
    // MdButtonToggleModule,
    SoundModule
  ],
  exports: [
    MdButtonModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
