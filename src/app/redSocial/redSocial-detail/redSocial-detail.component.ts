import { Component, Input, OnInit } from '@angular/core';
import { redSocial } from '../redSocial';

@Component({
  selector: 'app-redSocial-detail',
  templateUrl: './redSocial-detail.component.html',
  styleUrls: ['./redSocial-detail.component.css']
})
export class RedSocialDetailComponent implements OnInit {

  @Input() redSocialDetail!: redSocial;
  selectedRedSocial!: redSocial;
  selected = false;

  constructor() { }

  ngOnInit() {
  }
  onSelected(redSocial: redSocial) {
    this.selected = true;
    this.selectedRedSocial = redSocial;
  }
}
