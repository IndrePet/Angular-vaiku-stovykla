import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterNewComponent } from './components/register-new/register-new.component';
import { ChildrenListComponent } from './components/children-list/children-list.component';
import { RouterModule, Routes } from '@angular/router';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { AuthComponent } from './components/auth/auth.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  { path: '', component: ChildrenListComponent },
  {
    path: 'register',
    component: RegisterNewComponent,
    canActivate: [AuthGuard],
  },
  { path: 'edit/:id', component: EditItemComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: AuthComponent },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    canActivate: [AuthGuard],
  },
];
@NgModule({
  declarations: [
    AppComponent,
    RegisterNewComponent,
    ChildrenListComponent,
    EditItemComponent,
    AuthComponent,
    NavigationComponent,
    FooterComponent,
    ChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
