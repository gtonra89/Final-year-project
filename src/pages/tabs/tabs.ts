import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import {AddAWorkoutPage} from "../add-a-workout/add-a-workout";
import {AddAExercisePage} from "../add-a-exercise/add-a-exercise";
import {WorkoutsPage} from '../workouts/workouts';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = WorkoutsPage;
  tab2Root: any = AddAWorkoutPage;
  tab3Root: any = AboutPage;

  constructor() {

  }
}
