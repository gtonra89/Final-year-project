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
    public title : String;
    public note : String;
    public type : String;
    public result : any;

    constructor(public navCtrl: NavController, private workoutSrv:WorkoutService){

    }

    onSubmit(){
        var workout = {
            title: this.title,
            note: this.note,
            type: this.type
        }

        //add workout using service eg the database list
        this.workoutSrv.addWorkout(workout).subscribe(data => {
            this.result = data;
        });

        this.navCtrl.push(WorkoutsPage);
    }

}
