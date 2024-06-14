import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {
  @Input() image!: string;
  @Output() onClick: EventEmitter<boolean> = new EventEmitter();
  public value: boolean = false;

  alterValue() {
    const newValue = !this.value;
    return (this.value = newValue);
  }
}
