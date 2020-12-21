import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-show-apps',
  templateUrl: './show-apps.component.html',
  styleUrls: ['./show-apps.component.css']
})
export class ShowAppsComponent implements OnInit {

  apps: any;

  constructor(private httpserive: HttpService) { }

  ngOnInit(): void {
    this.getapps();
  }

  private getapps(){
    this.httpserive.getApss().subscribe(res => this.apps = res)
  }
}
