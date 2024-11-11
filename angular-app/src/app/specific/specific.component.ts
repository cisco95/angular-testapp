import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';
import { ActivatedRoute } from '@angular/router';


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
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id = JSON.stringify(this.route.snapshot.paramMap.get('id'));
    this.service.getMoreStuff(id)
      .subscribe(moreStuff => this.more = JSON.stringify(moreStuff))
  }

}
