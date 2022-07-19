import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
// export class ServiceNameService {
//   constructor(private httpClient: HttpClient) { }
  
// }
@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  server_address:string='api';
  constructor(public http : HttpClient) { }
  getTestimonials()
  {
    return this.http.get(`${this.server_address}/testimony`);
  }
  }
