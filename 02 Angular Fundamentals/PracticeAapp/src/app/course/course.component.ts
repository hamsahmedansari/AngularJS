import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

// @Component({
//   selector: 'app-course',
//   templateUrl: './course.component.html',
//   styleUrls: ['./course.component.css']
// })

@Component({
  selector:'course',
  template:`
            <h2> Tittle : {{tittle}}</h2>
            <ul>
              <li *ngFor="let course of courses"> {{ course }} </li>
            </ul>

            <div (click)="divClick()">

            <button class="btn " [class.btn-success]="isActive" (click)="changeClass($event)" >ok</button>
            </div>

            <br>
            <img [src]="image">
            <table border>
              <tr  *ngFor="let course of courses">
                <td [attr.colspan]="colspan"> {{ course }} </td>
              </tr>
            </table>

            <input (keyup.enter)="checkEnter()">
            <input #text (keyup.enter)="checktext(text.value)">
            <input [(ngModel)]="email" (keyup.enter)="onkeyup()">
            <br>
            {{pipe.tittle | uppercase}}
            <br>
            {{pipe.rating | number:'1.2-2'}}
            <br>
            {{pipe.students | number}}
            <br>
            {{pipe.price | currency:'PKR':true:'2.2-2'}}
            <br>
            {{pipe.releseDate | date:'fullDate'}}
            <br>
            {{pipe.details | summary:101}}
          `
})

export class CourseComponent implements OnInit {

  tittle = "Hello";

  isActive = false;

  courses;
  image = "https://dummyimage.com/600x400/000/fff";
  colspan = 4;
  constructor() {
    let service = new CourseService(); 
    this.courses = service.getCourse() 
  }
  changeClass($event){
    $event.stopPropagation();
    console.log($event);
    
    this.isActive = !(this.isActive);
  }
  divClick(){
    console.log("div is clicked");
    
  }
  checkEnter(){
    console.log("enter press");
  }
  checktext(text){
    console.log(text);
  }
  email = "abc@abc.com";

  onkeyup(){
    console.log(this.email);
    
  }

  pipe = {
    tittle : "the tittle is Tittle",
    rating : 3.6324,
    students : 324234,
    price : 142.23,
    releseDate : new Date(2018,3,1),
    details : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  }

  ngOnInit() {
  }

}
