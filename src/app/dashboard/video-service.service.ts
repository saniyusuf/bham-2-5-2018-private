import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class VideoServiceService {

  constructor(private httpClient: HttpClient) { }

  getVideoData(){
    return this.httpClient.get('http://localhost:8085/videos');
  }

}
