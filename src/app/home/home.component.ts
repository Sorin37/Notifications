import { Component, OnInit } from '@angular/core';
import { Categories } from '../Enumerations/categories';
import { Announcement } from '../Interfaces/announcement';
import { AnnouncementService } from '../Services/announcement.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedCategory: Categories;

  announcements: Array<Announcement>;

  announcementsToDisplay: Array<Announcement> = [];

  getSelectedCategory(event: any) {
    if (event == 0) {
      this.announcementsToDisplay = this.announcements;
    } else {
      this.announcementsToDisplay = this.announcements.filter(
        (announcement) => announcement.category == event
      );
    }
  }
  constructor ( private announcementService: AnnouncementService ){};

  ngOnInit(){
     this.announcementService.getAnnouncements().subscribe((announcemments) => this.announcements = announcemments);
  }
}
