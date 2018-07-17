import {Component, OnInit} from '@angular/core';//Ceci, l'angular a été importé

@Component({
	//ici c'est un déclarateur  qui commence avec le signe @
	//Il faut que le mot «component» soit le même.
	selector: 'app-new-cmp',
	templateUrl:'./new-cmp.component.html',
	styleUrls: ['./new-cmp.component.css']
})

export class NewCmpComponent implements OnInit {
	newcomponent = "Nouveau composant a été créé";
	constructor() {
		console.log("Construtor()");
	}

	ngOnInit(){
		console.log("ngOnInit()");
	}
}