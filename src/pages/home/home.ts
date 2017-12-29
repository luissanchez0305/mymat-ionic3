import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ProgramsPage } from '../programs/programs';
import { RoutinesProvider } from '../../providers/routines/routines';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public bubblesNames1 : string;
  public bubblesNames2 : string;
  public bubblesNames3 : string;
  public bubblesNames4 : string;
  public bubblesCurrentState1 : boolean;
  public bubblesCurrentState2 : boolean;
  public bubblesCurrentState3 : boolean;
  public bubblesCurrentState4 : boolean;
  
  constructor(public navCtrl: NavController, private storage: Storage, public routines: RoutinesProvider, public events: Events) {
    this.checkAllBubbles();
    this.events.subscribe('sharesBubbles', (bubbles) => {
      for(var i = 0; i < bubbles.length; i++){
        this.updateBubbles(i, bubbles[i]);
      }
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
    this.storage.set('MyMat_bubbleRoutineProgram1','');
    this.storage.set('MyMat_bubbleRoutineProgram2','');
    this.storage.set('MyMat_bubbleRoutineProgram3','');
    this.storage.set('MyMat_bubbleRoutineProgram4','');
    this.updateBubbles(0,'');
    this.updateBubbles(1,'');
    this.updateBubbles(2,'');
    this.updateBubbles(3,'');
  }
  
  private updateBubbles(bubble,name){
    switch(bubble){
      case 0:
        if(typeof name !== 'undefined' && name.length > 0){
          this.bubblesCurrentState1 = true;
          this.bubblesNames1 = name;
        }
        else{
          this.bubblesCurrentState1 = false;
          this.bubblesNames1 = '';
        }
        break;
      case 1:
        if(typeof name !== 'undefined' && name.length > 0){
          this.bubblesCurrentState2 = true;
          this.bubblesNames2 = name;
        }
        else{
          this.bubblesCurrentState2 = false;
          this.bubblesNames2 = '';
        }
        break;
      case 2:
        if(typeof name !== 'undefined' && name.length > 0){
          this.bubblesCurrentState3 = true;
          this.bubblesNames3 = name;
        }
        else{
          this.bubblesCurrentState3 = false;
          this.bubblesNames3 = '';
        }
        break;
      case 3:
        if(typeof name !== 'undefined' && name.length > 0){
          this.bubblesCurrentState4 = true;
          this.bubblesNames4 = name;
        }
        else{
          this.bubblesCurrentState4 = false;
          this.bubblesNames4 = '';
        }
        break;
    }
  }
  
  private checkAllBubbles(){
    this.storage.get('MyMat_bubbleRoutineProgram1').then((val)=>{
      this.updateBubbles(0,val.split('|')[1]);
    });
    
    this.storage.get('MyMat_bubbleRoutineProgram2').then((val)=>{
      this.updateBubbles(1,val.split('|')[1]);
    });
    
    this.storage.get('MyMat_bubbleRoutineProgram3').then((val)=>{
      this.updateBubbles(2,val.split('|')[1]);
    });
    
    this.storage.get('MyMat_bubbleRoutineProgram4').then((val)=>{
      this.updateBubbles(3,val.split('|')[1]);
    });
  }
}
