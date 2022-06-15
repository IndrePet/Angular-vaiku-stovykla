import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Register } from 'src/app/models/register';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css'],
})
export class EditItemComponent implements OnInit {
  public childInfo: Register = new Register();
  public id: string = '';

  public loading: boolean = true;
  public errorLoading: boolean = false;
  public errorUpdating: boolean = false;

  constructor(
    private registerService: RegisterService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.id = this.route.snapshot.params['id'];
    this.registerService.getInfo(this.id).subscribe({
      next: (result) => {
        this.childInfo = result;
        this.loading = false;
      },
      error: () => {
        this.errorLoading = true;
      },
    });
  }

  public onUpdate() {
    this.registerService.updateInfo(this.childInfo).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: () => {
        this.errorUpdating = true;
      },
    });
  }
}
