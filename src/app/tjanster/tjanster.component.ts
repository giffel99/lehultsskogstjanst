import { Component } from '@angular/core';

@Component({
  selector: 'app-tjanster',
  templateUrl: './tjanster.component.html',
  styleUrls: ['./tjanster.component.scss'],
})
export class TjansterComponent {
  services: string[] = [
    'Vatten och avlopp',
    'Dammar',
    'Dikning',
    'Skogsvägar',
    'Tomtplantering',
    'Trädgårdsmurar',
    'Husgrunder',
    'Dränering',
    'm.m.',
  ];
}
