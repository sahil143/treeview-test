import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TreeModule } from 'angular-tree-component';

import { ActionModule } from 'patternfly-ng';

import { AppComponent } from './app.component';
import { TreeListBasicExampleComponent } from './tree-list-basic-example/tree-list-basic-example.component';
import { ListModule } from 'patternfly-ng';

@NgModule({
  declarations: [
    AppComponent,
    TreeListBasicExampleComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    TreeModule,
    ActionModule,
    ListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
