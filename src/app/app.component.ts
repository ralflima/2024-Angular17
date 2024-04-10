import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Componente01Component } from "./componente01/componente01.component";
import { Componente02Component } from "./componente02/componente02.component";
import { Componente03Component } from "./componente03/componente03.component";
import { Componente04Component } from "./componente04/componente04.component";
import { Componente05Component } from "./componente05/componente05.component";
import { Componente06Component } from "./componente06/componente06.component";
import { Componente07Component } from "./componente07/componente07.component";
import { Componente08Component } from "./componente08/componente08.component";
import { Componente09Component } from "./componente09/componente09.component";
import { Componente10Component } from "./componente10/componente10.component";
import { Componente11Component } from "./componente11/componente11.component";
import { Componente12Component } from "./componente12/componente12.component";
import { Componente13Component } from "./componente13/componente13.component";
import { Componente14Component } from "./componente14/componente14.component";
import { Componente15Component } from "./componente15/componente15.component";
import { Componente16Component } from "./componente16/componente16.component";
import { Componente17Component } from "./componente17/componente17.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, Componente01Component, Componente02Component, Componente03Component, Componente04Component, Componente05Component, Componente06Component, Componente07Component, Componente08Component, Componente09Component, Componente10Component, Componente11Component, Componente12Component, Componente13Component, Componente14Component, Componente15Component, Componente16Component, Componente17Component]
})
export class AppComponent {
  title = 'angular-basico';
}
