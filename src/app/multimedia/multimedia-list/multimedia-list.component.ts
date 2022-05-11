import { Component, OnInit } from '@angular/core';
import { Multimedia } from '../multimedia';
import { MultimediaDetail } from '../multimedia-detail';
import { MultimediaService } from '../multimedia.service';

@Component({
  selector: 'app-multimedia-list',
  templateUrl: './multimedia-list.component.html',
  styleUrls: ['./multimedia-list.component.css']
})
export class MultimediaListComponent implements OnInit {

  multimedias: Array<MultimediaDetail> = [];
  selected: Boolean = false;
  selectedMultimedia!: MultimediaDetail;


  constructor(private multimediaService: MultimediaService) { }

  getMultimedias(): void {
    this.multimediaService.getMultimedias().subscribe(multimedias => {  this.multimedias = multimedias; });
  }


  onSelected(multimedia: MultimediaDetail):void{
    this.selected = true;
    this.selectedMultimedia = multimedia;
  }


  ngOnInit() {

    this.getMultimedias();

  }

}
