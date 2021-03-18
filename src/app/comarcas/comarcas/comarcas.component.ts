import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comarcas',
  templateUrl: './comarcas.component.html',
  styleUrls: ['./comarcas.component.css'],
})
export class ComarcasComponent implements OnInit {
  constructor(private router: Router) {}

  isMaleDisabled: boolean;
  isFemDisabled: boolean;
  isAllDisabled: boolean;

  ngOnInit(): void {
    if (this.router.url.includes('General')) {
      this.isAllDisabled = true;
    } else if (this.router.url.includes('Femenino')) {
      this.isFemDisabled = true;
    } else {
      this.isMaleDisabled = true;
    }
  }

  goMale() {
    this.router.navigateByUrl('Comarcas/Masculino');
  }

  goFem() {
    this.router.navigateByUrl('Comarcas/Femenino');
  }

  goAll() {
    this.router.navigateByUrl('Comarcas/General');
  }
}
