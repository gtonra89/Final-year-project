import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WorkoutService} from "../../app/service/workout-service";
import {WorkoutDetailsPage} from "../workout-details/workout-details";

@Component({
  selector: 'Workouts',
  templateUrl: 'workouts.html'
})
export class WorkoutsPage {
  workouts : any;
 
  constructor(public navCtrl: NavController, private wkoutService: WorkoutService) {

  }
  ngOnInit(){
    
    this.wkoutService.getWorkout().subscribe(workouts => {
      this.workouts = workouts;
    });
  }

  workoutSelected(event, workout){
    this.navCtrl.push(WorkoutDetailsPage, {
      workout: workout
    });

  }
}
