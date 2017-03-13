/**
 * Created by Garret on 22-Feb-17.
 */
import { Component } from '@angular/core';
import {WorkoutService} from "../../app/service/workout-service";
import { NavController, NavParams } from 'ionic-angular';
import {WorkoutsPage} from '../workouts/workouts';


@Component({
    selector: 'workout-details',
    templateUrl: 'workout-details.html'
})
export class WorkoutDetailsPage {
    public workout: any;
    public result: any;

    constructor(public navCtrl: NavController, public params: NavParams, private workoutService: WorkoutService) {
        this.workout = params.get('workout');
        
    }

    deleteWorkout(workoutId){
        this.workoutService.deleteWorkout(workoutId).subscribe(data => {
            this.result = data;
        });

        this.navCtrl.push(WorkoutsPage);
    }
    
}
