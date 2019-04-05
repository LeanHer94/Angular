import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MissionScheduler } from '../mission.scheduler';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-astronaut',
  templateUrl: './astronaut.component.html',
  styleUrls: ['./astronaut.component.css']
})
export class AstronautComponent implements OnDestroy {
  @Input() astronaut: string;

  mission = '<no mission announced>';
  confirmed = false;
  announced = false;

  subscription: Subscription

  constructor(private scheduler: MissionScheduler) { 
    this.subscription = this.scheduler.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
      });
  }

  confirm(){
    this.confirmed = true;
    this.scheduler.confirmMission(this.astronaut);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
