import { Injectable } from '@angular/core';
import { identity } from 'rxjs';
import { Goal } from '../goal';
import { Goals } from '../goalList';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  getGoals(){
    return Goals
  }

  getGoal(id:any){
    for (let goal of Goals){
      if (goal.id == goal.id){
        return goal.id
      }
    }
    return Goals
  }


  constructor() { }
}

