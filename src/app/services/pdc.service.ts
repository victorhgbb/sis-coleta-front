import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({ providedIn : 'root'})
export class PdcService {

    private apiUrl = environment.apiUrl + '/api/v1/pdc';

    constructor(private http: HttpClient) { }

    getPdc(): Observable<any> {
        return this.http.get(`${this.apiUrl}`);
    }

    save(pdc: any): Observable<any> {
        return this.http.post(`${this.apiUrl}`, pdc);
    }
}