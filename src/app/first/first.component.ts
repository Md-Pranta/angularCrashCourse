import { Component } from '@angular/core';
import { MyFirstService } from '../services/my-first.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitTed: boolean = false;
  messages: any[] = [];

  constructor(private service: MyFirstService) {
    this.messages = this.service.getAllMessages();
    this.isSubmitTed = this.messages.length > 0;
  }

  onSubmit(): void {
    console.log(this.name);
    this.isSubmitTed = true;
    this.service.insert({
      name: this.name,
      email: this.email,
      message: this.message,
    });
  }

  deleteMessage(index: number) {
    this.service.deleteMessages(index);
  }
}
