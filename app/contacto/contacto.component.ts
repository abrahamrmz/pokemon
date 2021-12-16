import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatiServiceService } from '../service/mati-service.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  total = 0;
  response: boolean;
  mensaje: any;

  constructor(private router: Router,
              private auth: MatiServiceService) { }

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

  getTotal(): any{
    this.auth.getTotalClicks(this.mensaje).subscribe((total: any) => {
      this.total = total.total;
      // detalles de la notificacion
      console.log(total.details);
    });
  }

}
