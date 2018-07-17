import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplication pTeste!';
  months=["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin",
  		  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"];
  isavailable = true;


  myClickFunction($event){
  	console.log("Vous avez touché le p'ton!");
  	console.log($event);
  	this.isavailable = !this.isavailable;
  }

  changeMonth($event){
  	console.log("Vous avez selecioné le mois!");
  	console.log($event);
  }
}
