import { Component } from '@angular/core';
import { DataDisplayComponent } from './data-display/data-display.component';
import { BannerComponent } from './banner/banner.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DataDisplayComponent, BannerComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public name: string = '';
  public lastName: string = '';
  public year: number = 2024;

  public image: string =
    'https://p325k7wa.twic.pics/high/jujutsu-kaisen/jujutsu-kaisen-cursed-clash/00-page-setup/JJK-header-mobile2.jpg?twic=v1/resize=760/step=10/quality=80';

  public result: string = '';

  receiveResult(value: boolean) {
    const teste = value ? 'clicou' : '';
    this.result = teste;
  }
  actionOne() {
    this.name = 'Gabriel';
  }

  actionTwo() {
    this.lastName = 'Muniz';
  }

  actionThree() {
    this.year++;
  }

  actionFour() {
    this.year--;
  }
}
