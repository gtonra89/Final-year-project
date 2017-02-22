/**
 * Created by Garret on 11-Feb-17.
 */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WorkoutsPage} from '../workouts/workouts';
import {WorkoutService} from "../../app/service/workout-service";

@Component({
    selector: 'add-a-workout',
    templateUrl: 'add-a-workout.html'
})
export class AddAWorkoutPage {
    public workoutArea : String;
    public Sets: String;
    public Reps : String;
    public Exercise: String;
    public Weight: number;
    public result : any;

    constructor(public navCtrl: NavController, private workoutSrv:WorkoutService){

    }

    onSubmit(){
        var workout = {
            workoutArea : this.workoutArea,
            Sets: this.Sets,
            Reps: this.Reps,
            Weight : this.Weight,
            Exercise: this.Exercise

        }

        //add workout using service eg the database list
        this.workoutSrv.addWorkout(workout).subscribe(data => {
            this.result = data;
        });

        this.navCtrl.push(WorkoutsPage);
    }

}
