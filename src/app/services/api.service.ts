import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTrending(){
    return this.http.get<any[]>(`${environment.api}/trending/all/day`).pipe(
      map((res: any) => {
        return  res.results 
      }),
    // Sorting best movies --> worst
      map(results => {
        return results.sort((movie1, movie2) => movie2['vote_average'] - movie1['vote_average'])
      }) 
    )
  }
}
