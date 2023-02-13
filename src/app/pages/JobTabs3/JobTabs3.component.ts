import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
   selector: 'app-home',
   templateUrl: './JobTabs3.component.html',
   styleUrls: ['./JobTabs3.component.css']
})
export class JobTabs3Component {

    constructor( private _router:Router
     ) { }

     navigateToDashboard(){this._router.navigateByUrl('Dashboard');}
     

    
}