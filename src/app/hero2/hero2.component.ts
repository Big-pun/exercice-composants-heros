import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero2',
  standalone: true,
  imports: [],
  templateUrl: './hero2.component.html',
  styleUrl: './hero2.component.css'
})
export class Hero2Component {
  @Input() titre: string = '';

}
