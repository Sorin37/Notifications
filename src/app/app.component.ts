import { Component } from '@angular/core';
import { Announcement } from './Interfaces/announcement';
import { Categories } from './Enumerations/categories';
import { AnnouncementService } from './Services/announcement.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'notifications-app';
}
