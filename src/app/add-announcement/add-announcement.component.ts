import { Component, OnInit } from '@angular/core';
import { Categories } from '../Enumerations/categories';
import { Announcement } from '../Interfaces/announcement';
import { AnnouncementService } from '../Services/announcement.service';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.scss']
})
export class AddAnnouncementComponent implements OnInit {

  constructor ( private announcementService: AnnouncementService ){};

  ngOnInit(){

  }



  Categories:Array<Categories> = [Categories.All, Categories.Course, Categories.General, Categories.Laboratory]

  newAnnouncement: Announcement = { id: "", title: "", message: "", author: "", category: Categories.All, imageUrl: ""};

  addAnnouncement(){
    this.announcementService.addAnnouncement(this.newAnnouncement).subscribe();
    
  }
}
