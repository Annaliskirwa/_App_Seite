import { Injectable } from '@angular/core';
import { Goals } from '../goalList';
//Registering a service in the metadata of the service
@Injectable({
  providedIn: 'root'
})
export class GoalService {

  getGoals(){
    return Goals
  }

  constructor() { }
}