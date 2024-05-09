import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  acc=localStorage.getItem('auth');
  logOut(){
    localStorage.removeItem('auth')
    window.location.href="admin"
  }
}
