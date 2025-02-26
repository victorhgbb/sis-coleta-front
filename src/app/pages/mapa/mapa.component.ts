import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { GoogleMapsModule, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.scss'
})
export class MapaComponent implements OnChanges{
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;
  @Input() coords:any;

  apiLoaded = false;
  selectedMarker: any = null;

  // Configuração do centro do mapa
  center: google.maps.LatLngLiteral = { lat: 0, lng: 0 }; 
  zoom: number = 15;

  // Lista de marcadores
  marcadores: any;

  constructor(private cdr: ChangeDetectorRef) {
    this.loadGoogleMaps();
    this.getUserLocation();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.marcadores = this.coords;
  }

  loadGoogleMaps(){
      // Carregar API do Google Maps Dinamicamente
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        this.apiLoaded = true;
      };
      document.head.appendChild(script);
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.center.lat = position.coords.latitude;
          this.center.lng = position.coords.longitude;
        },
        (error) => {
          console.error('Erro ao obter localização', error);
        }
      );
    } else {
      this.center.lat = -15.814432199999997;
      this.center.lng = -47.888157299999996;
      this.zoom = 13
      console.error('Geolocalização não suportada pelo navegador');
    }
  }

  selecionarPonto(marker: MapMarker, ponto: any) {
    this.selectedMarker = ponto;

    // Força o Angular a detectar a mudança antes de abrir o popup
    this.cdr.detectChanges();

    if (this.infoWindow) {
      this.infoWindow.open(marker);
    } else {
      console.error("Erro: infoWindow não foi carregado corretamente.");
    }
  }

}
