import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-branding',
  standalone: true,
  imports: [RouterModule],
  template: `
      <a [routerLink]="['/']">
        Sis-coleta
      </a>
  `
  // `
  //   <div class="branding">
  //     <a [routerLink]="['/']">
  //       <img
  //         src="./assets/images/logos/logo.svg"
  //         class="align-middle m-2"
  //         alt="logo"
  //       />
  //     </a>
  //   </div>
  // `
  ,
})
export class BrandingComponent {
  constructor() {}
}
