import { Component, OnInit } from '@angular/core';

import { LeadershipService } from '../leadership.service';

import { LeaderShip } from '../shared/leadership.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  leadershipInfo: LeaderShip[];

  constructor(private leaderShipService: LeadershipService) { }

  ngOnInit() {
  	this.leadershipInfo = this.leaderShipService.getLeaderShips();
  }

}
