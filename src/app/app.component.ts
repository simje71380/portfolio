import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { CertificationComponent } from './components/certification/certification.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { AboutComponent } from './components/about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    ExperienceComponent,
    EducationComponent,
    CertificationComponent,
    SectionHeaderComponent,
    AboutComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
