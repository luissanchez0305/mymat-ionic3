import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Data } from '../../services/offline_data';
import { RoutinesProvider } from '../../providers/routines/routines';
import { Constants } from '../../services/constants';

/**
 * Generated class for the ProgramsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-programs',
  templateUrl: 'programs.html',
})
export class ProgramsPage {
  public predefinedPrograms : any;
  public programs : any;
  public program : number;
  public programName1 : string;
  public programName2 : string;
  public programName3 : string;
  public programName4 : string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public routines: RoutinesProvider, 
    public events: Events) {
      this.getPrograms('basic');
      this.programs = Data.Programs;
      this.program = navParams.get('bubble');
    
      this.routines.getKey(Constants.storageKeyBubble1).then(val => {
        if(this.program != 1 && val.length > 0){
          this.programName1 = val.split('|')[1];
        }
        else{
          this.programName1 = '';
        }
      });
      this.routines.getKey(Constants.storageKeyBubble2).then(val => {
        if(this.program != 2 && val.length > 0){
          this.programName2 = val.split('|')[1];
        }
        else{
          this.programName2 = '';
        }
      });
      this.routines.getKey(Constants.storageKeyBubble3).then(val => {
        if(this.program != 3 && val.length > 0){
          this.programName3 = val.split('|')[1];
        }
        else{
          this.programName3 = '';
        }
      });
      this.routines.getKey(Constants.storageKeyBubble4).then(val => {
        if(this.program != 4 && val.length > 0){
          this.programName4 = val.split('|')[1];
        }
        else{
          this.programName4 = '';
        }
      });
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad ProgramsPage');
  }

  selectPreSetProgram(category){
      this.getPrograms(category);
  }
  
  private getProgram(name){
      for(var i = 0;  i < Data.Programs.length; i++){
        var program = Data.Programs[i];
        if(program.apiName == name)
          return program;
      }
  }
  
  getPrograms(category){
    var groups = [];
    var groupIndex = 0;
    for(var i = 0; i < Data.Groups.length; i++){
      var group = Data.Groups[i];
      if(group.category == category){
        groups[groupIndex] = group;
        for(var j = 0; j < group.programs.length; j++){
          var program = group.programs[j];
          group.programs[j] = this.getProgram(program.apiName);
        }
        groupIndex++;
      }
    }
    this.predefinedPrograms = groups;
  }
  
  addPrograms(routineName, program1, program2, program3, program4){
    var objProgram1 = this.getProgram(program1);
    var objProgram2 = this.getProgram(program2);
    var objProgram3 = this.getProgram(program3);
    var objProgram4 = this.getProgram(program4);
    this.routines.insertPreSetProgram(routineName, objProgram1, objProgram2, objProgram3, objProgram4);
    this.navCtrl.pop();
    var bubbleNames = [objProgram1.name, objProgram2.name, objProgram3.name, objProgram4.name];
    
    this.routines.setPrograms(objProgram1.name, objProgram2.name, objProgram3.name, objProgram4.name);
    this.events.publish("sharesBubbles", bubbleNames);
  }
  
  add1Program(programName, programRunningTime, programApiName){
    this.routines.addProgramToRoutine(this.program, '', programName, programRunningTime, programApiName);
    
    this.programName1 = this.program == 1 ? programName : (this.programName1.length > 0 ? this.programName1 : '');
    this.programName2 = this.program == 2 ? programName : (this.programName2.length > 0 ? this.programName2 : '');
    this.programName3 = this.program == 3 ? programName : (this.programName3.length > 0 ? this.programName3 : '');
    this.programName4 = this.program == 4 ? programName : (this.programName4.length > 0 ? this.programName4 : '');
    
    this.routines.setPrograms(this.programName1, this.programName2, this.programName3, this.programName4);
    
    var bubbleNames = [ 
      this.programName1,
      this.programName2,
      this.programName3,
      this.programName4
    ];
    this.events.publish("sharesBubbles", bubbleNames);
    this.navCtrl.pop();
  }
}
