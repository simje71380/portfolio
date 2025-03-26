import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { Project } from '../../models/project';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-project',
  imports: [NgFor],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  standalone: true,
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [];
  isDarkTheme: boolean;

  constructor(
    private readonly http: HttpClient,
    private readonly themeService: ThemeService
  ) {
    this.isDarkTheme = document.body.classList.contains('dark-theme');
  }

  ngOnInit(): void {
    this.http
      .get<{ projects: Project[] }>('./assets/data.json')
      .subscribe((data) => {
        this.projects = data.projects;
      });
  }

  getIcon(path: string): string {
    this.isDarkTheme = document.body.classList.contains('dark-theme');
    return this.isDarkTheme
      ? `assets/img/light/${path}`
      : `assets/img/dark/${path}`;
  }
}
