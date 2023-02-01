import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations' 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { AttributeDirective } from './attribute.directive';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AttributeDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent,ProductComponent]
})
export class AppModule { }
