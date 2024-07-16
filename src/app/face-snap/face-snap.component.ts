import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap', //le prefixe app- permet d'inserer ce component dans notre application
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
    @Input() faceSnaps! : FaceSnap;
      button!:string;
    constructor(private faceSnapsService: FaceSnapsService,private router:Router) {

    }  

  ngOnInit() {
        this.button = "Oh snap";
  }

  onComportementSnap() {
    if (this.button === 'Oh snap') {
    this.faceSnapsService.snapFaceSnapById(this.faceSnaps.id,'snap');
    this.button = "oops, unsnap";
  } else {
    this.faceSnapsService.snapFaceSnapById(this.faceSnaps.id,'unsnap');
    this.button = "Oh snap";
    
    }
    
  }
  onViewFaceSnap() {
          this.router.navigateByUrl(`facesnaps/${this.faceSnaps.id}`);
  }

}