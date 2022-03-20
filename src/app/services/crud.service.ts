import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproducts } from '../products';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  apiUrl:string ="http://localhost:3000/products"
  constructor(private http : HttpClient) { }
  get(){
    return this.http.get<Iproducts[]>(this.apiUrl);
  }
  delete(id:number){
    return this.http.delete<Iproducts[]>(this.apiUrl+'/'+id);
  }
  postD(data:Iproducts){
    return this.http.post<Iproducts[]>(this.apiUrl,data);
  }
  update(id:number,data:Iproducts){
    return this.http.put<Iproducts[]>(this.apiUrl+'/'+id,data);
  }
  getOne(id:number){
    return this.http.get<Iproducts>(this.apiUrl+'/'+id);
  }
}
