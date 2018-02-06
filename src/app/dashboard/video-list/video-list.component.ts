import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  videoList;
  selectedVideoIndex;

  @Output() videoSelected = new EventEmitter<any>();

  constructor(httpClient: HttpClient) {
    httpClient.get("http://localhost:8085/videos")
      .subscribe((videoData)=>{
        this.videoList = videoData;
      });
  }

  ngOnInit() {
  }

  setSelectedVideo(videoIndex){
    this.selectedVideoIndex = videoIndex;

    const selectedVideo = this.videoList[videoIndex];
    this.videoSelected.emit(selectedVideo);
  }

}
