import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MapaComponent } from '../../mapa/mapa.component';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cadastrar-coleta',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MapaComponent
  ],
  templateUrl: './cadastrar-coleta.component.html',
})
export class AppCadastrarColetaComponent {
  country: Food[] = [
    { value: 'Lixo Eletrônico', viewValue: 'Lixo Eletrônico' },
    { value: 'Lixo Hospitalar', viewValue: 'Lixo Hospitalar' },
    { value: 'Lixo Reciclável', viewValue: 'Lixo Reciclável' },
    { value: 'PEV', viewValue: 'PEV' },
    { value: 'LEV', viewValue: 'LEV' },
    { value: 'Cooperativas', viewValue: 'Cooperativas' }
  ];

  selectedCountry = this.country[2].value;

  city: Food[] = [
    { value: 'steak-0', viewValue: 'Mexico' },
    { value: 'pizza-1', viewValue: 'Mumbai' },
    { value: 'tacos-2', viewValue: 'Tokyo' },
    { value: 'tacos-3', viewValue: 'New York' },
  ];

  selectedCity = this.city[1].value;

  state: Food[] = [
    { value: 'steak-0', viewValue: 'Cuba' },
    { value: 'pizza-1', viewValue: 'Djibouti' },
    { value: 'tacos-2', viewValue: 'Bulgaria' },
    { value: 'tacos-3', viewValue: 'Cabo Verde' },
  ];

  selectedState = this.state[3].value;
}
