import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ProgramsPage } from '../programs/programs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public bubblesNames1 : string;
  public bubblesNames2 : string;
  public bubblesNames3 : string;
  public bubblesNames4 : string;
  
  constructor(public navCtrl: NavController, private storage: Storage) {
    this.bubblesNames1 = '';
    this.bubblesNames2 = '';
    this.bubblesNames3 = '';
    this.bubblesNames4 = '';
    
    this.storage.get('MyMat_bubbleRoutineProgram1').then((val)=>{
      console.log(val);
    });
    
    this.storage.get('MyMat_bubbleRoutineProgram2').then((val)=>{
      console.log(val);
    });
    
    this.storage.get('MyMat_bubbleRoutineProgram3').then((val)=>{
      console.log(val);
    });
    
    this.storage.get('MyMat_bubbleRoutineProgram4').then((val)=>{
      console.log(val);
    });
  }
  
  removeProgramFromRoutine(prg){
    console.log('hold: ' + prg);
  }

  selectBubble(prg, add){
    this.navCtrl.push(ProgramsPage, { bubble: prg });
  }
  
  runRoutine(){
    console.log('run');
  }
  
  cleanRoutine(){
    console.log('clean');
  }
}
