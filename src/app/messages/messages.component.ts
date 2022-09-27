import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../data-provider-service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor() { }
  @Input() messages: Message[] | null = [];
  ngOnInit(): void {

  }

}
