import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../services/offline_data';
import { RoutinesProvider } from '../../providers/routines/routines';

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
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public routines: RoutinesProvider) {
      this.getPrograms('basic');
      this.programs = Data.Programs;
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
    this.routines.insertPreSetProgram(routineName, this.getProgram(program1), this.getProgram(program2), this.getProgram(program3), this.getProgram(program4));
    this.navCtrl.pop();
  }
}
