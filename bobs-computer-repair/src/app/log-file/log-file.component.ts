import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-log-file',
  templateUrl: './log-file.component.html',
  styleUrls: ['./log-file.component.css']
})
export class LogFileComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getLog
  }

  getLog(){
    this.http.get('/api/log').subscribe(data => { 
      console.log(data)
    });
  }
}
