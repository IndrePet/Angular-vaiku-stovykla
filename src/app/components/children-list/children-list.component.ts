import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/models/register';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-children-list',
  templateUrl: './children-list.component.html',
  styleUrls: ['./children-list.component.css'],
})
export class ChildrenListComponent implements OnInit {
  public list: Register[] = [];

  constructor(private registerService: RegisterService) {}

  ngOnInit(): void {
    this.registerService.getRegistrations().subscribe((result) => {
      this.list = result;
    });
  }
}
