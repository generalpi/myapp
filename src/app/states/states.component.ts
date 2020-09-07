import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit, OnDestroy {

  capital: any;
  private getCountryStates: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCountryStates=this.route.params.subscribe(params => {
      this.capital = params['name'];
      console.log(this.capital);
    }
  );
  }

  ngOnDestroy() {
    this.getCountryStates.unsubscribe();
  }
}
