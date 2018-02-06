import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { StatsFiltersComponent } from './stats-filters/stats-filters.component';

import { Routes, RouterModule } from '@angular/router';

const dashBoardRoutes: Routes = [
  { path: '', component: VideoDashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashBoardRoutes)
  ],
  declarations: [VideoDashboardComponent, VideoListComponent, VideoPlayerComponent, StatsFiltersComponent]
})
export class DashboardModule { }
