/**
 * Created by Garret on 11-Feb-17.
 */
import { Component } from '@angular/core';
import {NavController, List} from 'ionic-angular';
import {WorkoutsPage} from '../workouts/workouts';
import {WorkoutService} from "../../app/service/workout-service";
import {AddAWorkoutPage} from '../add-a-workout/add-a-workout';

@Component({
    selector: 'add-a-exercise',
    templateUrl: 'add-a-exercise.html'
})
export class AddAExercisePage {
    //Declaring Varibales 
    public Exercise : any;
    public newExercise :any;
    public result : any;

    constructor(public navCtrl: NavController, private workoutService:WorkoutService){
        
    }
    /**
     * When on Submit1 Clicked
     * create a variable called AddExercise
     * and populate it with the Var Exercise Object 
     */
    onSubmit1(){
        var AddExercise = {
            Exercise : this.newExercise 
        }     
       //add workout using service eg the database list
        this.workoutService.addNewExercise(AddExercise).subscribe(data => {
            this.result = data;
        });
        //redirect to this page after submit
        this.navCtrl.push(AddAWorkoutPage);
    }
}
