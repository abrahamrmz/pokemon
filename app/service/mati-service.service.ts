import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatiServiceService {

  basePath = 'https://pokeapi.co/api/v2/pokemon/';
  myDomainPath = 'http://abraham93.space/script/noti.php';

  constructor(private http: HttpClient) {}

  getPokemon(pokemon: any): any{
    return this.http.get<any>(this.basePath + pokemon);
  }

  getTotalPokemon(): any{
    return this.http.get<any>(this.basePath);
  }

  getTotalClicks(mensaje): any{
    return this.http.get<any>(this.myDomainPath + '?msg=' + mensaje);
  }
}
