import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SelectorComponent } from './components/selector/selector.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { GameComponent } from './components/game/game.component';
import { GameProgressComponent } from './components/game-progress/game-progress.component';
import { RulesComponent } from './components/rules/rules.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SelectorComponent,
    IconButtonComponent,
    FooterComponent,
    GameComponent,
    GameProgressComponent,
    RulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
