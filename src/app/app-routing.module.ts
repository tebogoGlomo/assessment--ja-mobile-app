import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/Dashboard/Dashboard.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { JobcardComponent } from './pages/Jobcard/Jobcard.component';
import { JobTabsComponent } from './pages/JobTabs/JobTabs.component';
import { JobTabs2Component } from './pages/JobTabs2/JobTabs2.component';
import { JobTabs3Component } from './pages/JobTabs3/JobTabs3.component';
import { LoginpageComponent } from './pages/Loginpage/Loginpage.component';
const routes: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent
 },
 {
  path: 'Login',
  component: LoginpageComponent
 },
 {
  path: 'Dashboard',
  component: DashboardComponent
 },
 {
  path: 'Jobcards',
  component: JobcardComponent
 },
 {
  path: 'Jobcard_tabs',
  component: JobTabsComponent
 },
 {
  path: 'Jobcard_tabs2',
  component: JobTabs2Component
 },
 {
  path: 'Jobcard_tabs3',
  component: JobTabs3Component
 },
 {
    path: '',
    redirectTo: '/Login',
    pathMatch: 'full'
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
