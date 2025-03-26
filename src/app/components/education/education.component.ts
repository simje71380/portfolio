import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { Education } from '../../models/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
  standalone: true,
  imports: [NgFor]
})
export class EducationComponent implements OnInit {
  educs: Education[] = [];

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<{ educations: Education[] }>('./assets/data.json')
      .subscribe(data => {
        this.educs = data.educations;
      });
  }
}