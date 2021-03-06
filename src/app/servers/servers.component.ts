import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '.app-servers',
  //selector: '[app-servers]',
  templateUrl: 'servers.component.html',
  //template: '<app-server><app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	allowNewServer = false;
	serverCreationStatus = 'server was not created';
	serverName = 'TestName';
	serverCreated = false;
	servers = ["apache","nginx"];
  constructor() {
  	setTimeout(() => {
  		this.allowNewServer = true;

  	}, 2000);

   }

  ngOnInit() {
  }
 
 onCreateStatus() {
 	this.serverCreated = true;
 	this.servers.push(this.serverName);
 	this.serverCreationStatus = 'the server was created'  + this.serverName ;
 }

 onUpdateServerName(event: Event){
 	//console.log(event);
 	this.serverName = (<HTMLInputElement>event.target).value;
 }
}
