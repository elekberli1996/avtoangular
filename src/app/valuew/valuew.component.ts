import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-valuew',
  templateUrl: './valuew.component.html',
  styleUrls: ['./valuew.component.css']
})
export class ValuewComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }


  ngOnInit() {
  }

}
