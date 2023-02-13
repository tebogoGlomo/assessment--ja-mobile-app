import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
   selector: 'app-home',
   templateUrl: './Jobcard.component.html',
   styleUrls: ['./Jobcard.component.css']
})
export class JobcardComponent {

    constructor(
 private _router:Router
     ) { }

     navigateToDashboard(){this._router.navigateByUrl('Dashboard');}
     

    
}