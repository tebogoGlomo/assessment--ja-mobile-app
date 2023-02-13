import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
   selector: 'app-home',
   templateUrl: './JobTabs.component.html',
   styleUrls: ['./JobTabs.component.css']
})
export class JobTabsComponent {

    constructor( private _router:Router
     ) { }

     navigateToDashboard(){this._router.navigateByUrl('Dashboard');}
     

    
}