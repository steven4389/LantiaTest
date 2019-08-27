import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  public url : string = "https://www.googleapis.com/youtube/v3/search"

  constructor(public _http: HttpClient) { }

  buscare(valores: string) : Observable<any>{
    let uri = `${this.url}?part=snippet&maxResults=5&q=${valores}&key=AIzaSyABraf_a99NkRhOnjbbALmz9fUi_VynXmA`;
    return this._http.get<any>(uri);
  }
}
