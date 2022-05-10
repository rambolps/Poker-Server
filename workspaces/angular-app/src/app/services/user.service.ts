import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<User[]>{
    const body =  {
      collection: "Games",
      database: "Poker-DB",
      dataSource: "Poker"
    }

    const headers = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Access-Control-Request-Headers': '*',
       'api-key': 'HN58AQaOf7qmyodaPxwWCGteaMmmQ9634521oXXCWzkw9VshHdqevEyogl7Wd0zL'
      })
    }
    
    return this.http.post(this.Root_URL,body,headers);
  }
}
