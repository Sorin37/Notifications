import { Component, OnInit } from '@angular/core';
import { Categories } from '../Enumerations/categories';
import { Announcement } from '../Interfaces/announcement';
import { AnnouncementService } from '../Services/announcement.service';
import { NotificationService } from '../Services/notification.service';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.scss']
})
export class AddAnnouncementComponent implements OnInit {

  constructor ( private announcementService: AnnouncementService, private notificationService: NotificationService ){};

  ngOnInit(){

  }



  Categories:Array<Categories> = [Categories.All, Categories.Course, Categories.General, Categories.Laboratory]

  newAnnouncement: Announcement = { id: "", title: "", message: "", author: "", category: "", categoryId: 0, imageUrl: ""};

  addAnnouncement(){
    this.newAnnouncement.category = Categories[this.newAnnouncement.categoryId];
    console.log(this.newAnnouncement);
    this.announcementService.addAnnouncement(this.newAnnouncement).subscribe(r => this.notificationService.sendMessage("BroadcastMessage", [r]));
  }
}
