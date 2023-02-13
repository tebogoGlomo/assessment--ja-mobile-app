import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
   selector: 'app-home',
   templateUrl: './JobTabs2.component.html',
   styleUrls: ['./JobTabs2.component.css']
})
export class JobTabs2Component {

    constructor( private _router:Router
     ) { }

     navigateToDashboard(){this._router.navigateByUrl('Dashboard');}
     

    
}