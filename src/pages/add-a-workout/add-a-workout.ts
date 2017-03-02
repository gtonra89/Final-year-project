/**
 * Created by Garret on 11-Feb-17.
 */
import { Component } from '@angular/core';
import {NavController, List} from 'ionic-angular';
import {WorkoutsPage} from '../workouts/workouts';
import {WorkoutService} from "../../app/service/workout-service";

@Component({
    selector: 'add-a-workout',
    templateUrl: 'add-a-workout.html'
})
export class AddAWorkoutPage {

    public Sets: String;
    public Reps : String;
    public Weight: number;
    public result : any;
    public workouts : any;
    public Exercise : any;

    constructor(public navCtrl: NavController, private workoutService:WorkoutService){
        
    }

    ngOnInit(){
    
    this.workoutService.getWorkout1().subscribe(workouts => {
      this.workouts = workouts;
      workouts.toString();
      console.log();
    });
  }

    onSubmit(){
        var workout = {
            Sets: this.Sets,
            Reps: this.Reps,
            Weight : this.Weight,
            Exercise: this.Exercise
        }

        //add workout using service eg the database list
        this.workoutService.addWorkout(workout).subscribe(data => {
            this.result = data;
        });

        this.navCtrl.push(WorkoutsPage);
        
    }



}
