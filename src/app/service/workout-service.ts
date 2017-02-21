/**
 * Created by Garret on 13-Feb-17.
 */
/**import injectable package from angular Core*/
/**also http modules and request options */

import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx'; /**is a set of libraries to compose asynchronous and event-based programs using observable collections*/

@Injectable()
export class WorkoutService{
    http:any;
    apiKey: String;
    workoutUrl: String;

    constructor(http:Http){
        this.http = http;
        this.apiKey = 'rP_Le0LqtA8BjUxqbZTi5zasXGZO2pAQ';
        this.workoutUrl = 'https://api.mlab.com/api/1/databases/gtworkoutapp/collections/workout'
    }

    getWorkout(){
        return this.http.get(this.workoutUrl+'?apiKey='+this.apiKey ).map(res => res.json());
    }

    addWorkout(workout){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.workoutUrl+'?apiKey='+this.apiKey, JSON.stringify(workout),{headers:headers}).map(res => res.json());
    }
}