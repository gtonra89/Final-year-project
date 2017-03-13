/**
 * Created by Garret on 13-Feb-17.
 */
/**import injectable package from angular Core
 * also http modules and request options 
 * is a set of libraries to compose asynchronous and 
 * event-based programs using observable collections
 * */
import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx'; 
/*************************************************************************************************************/
@Injectable()
export class WorkoutService{
    http:any;
   WorkoutApiKey: String;
    WorkoutUrl: String;
    WorkoutListUrl:String;
    WorkoutListApiKey:String;

    constructor(http:Http){
        this.http = http;
        this.WorkoutApiKey = 'rP_Le0LqtA8BjUxqbZTi5zasXGZO2pAQ';
        this.WorkoutListApiKey = 'rP_Le0LqtA8BjUxqbZTi5zasXGZO2pAQ';
        this.WorkoutUrl = 'https://api.mlab.com/api/1/databases/gtworkoutapp/collections/workout';
        this.WorkoutListUrl = 'https://api.mlab.com/api/1/databases/workout2/collections/Workout2';
    }

/*************************************************************************************************************/

    /**
     * Simple Get Request to get workourts 
     * from the database back using the api key and url
     */
    getWorkout(){  
        return this.http.get(this.WorkoutUrl+'?apiKey='+this.WorkoutApiKey ).map(res => res.json());
    }

/*************************************************************************************************************/
/*************************************************************************************************************/

    /**
     * Simple Get Request to get workourts 
     * from the database back using the api key and url
     */
    getWorkout1(){  
        return this.http.get(this.WorkoutListUrl+'?apiKey='+this.WorkoutListApiKey ).map(res1 => res1.json());
    }

/*************************************************************************************************************/
     /**
     * create a new header using the Headers() constructor,
     * add a new header to it using append(),   
     * then return that header value using Post()
     * sending the WorkoutApiKey and the workoutUrl
     * Converts a JavaScript value to a JavaScript Object Notation (JSON) string. 
    */
    addWorkout(workout){
        
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.WorkoutUrl+'?apiKey='+this.WorkoutApiKey, JSON.stringify(workout),{headers:headers}).map(res => res.json());
    }

    addNewExercise(newExercise){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.WorkoutListUrl+'?apiKey='+this.WorkoutListApiKey, JSON.stringify(newExercise),{headers:headers}).map(res => res.json());
    }

    deleteWorkout(workoutId){
        return this.http.delete(this.WorkoutUrl+'/'+workoutId+'?apiKey='+this.WorkoutApiKey)
                .map(res => res.json());
    }

}