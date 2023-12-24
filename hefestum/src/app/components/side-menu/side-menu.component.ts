import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  constructor(private primengConfig: PrimeNGConfig) {}
  sidebarVisible: boolean = true;
  ngOnInit() {
    this.primengConfig.ripple = true;
}
}
