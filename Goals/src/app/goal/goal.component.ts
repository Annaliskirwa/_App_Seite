import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals:Goal[] = [
    {id:1, name: "Watch finding Nemo", description: "It should be a good movie"},
    {id:2, name: "I should buy cookies", description: "AAh nice"},
    {id:3, name: "Finish QA", description: "Because someone is going to be om my neck"},
    {id:4, name: "Do UX deisgn chanbges", description: "Just upskill"},
    {id:5, name: "Call someone", description: "Prolly mum"},
    {id:6, name: "Scream at midnught", description: "I am tired"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
