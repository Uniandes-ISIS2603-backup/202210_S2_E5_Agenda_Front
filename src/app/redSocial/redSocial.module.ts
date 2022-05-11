import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedSocialListComponent } from './redSocial-list/redSocial-list.component';
import { RedSocialDetailComponent } from './redSocial-detail/redSocial-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [RedSocialListComponent, RedSocialDetailComponent],
  declarations: [RedSocialListComponent, RedSocialDetailComponent]
})
export class redSocialModule { }
