import { Component, OnInit } from '@angular/core';
import { MissionScheduler } from '../mission.scheduler';

@Component({
  selector: 'app-mission-control',
  templateUrl: './mission-control.component.html',
  styleUrls: ['./mission-control.component.css'],
  providers: [MissionScheduler]
})
export class MissionControlComponent implements OnInit {
  astronauts = ['Lovell', 'Swigert', 'Haise'];

  missions = [
    'Fly to the moon!',
    'Fly to mars!',
    'Fly to Vegas!'
  ];

  nextMission = 0;

  history: string[] = [];
  
  constructor(private scheduler: MissionScheduler) {
    this.scheduler.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${ astronaut } confirmed the mission.`);
      });

    this.scheduler.missionAnnounced$.subscribe(
      mission => {
        this.history.push(`Mission: ${ mission } announced.`);

        if(this.nextMission >= this.missions.length){ this.nextMission = 0; }
      }
    )
  }

  announce() {
    let mission = this.missions[this.nextMission++];

    this.scheduler.announceMission(mission);
  }

  ngOnInit() {
  }


} 
