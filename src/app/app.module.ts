import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashComponent } from './components/splash/splash.component';
import { DashboardComponent } from './pages/Dashboard/Dashboard.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { JobcardComponent } from './pages/Jobcard/Jobcard.component';
import { JobTabsComponent } from './pages/JobTabs/JobTabs.component';
import { JobTabs2Component } from './pages/JobTabs2/JobTabs2.component';
import { JobTabs3Component } from './pages/JobTabs3/JobTabs3.component';
import { LoginpageComponent } from './pages/Loginpage/Loginpage.component';
import { SplashScreenStateService } from './services/splash-screen-state.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SplashComponent,
    LoginpageComponent,
    DashboardComponent,
    JobcardComponent,
    JobTabsComponent,
    JobTabs2Component,
    JobTabs3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    SplashScreenStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
