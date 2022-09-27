import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataProviderService {

    constructor(private http : HttpClient){}
  private _messages$: BehaviorSubject<Message[]> = new BehaviorSubject<
    Message[]
  >([]);

  public getMessages() {
    return this._messages$.asObservable();
  }

  public postMessage(message: string): Observable<'SUCCESS'> {
    this._messages$.next([
      ...this._messages$.value,
      {
        message,
        author: 'YOU',
        timestamp: new Date().getTime(),
      },
    ]);
    this._messages$.subscribe(console.log);
    return of('SUCCESS');
  }

  

  public getFriends() : Observable<Friend[]>{
    return this.http.get<Friend[]>('../assets/friends.json').pipe(
        delay(1000),
        map((data)=>{
            let sortedFriends = [...data].sort(function(a:Friend, b:Friend){return b.likeCount - a.likeCount} )
            return sortedFriends ;
        })
    )
    
  }

}

export interface Friend{
    name: string ,
    likeCount : number 
}

export interface Message {
  message: string;
  author: 'YOU' | 'FRIEND';
  timestamp: number;
}
