import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals:Goal[] = [
    new Goal(1,  "Watch finding Nemo",  "It should be a good movie"),
    new Goal(2,  "I should buy cookies",  "AAh nice"),
    new Goal(3,  "Finish QA", "Because someone is going to be om my neck"),
    new Goal(4,  "Do UX deisgn chanbges",  "Just upskill"),
    new Goal(5, "Call someone", "Prolly mum"),
    new Goal(6,  "Scream at midnught",  "I am tired")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
