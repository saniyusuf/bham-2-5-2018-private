import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-stats-filters',
  templateUrl: './stats-filters.component.html',
  styleUrls: ['./stats-filters.component.css']
})
export class StatsFiltersComponent implements OnInit {
  statsFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.statsFormGroup = this.formBuilder.group({
      videoName: [''],
      gender: [''],
      millenial: [''],
      other: ['']
    });
    this.statsFormGroup.valueChanges.subscribe((data)=> console.log(data))
  }

  ngOnInit() {
  }

}
