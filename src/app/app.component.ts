import { Component } from '@angular/core';
import { Announcement } from './announcement';
import { Categories } from './categories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notifications-app';

  selectedCategory:Categories;
 
  announcements: Array<Announcement> = [
    {
      title: 'Anunt',
      description: 'Nu se tine cursul',
      author: 'Elena',
      category: Categories.All,
    },
    {
      title: 'Lista de cumparaturi',
      description: 'Oua, lapte, budinca proteica',
      author: 'Sorin',
      category: Categories.General,
    },
  ];

  announcementsToDisplay: Array<Announcement> = [];

  getSelectedCategory(event: any){
    if(event == Categories.All){
      this.announcementsToDisplay = this.announcements;
    }else{
    this.announcementsToDisplay = this.announcements.filter((announcement) => announcement.category == event);
    }
  }
}
