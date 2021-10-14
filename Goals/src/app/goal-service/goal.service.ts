import { Injectable } from '@angular/core';
import { Goal } from '../goal';
import { Goals } from '../goalList';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  getGoals(){
    return Goal
  }

  getGoal(id:any){
    for (let goal of Goals){
      if (goal.id == id){
        return goal;
      }
    }
  }

  constructor() { }
}

