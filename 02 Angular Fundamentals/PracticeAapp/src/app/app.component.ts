import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    tittle : 'tittle',
    isFavorite : true
  }
  isFavoriteChanged(argValue:FavoriteChangedEventArgs){
    console.log("Favorite is Changed " , argValue);
    
  }
}
