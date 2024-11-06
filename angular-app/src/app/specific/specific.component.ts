import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-specific',
  standalone: true,
  imports: [],
  templateUrl: './specific.component.html',
  styleUrl: './specific.component.css'
})
export class SpecificComponent implements OnInit{
  more: any;
  constructor(
    private service: TestServiceService,
  ){}

  ngOnInit(): void {
    this.service.getMoreStuff()
      .subscribe(moreStuff => this.more = JSON.stringify(moreStuff))
  }

}
