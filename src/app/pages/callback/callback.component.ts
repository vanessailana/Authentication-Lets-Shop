import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

 constructor(private auth: AuthService,private router: Router) {
    // Check for authentication and handle if hash present
    auth.handleAuth();

  }

  ngOnInit() {
   this.router.navigate(['/offered']);
  }

}
