import { Component } from '@angular/core';
import { EnteteComponent } from "../entete/entete.component";
import { RechercheComponent } from "../recherche/recherche.component";
import { Hero2Component } from "../hero2/hero2.component";
import { PieddepageComponent } from "../pieddepage/pieddepage.component";


@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [EnteteComponent, RechercheComponent, Hero2Component, PieddepageComponent],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {

}
