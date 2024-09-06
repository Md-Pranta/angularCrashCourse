import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyFirstService {
  messages: any[] = [];

  constructor() {
    this.init()
  }

  init(): void {
    this.insert({
      name: 'ali',
      email: '@',
      message: 'ajshdshdfds',
    });
  }

  insert(message: { name: string; email: string; message: string }) {
    this.messages.push(message);
  }

  getAllMessages(): any[] {
    return this.messages;
  }

  deleteMessages(index: number): void {
    this.messages.splice(index, 1);
  }
}
