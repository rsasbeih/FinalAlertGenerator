import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  icons=["../../assets/birthday-cake.svg",'../../assets/warning.svg','../../assets/pedestrian-walking.svg','../../assets/people.svg'];
  title:string;
  alertTitle:string;
  color1="red";
  color2="blue";
  body:string;
  iconSrc:string="../../assets/birthday-cake.svg";
  setIcon(icon:string){
    this.iconSrc=icon;
  }
}
