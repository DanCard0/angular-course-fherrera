import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDv9-SfRGvmQcCayA9Z-mIqOnuX44gGodhDsiHbNoEhJUehPcPkcPRQMDuJYHVI0SDsO4TuIURj0ivzK9i_1ldHXdYYCf0apICCKErXNfTAr2PxHdGUbRNsFmiheUao1cHjm-bDEIWsd6TW_7OHe76-LQQIY_0'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDv9-SfRGvmQcCayA9Z-mIqOnuX44gGodhDsiHbNoEhJUehPcPkcPRQMDuJYHVI0SDsO4TuIURj0ivzK9i_1ldHXdYYCf0apICCKErXNfTAr2PxHdGUbRNsFmiheUao1cHjm-bDEIWsd6TW_7OHe76-LQQIY_0'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers });
  }
}
