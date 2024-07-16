import { Component,OnInit } from '@angular/core';
import { tap, map,take,mergeMap,delay,concatMap,} from 'rxjs/operators';
import { interval, Observable,of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // mySnap! : FaceSnap; 
  // myOtherSnap! : FaceSnap;
//  faceSnaps!: FaceSnap[];
     interval$! :Observable<string>;
     logger(text:string) : void {
       console.log(`Log: ${text}`);
       
     }
     redTrainCalled = 0;
     yellowTrainCalled = 0;

  ngOnInit() {
  //  this.interval$ = interval(1000).pipe(
  //    filter(value => value % 3 !==0),
  //    map(value => value % 2 ===0 ? `je suis ${value} et je suis pair`:`je suis ${value} et je suis impair`
  //     ),
  //     tap(text => this.logger(text))
  //  );
  //  interval$.subscribe(value => console.log(value));
   
  //  setTimeout(() => {
  //    interval$.subscribe(value => console.log(value));

  //  },3000)

  /*-----brancher le tuyau
          // const modifiedObservable$ = originalObservable$.pipe(
          //             firstOperator(),
          //             secondOperator(arguments),
          //             thirdOperator
          // ); */
    /*---mergeMap 
       lightObservable$.pip(
         mergeMap(color => getTrainObservable$(color))
       ).subscribe();
    */      
        interval(5000).pipe(
          take(10),
          map(value => value % 2 === 0? 'rouge':'jaune'),
          tap(color => console.log(`La lumière s'allume en %c${color}`,
                              `color: ${this.translateColor(color)}`)),
          mergeMap(color => this.getTrainObservable$(color)),
          tap(train => console.log(`Train %c${train.color} ${train.trainIndex}
           arrivé !`,`font-weight: bold; color:${this.translateColor(train.color)}`))            
                
          
            
        ).subscribe();
   }
   getTrainObservable$(color: 'rouge' | 'jaune') {
     const isRedTrain = color === 'rouge';
     isRedTrain ? this.redTrainCalled++ : this.yellowTrainCalled++;
     const trainIndex = isRedTrain? this.redTrainCalled : this.yellowTrainCalled;
     console.log(`Train %c${color} ${trainIndex} appelé !`,`text-decoration:underline; color: ${this.translateColor(color)}`);
      return of ({color, trainIndex}).pipe(
        delay(isRedTrain? 5000 : 6000)
      );
     
   }
   translateColor(color: 'rouge' | 'jaune') {
            return color === 'rouge'? 'red' : 'yellow';
   }
}
