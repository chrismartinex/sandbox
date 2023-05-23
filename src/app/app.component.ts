import { Component } from '@angular/core';
import { FetchService } from './fetch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sandbox';
  data: any;

  constructor(private _apiservice: FetchService){}

  ngOnInit(){
    this._apiservice.getData().subscribe(res => {
      this.data = res;
      console.log(this.data);
    })
  }
}
