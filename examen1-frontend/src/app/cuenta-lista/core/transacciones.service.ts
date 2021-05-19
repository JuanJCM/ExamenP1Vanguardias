import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Transactions } from 'src/app/shared/models/Transactions';
@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {
  baseUrl: string=  "http://localhost:64439";
  constructor(private httpClient: HttpClient) { }
  getPosts() : Observable<Transactions[]>{
    return this.httpClient.get<Transactions[]>('$baseUrl/');
  }
}
