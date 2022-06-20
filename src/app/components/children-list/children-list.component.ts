import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/models/register';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
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

  public userData: User | null = null;

  constructor(
    private registerService: RegisterService,
    private auth: AuthService
  ) {}

  private renderList() {
    this.registerService.getRegistrations().subscribe((result) => {
      this.list = result;
    });
  }
  ngOnInit(): void {
    this.renderList();
    this.userData = this.auth.user;
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
