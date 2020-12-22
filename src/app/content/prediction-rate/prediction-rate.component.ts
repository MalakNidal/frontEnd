import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-prediction-rate',
  templateUrl: './prediction-rate.component.html',
  styleUrls: ['./prediction-rate.component.css']
})
export class PredictionRateComponent implements OnInit {

  Rate: any;

  constructor(private httpserive: HttpService) { }

  ngOnInit(): void {
    this.getrate();
  }

  private getrate(){
    this.httpserive.getRate().subscribe(res => this.Rate = res)
  }

}
