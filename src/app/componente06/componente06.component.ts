import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente06',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente06.component.html',
  styleUrl: './componente06.component.css'
})
export class Componente06Component {

  // Variável contendo uma linguagem (HTML, CSS, JS)
  linguagem:string = 'PHP';

}
