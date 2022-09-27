import { Component, OnInit, ViewChild } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ChatControlComponent } from './chat-control/chat-control.component';
import { DataProviderService, Friend, Message } from './data-provider-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public readonly messages$: Observable<Message[]>;

  @ViewChild(ChatControlComponent) chatControl: ChatControlComponent | null =null;

  constructor(private dataProvider: DataProviderService) {
    this.messages$ = this.dataProvider.getMessages().pipe(
      map((messages) =>
        messages.sort((a, b) => {
          return a.timestamp-b.timestamp ;
        })
      )
    );
  }
  public friends$ : Observable<Friend[]> | null  = null;
  ngOnInit(): void {
   this.friends$ =  this.dataProvider.getFriends() ;
  }
  public postMessage(message: string) {
    this.dataProvider.postMessage(message).subscribe({
      next : (data)=>{
        console.log(data); 
        this.chatControl?.clear;
      },
      error :(err) =>{
        console.log(err)
      }
    })



    // this.dataProvider.postMessage(message).subscribe({
    //   next: () => {
    //     this.chatControl?.clear();
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });
  }
}
