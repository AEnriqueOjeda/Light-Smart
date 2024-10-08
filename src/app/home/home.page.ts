import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import mqtt, { MqttClient } from 'mqtt';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonicModule],
})
export class HomePage implements OnInit{
 private client : MqttClient | null = null;
  constructor(private router: Router) {}
  
ngOnInit() {
  this.client = mqtt.connect('url');

  this.client.on('connect', () => {
    this.client?.subscribe("Nombredeltema", (err) => {
      if (!err) {
        console.log('Subscribed to topic');
      } else {
        console.log('Error subscribing to topic');
      }
    })
  });

  this.client.on('message', (topic, message) => {
    if (topic === "Nombredeltema"){
      const msg = message.toString();
    } 
  })
  this.client.on("error", (error) => {
    console.log("Conección erronea en Home", error)
  })
  this.client.on("close", ()=>{
    console.log("Conección cerrada en Home");
    
  })
}

  gotoPage(){
    this.client?.end();
    this.router.navigate(['/ejemplo2']);
  }

  gotoUser() {
    this.router.navigate(['/user']);  // Asegúrate de que '/user' sea una ruta válida
  }

  gotoSettings() {
    this.router.navigate(['/settings']);  // Asegúrate de que '/settings' sea una ruta válida
  }

  gotoFaculties() {
    this.router.navigate(['/faculties']);  // Asegúrate de que '/faculties' sea una ruta válida
  }
}