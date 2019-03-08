import { Component, OnInit } from '@angular/core';
import{DataService} from './tabledynamic/data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private myservice:DataService) { }
  title = 'sampleangularproject';
  value: string;
  name:  string;


  getValue(){
    this.value = this.myservice.getdata();
    console.log(this.value)
    }


  ngOnInit() {
    this.myservice.setdata();
  }

}
