import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WorkoutService} from "../../app/service/workout-service";

@Component({
  selector: 'Workouts',
  templateUrl: 'workouts.html'
})
export class WorkoutsPage {

  constructor(public navCtrl: NavController, private wkoutService: WorkoutService) {

  }
  ngOnInit(){
    this.wkoutService.getWorkout().subscribe(workouts =>
    {console.log(workouts);
    });
  }
}
