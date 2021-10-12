import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import { AlertService } from '../alert-service/alert.service';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../quote-class/quote';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
})
export class GoalComponent implements OnInit {

  goals:Goal[];
  alertService: AlertService;
  quote: Quote;

  addNewGoal(goal: any){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

   toggleDetails(index: number){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  deleteGoal(isComplete:any, index:number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
        this.alertService.alertMe("The goal has been deleted")
      }
    }
  }
  constructor(goalService:GoalService, alertService:AlertService, private http:HttpClient) { 
    this.goals = goalService.getGoals()
    this.alertService = alertService;
  }

  ngOnInit(): void {
    interface ApiResponse{
      author:string;
      quote:string;
  }

}