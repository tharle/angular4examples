import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StartComponent } from '../shared/star.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	StartComponent,
  	ConvertToSpacesPipe
  ],
  exports: [
  	CommonModule,
  	FormsModule,
  	StartComponent,
  	ConvertToSpacesPipe
  ]
})
export class SharedModule { }
