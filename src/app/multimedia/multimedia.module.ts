import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultimediaListComponent } from './multimedia-list/multimedia-list.component';
import { MultimediaDetailComponent } from './multimedia-detail/multimedia-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [MultimediaListComponent],
  declarations: [MultimediaListComponent, MultimediaDetailComponent]
})
export class MultimediaModule { }
