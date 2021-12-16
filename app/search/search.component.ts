import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatiServiceService } from '../service/mati-service.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  pokemons: any;
  pokeInfo: Observable<any[]>;
  error: any;
  response: boolean;

  constructor(private auth: MatiServiceService,
              private router: Router) {}

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

  ConvertToLower(evt): any {
    this.pokemons = evt.toLowerCase();
  }

  getPokemon(submitBtn: HTMLButtonElement): void {
    let box = document.getElementById('search');
    submitBtn.disabled = true;
    console.log(this.pokemons);
    this.auth.getPokemon(this.pokemons).subscribe((pokemon: any) => {
      this.response = true;
      this.pokeInfo = pokemon;
      submitBtn.disabled = false;
      box.style.display = 'none';
    },
    (error: HttpErrorResponse) => {
      if (error.status === 404){
        this.response = false;
        this.error = 'No se encontro ningun pokemon con ' + this.pokemons;
        submitBtn.disabled = false;
      }
    });
  }

  backPokemon(pokemon): any{
    this.response = false;
    if (pokemon > 0) {
      pokemon = pokemon - 1;
      this.auth.getPokemon(pokemon).subscribe((backPokemon: any) => {
        this.response = true;
        this.pokeInfo = backPokemon;
      });
    }
  }

  nextPokemon(pokemon): any{
    this.response = false;
    this.auth.getTotalPokemon().subscribe((total) => {
      if (pokemon > 0 && pokemon <= total.count) {
        pokemon = pokemon + 1;
        this.auth.getPokemon(pokemon).subscribe((nextPokemon: any) => {
          this.response = true;
          this.pokeInfo = nextPokemon;
        });
      }
    });
  }

}
