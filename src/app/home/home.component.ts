import { Component, OnInit } from '@angular/core';
import { Categories } from '../Enumerations/categories';
import { Announcement } from '../Interfaces/announcement';
import { AnnouncementService } from '../Services/announcement.service';
import { NotificationService } from '../Services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedCategory: Categories;

  announcements: Array<Announcement>;

  announcementsToDisplay: Array<Announcement> = [];

  notificationMessage;

  getSelectedCategory(event: Categories) {
    console.warn(this.announcements);
    console.warn(event);
    if (event == 0) {
      this.announcementsToDisplay = this.announcements;
    } else {
      this.announcementsToDisplay = this.announcements.filter(
        (announcement) => announcement.categoryId == event
      );
    }
  }
  constructor ( private announcementService: AnnouncementService, private notificationService: NotificationService ){};

  ngOnInit(){
     this.announcementService.getAnnouncements().subscribe((announcemments) => this.announcements = announcemments);
     this.notificationService.initWebSocket();
     this.notificationService.notificationSubject.subscribe(hasNotifications => this.notificationMessage = hasNotifications ? "New notifications, please refresh the page" : "");
  }
}
