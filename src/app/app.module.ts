import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import {WorkoutsPage} from'../pages/workouts/workouts';
import {AddAWorkoutPage} from '../pages/add-a-workout/add-a-workout';
import {WorkoutDetailsPage} from '../pages/workout-details/workout-details';
import {AddAExercisePage} from '../pages/add-a-exercise/add-a-exercise';
import { TabsPage } from '../pages/tabs/tabs';
import { InAppBrowser } from 'ionic-native';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AddAWorkoutPage,
    WorkoutsPage,
    WorkoutDetailsPage,
    AddAExercisePage,
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
    AddAExercisePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
