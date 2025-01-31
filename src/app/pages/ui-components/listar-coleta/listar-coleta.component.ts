import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MapaComponent } from '../../mapa/mapa.component';
import { PdcService } from 'src/app/services/pdc.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

// table 1
export interface productsData {
  id: number;
  imagePath: string;
  uname: string;
  budget: number;
  priority: string;
}

const PRODUCT_DATA: productsData[] = [
  {
    id: 1,
    imagePath: 'assets/images/products/dash-prd-1.jpg',
    uname: 'iPhone 13 pro max-Pacific Blue-128GB storage',
    budget: 180,
    priority: 'confirmed',
  },
  {
    id: 2,
    imagePath: 'assets/images/products/dash-prd-2.jpg',
    uname: 'Apple MacBook Pro 13 inch-M1-8/256GB-space',
    budget: 90,
    priority: 'cancelled',
  },
  {
    id: 3,
    imagePath: 'assets/images/products/dash-prd-3.jpg',
    uname: 'PlayStation 5 DualSense Wireless Controller',
    budget: 120,
    priority: 'rejected',
  },
  {
    id: 4,
    imagePath: 'assets/images/products/dash-prd-4.jpg',
    uname: 'Amazon Basics Mesh, Mid-Back, Swivel Office',
    budget: 160,
    priority: 'confirmed',
  },
];

@Component({
  selector: 'app-listar-coleta',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    MatCardModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MapaComponent,
    MatPaginatorModule
  ],
  templateUrl: './listar-coleta.component.html',
})
export class AppListarColetaComponent implements OnInit{
  // table 1
  displayedColumns1: string[] = ['assigned', 'name', 'priority', 'budget'];
  pdcDisplayedColumns: string[] = ['name', 'type', 'city', 'budget'];
  dataSource1 = PRODUCT_DATA;
  pdcDatasource = new MatTableDataSource([]);
  coords: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private pdcService: PdcService){

  }

  ngOnInit(){
    this.getPdc();
  }

  getPdc() {
    this.pdcService.getPdc().subscribe(response => {
      this.pdcDatasource.data = response;
      this.pdcDatasource.paginator = this.paginator;
      this.coords = response.map((pdc: any) => ({
        lat: parseFloat(pdc.latitude),
        lng: parseFloat(pdc.longitude),
      }));

    });
  }

}
