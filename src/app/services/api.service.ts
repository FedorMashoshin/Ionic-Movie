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

  getMovieDetails(id, type){
    return this.http.get(`${environment.api}/${type}/${id}`)
  }

  getMovieCast(id, type){
    return this.http.get(`${environment.api}/${type}/${id}/credits`).pipe(
      map((res:any) => res.cast)
    );
  }

  getActorDetails(id){
    return this.http.get(`${environment.api}/person/${id}`)
  }

  getActorCreditList(id){
    return this.http.get(`${environment.api}/person/${id}/combined_credits`).pipe(
      map((res:any) => res.cast),
      map(cast => {
        return cast.sort((a, b) => {
          const aValue = a['release_date'] || a['first_air_date'];
          const bValue = b['release_date'] || b['first_air_date'];
 
          let aDate = new Date(aValue);
          let bDate = new Date(bValue);
          return bDate.getTime() - aDate.getTime();
        })
      }),
      map(cast => {
        return cast.map(entry => {
          const value = entry['release_date'] || entry['first_air_date'];
 
          let date = new Date(value);
          entry.custom_year = date.getFullYear();
          return entry;
        })
      })
    )
  }
  getSearchResults(term) {
    return this.http.get(`${environment.api}/search/multi`, {
      params: {
        query: term
      }
    }).pipe(
      map((res: any) => res.results),
      map(results => {
        return results.map(r => {
          if (r.poster_path) {
            r.imageUrl = `${environment.images}/w200${r.poster_path}`;
          }
          return r;
        })
      })
    );
  }

}
