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
  public showModal: boolean = false;
  private childId: string = '';

  constructor(private registerService: RegisterService) {}

  private renderList() {
    this.registerService.getRegistrations().subscribe((result) => {
      this.list = result;
    });
  }
  ngOnInit(): void {
    console.log(this.showModal, '---', this.childId);

    this.renderList();
  }

  public showConfirmationModal(id: string | null) {
    this.showModal = true;
    if (id !== null) {
      this.childId = id;
    }
  }

  public onClose() {
    this.showModal = false;
  }

  public onDelete() {
    this.registerService.deleteInfo(this.childId).subscribe(() => {
      this.showModal = false;
      this.renderList();
    });
  }
}
