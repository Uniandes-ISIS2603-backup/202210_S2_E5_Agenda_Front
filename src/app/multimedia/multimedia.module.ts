import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultimediaListComponent } from './multimedia-list/multimedia-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [MultimediaListComponent],
  declarations: [MultimediaListComponent]
})
export class MultimediaModule { }
