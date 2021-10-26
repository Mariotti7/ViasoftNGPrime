import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'primeng-sandbox';

  items = [
    { vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black' },
    { vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White' },
    { vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue' },
  ];

  data: any;

    constructor() {
        this.data = {
            labels: ['A','B','C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
            };
    }
}
