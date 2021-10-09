import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
// import * as fromScoreboard from './reducers/scoreboard.reducer';
// import * as fromProduct from './reducers/product.reducer';
// import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    // StoreModule.forRoot({
    //   game: fromScoreboard.reducer,
    //   product: fromProduct.reducer,
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
