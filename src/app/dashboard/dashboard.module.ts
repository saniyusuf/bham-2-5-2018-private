import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { StatsFiltersComponent } from './stats-filters/stats-filters.component';

import { Routes, RouterModule } from '@angular/router';
import { VideoThumbnailComponent } from './video-thumbnail/video-thumbnail.component';
import {VideoServiceService} from './video-service.service';

const dashBoardRoutes: Routes = [
  { path: '', component: VideoDashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashBoardRoutes)
  ],
  providers: [VideoServiceService],
  declarations: [VideoDashboardComponent, VideoListComponent, VideoPlayerComponent, StatsFiltersComponent, VideoThumbnailComponent]
})
export class DashboardModule { }
