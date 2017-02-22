import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import {WorkoutsPage} from'../pages/workouts/workouts';
import {AddAWorkoutPage} from '../pages/add-a-workout/add-a-workout';
import {WorkoutDetailsPage} from '../pages/workout-details/workout-details';
import { TabsPage } from '../pages/tabs/tabs';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AddAWorkoutPage,
    WorkoutsPage,
    WorkoutDetailsPage,
    TabsPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AddAWorkoutPage,
    WorkoutsPage,
    WorkoutDetailsPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
