import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterNewComponent } from './components/register-new/register-new.component';
import { ChildrenListComponent } from './components/children-list/children-list.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: ChildrenListComponent },
  { path: 'register', component: RegisterNewComponent },
];
@NgModule({
  declarations: [AppComponent, RegisterNewComponent, ChildrenListComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
