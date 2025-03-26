import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Experience } from '../../models/experience';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: true,
  imports: [NgFor]
})
export class ExperienceComponent implements OnInit {
  xps: Experience[] = [];

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<{ experiences: Experience[] }>('./assets/data.json')
      .subscribe(data => {
        this.xps = data.experiences;
      });
  }
}
