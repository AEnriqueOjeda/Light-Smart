import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-ejemplo2',
  templateUrl: './ejemplo2.page.html',
  styleUrls: ['./ejemplo2.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonicModule]
})
export class Ejemplo2Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/home']);
  }
}
