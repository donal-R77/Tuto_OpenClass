import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap! : FaceSnap;
  button!:string;
  letId = 'id';
constructor(private faceSnapsService: FaceSnapsService ,private route:ActivatedRoute){

}  

ngOnInit() {
    this.button = "Oh snap";
    const snapId = +this.route.snapshot.params[this.letId]; //cast satria dans params tout est string
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
}

onComportementSnap() {
       if (this.button === 'Oh snap') {
        this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'snap');
     this.button = "oops, unsnap";
    } else {
          this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'unsnap');
        this.button = "Oh snap";

}

}

}
