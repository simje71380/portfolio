import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
})
export class HeaderComponent {
  isDarkTheme: boolean;

  constructor(private readonly themeService: ThemeService) {
    this.isDarkTheme = document.body.classList.contains('dark-theme');
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.isDarkTheme = !this.isDarkTheme;
  }

  getIcon(path: string): string {
    return this.isDarkTheme
      ? `assets/img/dark/${path}`
      : `assets/img/light/${path}`;
  }
}
