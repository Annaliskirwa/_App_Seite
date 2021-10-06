import { Component, Input, OnInit } from '@angular/core';
import { Goals } from '../goals';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
})
export class GoalDetailComponent implements OnInit {

  @Input() goalDescription!: Goals;
  constructor() { }

  ngOnInit() {
  }

}