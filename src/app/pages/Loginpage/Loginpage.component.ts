import { Component } from '@angular/core';
import { SplashScreenStateService } from 'src/app/services/splash-screen-state.service';
import { Router } from '@angular/router';

@Component({
   selector: 'app-home',
   templateUrl: './Loginpage.component.html',
   styleUrls: ['./Loginpage.component.css']
})
export class LoginpageComponent {

    constructor(
        private splashScreenStateService: SplashScreenStateService, private _router:Router
     ) { }

     navigateToDashboard(){this._router.navigateByUrl('Dashboard');}
     

     ngOnInit(): void {
        setTimeout(() => {
           this.splashScreenStateService.stop();
        }, 5000);
     }
}