import { Component, OnInit } from '@angular/core';


import { HttpService } from '../../app/http.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  country: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getCountries().subscribe((data: any) => {
      this.country = data;
      console.log(this.country);
    }
  );
  }

}
