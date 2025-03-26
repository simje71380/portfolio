import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { Certification } from '../../models/certification';

@Component({
  selector: 'app-certification',
  imports: [NgFor],
  standalone: true,
  templateUrl: './certification.component.html',
  styleUrl: './certification.component.scss'
})
export class CertificationComponent implements OnInit {
  certifications: Certification[] = [];

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<{ certifications: Certification[] }>('./assets/data.json')
      .subscribe(data => {
        this.certifications = data.certifications;
      });
  }
}