import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals:Goal[] = [
    new Goal(1,  "Watch finding Nemo",  "It should be a good movie", new Date(2021,10,08)),
    new Goal(2,  "I should buy cookies",  "AAh nice", new Date(2021,10,08)),
    new Goal(3,  "Finish QA", "Because someone is going to be om my neck", new Date(2021,10,08)),
    new Goal(4,  "Do UX deisgn chanbges",  "Just upskill", new Date(2021,10,08)),
    new Goal(5, "Call someone", "Prolly mum", new Date(2021,10,08)),
    new Goal(6,  "Scream at midnught",  "I am tired", new Date(2021,10,08))
  ];

   toggleDetails(index: number){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  deleteGoal(isComplete:any, index:number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
