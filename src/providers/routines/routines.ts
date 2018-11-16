import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the RoutinesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RoutinesProvider {
  public program1 : string;
  public program2 : string;
  public program3 : string;
  public program4 : string;
  
  constructor(public storage: Storage) {
    console.log('Hello RoutinesProvider Provider');
  }
  
  public setProgram(index,prog){
    switch (index){
      case 1:
        this.program1 = prog;
        break;
      case 2:
        this.program2 = prog;
        break;
      case 3:
        this.program3 = prog;
        break;
      case 4:
        this.program4 = prog;
        break;
    }
  }
  
  public cleanPrograms(){
    this.program1 = null;
    this.program2 = null;
    this.program3 = null;
    this.program4 = null;
  }
  
  public setPrograms(prog1, prog2, prog3, prog4){
    this.program1 = prog1;
    this.program2 = prog2;
    this.program3 = prog3;
    this.program4 = prog4;
  }
  
  public getPrograms(){
    return [ this.program1, this.program2, this.program3, this.program4 ];
  }
  public async getKey(key:string){
    return await this.storage.get(key);
  }

  public insertPreSetProgram (routineName, program1, program2, program3, program4) {

        this.storage.set('MyMat_routineName', routineName);
        this.addProgramToRoutine(1, "", program1.name, program1.runningtime, program1.apiName);

        this.addProgramToRoutine(2, "", program2.name, program2.runningtime, program2.apiName);

        this.addProgramToRoutine(3, "", program3.name, program3.runningtime, program3.apiName);

        this.addProgramToRoutine(4, "", program4.name, program4.runningtime, program4.apiName);
  }
  
  public addProgramToRoutine (currentBubbleSlot, idProgram, programName, programRunningTime, apiName) {
        if (currentBubbleSlot == 1) {
            this.storage.set('MyMat_bubbleRoutineProgram1', idProgram + "|" + programName + "|" + programRunningTime + "|" + apiName);
        } else if (currentBubbleSlot == 2) {
            this.storage.set('MyMat_bubbleRoutineProgram2', idProgram + "|" + programName + "|" + programRunningTime + "|" + apiName);
        } else if (currentBubbleSlot == 3) {
            this.storage.set('MyMat_bubbleRoutineProgram3', idProgram + "|" + programName + "|" + programRunningTime + "|" + apiName);
        } else if (currentBubbleSlot == 4) {
            this.storage.set('MyMat_bubbleRoutineProgram4', idProgram + "|" + programName + "|" + programRunningTime + "|" + apiName);
        }
    }
}
