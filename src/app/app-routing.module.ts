/**
 * Name: Trevor McLaurine
 * Date: 9/11/2023
 * Assignment: Exercise 6.2 - Input/Output Properties, Part 1
 * Description: Routing for In-N-Out books
**/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {
    path:'', component: BookListComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'book-list', component: BookListComponent
  },
  {
    path: 'wishlist', component: WishlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
