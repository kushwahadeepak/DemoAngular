import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  url='http://localhost:3000/students';
  constructor(private http: HttpClient) { }
// --------------post data In json File---------------

saveData(data:any){
  return this.http.post(this.url, data)
  // console.log("xcvcvcheck service", data); 
}

// ----------------get data in table----------------------
gedatedata(data: any){
  return this.http.get(this.url, data)
}

updateData(data: any): Observable<any>{
  return this.http.put(`${this.url}/${data.id}`, data)
}

// -----------delete data in table --------------------
deletedata(id:number): Observable<any>{
  return this.http.delete(`${this.url}/${id}`);
}




}
