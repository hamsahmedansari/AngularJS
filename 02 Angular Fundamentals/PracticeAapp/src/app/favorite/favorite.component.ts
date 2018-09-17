import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input('is-Favorite') isFavorite:boolean;
  @Output('is-change') change = new EventEmitter();
  

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue : this.isFavorite});
  }

  constructor() { }

  ngOnInit() {
  }

}
export interface FavoriteChangedEventArgs{
  newValue : boolean
}
