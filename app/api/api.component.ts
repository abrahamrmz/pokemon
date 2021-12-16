import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buscador(): any{
    this.router.navigate(['/search']);
  }

  api(): any{
    this.router.navigate(['/api']);
  }

  contacto(): any{
    this.router.navigate(['/contacto']);
  }

}
