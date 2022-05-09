import { Component, OnInit } from '@angular/core';
import { Multimedia } from '../multimedia';
import { MultimediaService } from '../multimedia.service';

@Component({
  selector: 'app-multimedia-list',
  templateUrl: './multimedia-list.component.html',
  styleUrls: ['./multimedia-list.component.css']
})
export class MultimediaListComponent implements OnInit {

  multimedias: Array<Multimedia> = [];


  constructor(private multimediaService: MultimediaService) { }

  getMultimedias(): void {
    this.multimediaService.getMultimedias().subscribe(multimedias => {  this.multimedias = multimedias; });
  }
  ngOnInit() {

    this.getMultimedias();

  }

}