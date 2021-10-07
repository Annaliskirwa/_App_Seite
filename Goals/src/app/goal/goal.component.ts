import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals:Goal[] = [
    {id:1, name: "Watch finding Nemo"},
    {id:2, name: "I should buy cookies"},
    {id:3, name: "Finish QA"},
    {id:4, name: "Do UX deisgn chanbges"},
    {id:5, name: "Call someone"},
    {id:6, name: "Scream at midnught"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
