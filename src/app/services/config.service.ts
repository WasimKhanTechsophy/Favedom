import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  public environmentUrl;

  constructor(private http: HttpClient) {
    // this.environmentUrl = environment.apiUrl;
  }

  returnConfigFile() {
    return this.http.get('./assets/config.json');
  }

  returnEnvironmentUrl() {
    return this.environmentUrl;
  }
}
