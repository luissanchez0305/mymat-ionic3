import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ProgramsPage } from '../programs/programs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public bubblesNames1 : any;
  public bubblesNames2 : any;
  public bubblesNames3 : any;
  public bubblesNames4 : any;
  constructor(public navCtrl: NavController, private storage: Storage) {
    this.bubblesNames1 = '';
    this.bubblesNames2 = '';
    this.bubblesNames3 = '';
    this.bubblesNames4 = '';
    
    storage.get('bubblesNames1').then((val)=>{
      console.log(val);
    });
    
    storage.get('bubblesNames2').then((val)=>{
      console.log(val);
    });
    
    storage.get('bubblesNames3').then((val)=>{
      console.log(val);
    });
    
    storage.get('bubblesNames4').then((val)=>{
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
