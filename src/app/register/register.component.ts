import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // creating an instance of Serice using Dependency Injection syntax
  constructor(private userDataService: DataService) {}

  ngOnInit(): void {}
  // gets data from from onSubmit and sends data to service
  getData(myform: any) {
    this.userDataService.getData(myform.value).subscribe((res) => {
      console.log('result from post request', res);
    });
    myform.form.reset();
  }
}
