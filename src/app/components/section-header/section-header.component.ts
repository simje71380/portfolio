import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss',
  standalone: true
})
export class SectionHeaderComponent {
  @Input() sectionTitle!: string;
  @Input() title!: string;
  
  private _desc: string = '';
  safeDesc!: SafeHtml;

  constructor(private readonly sanitizer: DomSanitizer) {}

  @Input() 
  set desc(value: string) {
    this._desc = value;
    this.safeDesc = this.sanitizer.bypassSecurityTrustHtml(this._desc);
  }

  get desc(): string {
    return this._desc;
  }
}
