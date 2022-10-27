import { Component, Input, OnInit } from '@angular/core';
import { Announcement } from '../announcement';
import { Categories } from '../categories';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss'],
})
export class AnnouncementComponent implements OnInit {
  selectedCategory: Categories;

  @Input() title:string;
  @Input() description:string;
  @Input() author:string;

  constructor() {}

  ngOnInit(): void {}
}
