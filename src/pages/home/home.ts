import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ProgramsPage } from '../programs/programs';
import { WifiPage } from '../wifi/wifi';
import { RoutinesProvider } from '../../providers/routines/routines';
import { Constants } from '../../services/constants';

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
  
  constructor(public navCtrl: NavController, private storage: Storage, public routines: RoutinesProvider, 
    public events: Events) {
    this.checkAllBubbles();
    this.events.subscribe('sharesBubbles', (bubbles) => {
      for(var i = 1; i <= bubbles.length; i++){
        this.updateBubbles(i, bubbles[i - 1]);
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
    var programs = this.routines.getPrograms();
    if(typeof programs[0] !== 'undefined' &&
    typeof programs[1] !== 'undefined' &&
    typeof programs[2] !== 'undefined' &&
    typeof programs[3] !== 'undefined'){
      this.navCtrl.push(WifiPage);
    }
  }
  
  cleanRoutine(){
    this.storage.set(Constants.storageKeyBubble1,'');
    this.storage.set(Constants.storageKeyBubble2,'');
    this.storage.set(Constants.storageKeyBubble3,'');
    this.storage.set(Constants.storageKeyBubble4,'');
    this.updateBubbles(1,'');
    this.updateBubbles(2,'');
    this.updateBubbles(3,'');
    this.updateBubbles(4,'');
  }
  
  private updateBubbles(bubble,name){
    switch(bubble){
      case 1:
        if(typeof name !== 'undefined' && name.length > 0){
          this.bubblesCurrentState1 = true;
          this.bubblesNames1 = name;
        }
        else{
          this.bubblesCurrentState1 = false;
          this.bubblesNames1 = '';
        }
        break;
      case 2:
        if(typeof name !== 'undefined' && name.length > 0){
          this.bubblesCurrentState2 = true;
          this.bubblesNames2 = name;
        }
        else{
          this.bubblesCurrentState2 = false;
          this.bubblesNames2 = '';
        }
        break;
      case 3:
        if(typeof name !== 'undefined' && name.length > 0){
          this.bubblesCurrentState3 = true;
          this.bubblesNames3 = name;
        }
        else{
          this.bubblesCurrentState3 = false;
          this.bubblesNames3 = '';
        }
        break;
      case 4:
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
    this.storage.get(Constants.storageKeyBubble1).then((val)=>{
      if(val !== null){
        var name = val.split('|')[1];
        this.updateBubbles(1,name);
        this.routines.setProgram(1,name)
      }
    });
    
    this.storage.get(Constants.storageKeyBubble2).then((val)=>{
      if(val !== null){
        var name = val.split('|')[1];
        this.updateBubbles(2,name);
        this.routines.setProgram(2,name)
      }
    });
    
    this.storage.get(Constants.storageKeyBubble3).then((val)=>{
      if(val !== null){
        var name = val.split('|')[1];
        this.updateBubbles(3,name);
        this.routines.setProgram(3,name)
      }
    });
    
    this.storage.get(Constants.storageKeyBubble4).then((val)=>{
      if(val !== null){
        var name = val.split('|')[1];
        this.updateBubbles(4,name);
        this.routines.setProgram(4,name)
      }
    });
  }
}
