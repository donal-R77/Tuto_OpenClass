import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root' 
})
export class FaceSnapsService {
    faceSnaps:FaceSnap[] = [
        {
            id:1,
            title:'Achibald',
        description:'Mon petit chat',
        imageUrl:'https://img-19.ccm2.net/12oH1bm3jX_fenYWBUKr8niRg-s=/1000x562/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg',
        createdDate: new Date(),
        snaps: 140,
       location:'Madagascar'
        },
        {
        id:2,
        title:'Archibald afa',
        description:'Ts ino ab ito',
        imageUrl:'https://img-19.ccm2.net/iBYO1DOif2mcoMT7crnZ0Yy3XaU=/480x270/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg',
        createdDate: new Date(),
        snaps: 0,
       location: 'Fianarantsoa'}
    ];
    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }
    snapFaceSnapById(faceSnapId: number, snapType:'snap' | 'unsnap'): void { //literal type 'snap' | 'unsnap
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }

    }
}