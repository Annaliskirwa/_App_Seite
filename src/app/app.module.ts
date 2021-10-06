import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailComponent
  ],
  imports: [
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    FormsModule, 
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}