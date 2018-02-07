import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {VideoServiceService} from '../video-service.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  videoList$;
  selectedVideoIndex;

  @Output() videoSelected = new EventEmitter<any>();

  constructor(private videoService: VideoServiceService) {
    this.videoList$ = this.videoService.getVideoData();
  }

  ngOnInit() {
  }

  setSelectedVideo(videoIndex){
    this.selectedVideoIndex = videoIndex;

    const selectedVideo = this.videoList$[videoIndex];
    this.videoSelected.emit(selectedVideo);
  }

}
