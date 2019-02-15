import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Events, Content } from 'ionic-angular';
import { Data } from '../../services/offline_data';
import { RoutinesProvider } from '../../providers/routines/routines';
import { Constants } from '../../services/constants';
import { ProgramPage } from '../program/program';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ProgramsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-programs',
  templateUrl: 'programs.html',
})
export class ProgramsPage {
  @ViewChild(Content) content: Content;
  public predefinedPrograms : any;
  public programs : any;
  public program : number;
  public programName1 : string;
  public programName2 : string;
  public programName3 : string;
  public programName4 : string;
  public basicButton : boolean;
  public businessTravelButton : boolean;
  public familiyButton : boolean;
  public athleteButton : boolean;
  public spaButton : boolean;
  public stressButton : boolean;
  public seniorButton : boolean;
  public chakraButton : boolean;
  public elementsButton : boolean;
  public petssButton : boolean;
  public petsxButton : boolean;

  constructor(public navCtrl: NavController, private storage: Storage, public navParams: NavParams, public routines: RoutinesProvider,
    public events: Events) {
      this.program = navParams.get('bubble');

      this.events.subscribe('add1ProgramEvent', (programNumber, programName, programRunningTime, programApiName) => {
        this.program = programNumber;
        this.add1Program(programName, programRunningTime, programApiName);
        this.navCtrl.pop();
      });
  }
  ionViewDidLeave(){
    this.storage.set(Constants.storageKeyScrollTop, this.content.getContentDimensions().scrollTop);
  }

  ionViewDidLoad(){
      this.storage.get(Constants.storageKeyCurrentProgram).then((program)=>{
        this.getPrograms(program != null ? program : 'basic');
      })
      this.programs = Data.Programs;

      this.routines.getKey(Constants.storageKeyBubble1).then(val => {
        if(this.program != 1 && val != null && val.length > 0){
          this.programName1 = val.split('|')[1];
        }
        else{
          this.programName1 = '';
        }
      });
      this.routines.getKey(Constants.storageKeyBubble2).then(val => {
        if(this.program != 2 && val != null && val.length > 0){
          this.programName2 = val.split('|')[1];
        }
        else{
          this.programName2 = '';
        }
      });
      this.routines.getKey(Constants.storageKeyBubble3).then(val => {
        if(this.program != 3 && val != null && val.length > 0){
          this.programName3 = val.split('|')[1];
        }
        else{
          this.programName3 = '';
        }
      });
      this.routines.getKey(Constants.storageKeyBubble4).then(val => {
        if(this.program != 4 && val != null && val.length > 0){
          this.programName4 = val.split('|')[1];
        }
        else{
          this.programName4 = '';
        }
      });
      setTimeout(() => {
        this.storage.get(Constants.storageKeyScrollTop).then((scroll)=>{
          this.content.scrollTo(0, scroll, 100);
        });
      }, 500);
  }

  selectPreSetProgram(category){
      this.getPrograms(category);
  }

  getPrograms(category){
    this.storage.set(Constants.storageKeyCurrentProgram, category);
    this.basicButton = false;
    this.businessTravelButton = false;
    this.familiyButton = false;
    this.athleteButton = false;
    this.spaButton = false;
    this.stressButton = false;
    this.seniorButton = false;
    this.chakraButton = false;
    this.elementsButton = false;
    this.petssButton = false;
    this.petsxButton = false;
    switch(category){
      case 'basic':
        this.basicButton = true;
        break;
      case 'business and travel':
        this.businessTravelButton = true;
        break;
      case 'family':
        this.familiyButton = true;
        break;
      case 'athlete':
        this.athleteButton = true;
        break;
      case 'spa':
        this.spaButton = true;
        break;
      case 'stress relief':
        this.stressButton = true;
        break;
      case 'senior':
        this.seniorButton = true;
        break;
      case 'chakra balancing':
        this.chakraButton = true;
        break;
      case 'elements':
        this.elementsButton = true;
        break;
      case 'petss':
        this.petssButton = true;
        break;
      case 'petsx':
        this.petsxButton = true;
        break;
    }
    var groups = [];
    var groupIndex = 0;
    for(var i = 0; i < Data.Groups.length; i++){
      var group = Data.Groups[i];
      if(group.category == category){
        groups[groupIndex] = group;
        for(var j = 0; j < group.programs.length; j++){
          var program = group.programs[j];
          group.programs[j] = this.routines.getProgram(program.apiName);
        }
        groupIndex++;
      }
    }
    this.predefinedPrograms = groups;
  }

  addPrograms(routineName, program1, program2, program3, program4){
    this.navCtrl.pop();
    var bubbleNames = this.routines.addPrograms(routineName, program1, program2, program3, program4);
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

  moreProgramInfo(name, runTime, description, apiName){
    this.navCtrl.push(ProgramPage, { programNumber: this.program, name: name, runTime: runTime, description: description, apiName: apiName });
  }
}
