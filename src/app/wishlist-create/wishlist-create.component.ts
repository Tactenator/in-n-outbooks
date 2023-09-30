/**
 * Name: Trevor McLaurine
 * Date: 9/30/2023
 * Assignment: In-N-Out Books
 * Description: Wishlist create component
**/

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistitem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.css']
})
export class WishlistCreateComponent {

  @Output() addItemEmitter = new EventEmitter<IWishlistitem>();

  item: IWishlistitem

  constructor() {
    this.item = {} as IWishlistitem
  }

  addItem(){
    this.addItemEmitter.emit({ title: this.item.title, authors: this.item.authors })
  }
}
