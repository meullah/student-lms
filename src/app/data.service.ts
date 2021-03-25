import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {
    console.log('here!!!!!!!');
  }

  getData(data: any) {
    console.log('data : ', data);
    return this.http.post('http://localhost:3000/data', data);
  }
}
