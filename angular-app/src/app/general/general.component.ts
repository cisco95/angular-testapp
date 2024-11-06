import { Component } from '@angular/core';
import { TestServiceService } from '../test-service.service';


@Component({
  selector: 'app-general',
  standalone: true,
  imports: [],
  templateUrl: './general.component.html',
  styleUrl: './general.component.css'
})
export class GeneralComponent {
  stuff: any;
   
  constructor (
    private service: TestServiceService,
  ) {}


  ngOnInit(): void {
    this.service.getStuff()
      .subscribe( stuff => this.stuff = JSON.stringify(stuff))
  }
}
