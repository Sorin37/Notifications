import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Categories } from '../Enumerations/categories';
import { Announcement } from '../Interfaces/announcement';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  baseURL = 'https://localhost:7146';

  constructor(private HttpClient: HttpClient) {}

  serviceCall() {
    console.log('Service was called');
  }

  getAnnouncements(): Observable<Announcement[]>{
    return this.HttpClient.get<Announcement[]>(this.baseURL + "/Announcement");
  }

  addAnnouncement(announcement: Announcement): Observable<Announcement> {
    return this.HttpClient.post<Announcement>(this.baseURL + "/Announcement", 
    {title: announcement.title,
     message: announcement.message, 
     category: announcement.category,
     categoryId: announcement.categoryId.toString(),
     description: "",
     author: announcement.author,
     imageUrl: announcement.imageUrl},
     this.httpOptions);
  }

  editAnnouncement(id:string, announcement: Announcement){
  }

  deleteAnnouncement(id:string):Observable<Announcement>{
    console.log(id);
    return this.HttpClient.delete<Announcement>(this.baseURL + '/Announcement/' + id); 
  }
}
