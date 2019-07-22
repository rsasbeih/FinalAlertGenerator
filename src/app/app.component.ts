import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  icons=["../../assets/birthday-cake.svg",'../../assets/warning.svg','../../assets/pedestrian-walking.svg','../../assets/people.svg','../../assets/breakfast.svg'];
  title:string="Title shows here";
//  alertTitle:string="Title shows here";
  color1="red";
  color2="blue";
  body:string="Body shows here";
  iconSrc:string="../../assets/birthday-cake.svg";
  setIcon(icon:string){
    this.iconSrc=icon;
  }
}
