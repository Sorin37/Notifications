import { Component, Input, OnInit } from '@angular/core';
import { Announcement } from '../Interfaces/announcement';
import { Categories } from '../Enumerations/categories';
import { AnnouncementService } from '../Services/announcement.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss'],
})
export class AnnouncementComponent implements OnInit {
  selectedCategory: Categories;

  @Input() announcement:Announcement;
  constructor(private announcementService: AnnouncementService) {}

  ngOnInit(): void {}

  editAnnouncement(id){
    console.log("edit " + id)
  }

  deleteAnnouncement(id){
    this.announcementService.deleteAnnouncement(id).subscribe();
    window.location.reload();
  }
}
