import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Tech } from '../../models/tech-icon-model';

@Component({
  selector: 'app-tech-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-icon.html',
  styleUrl: './tech-icon.css',
})
export class TechIcon {

  
  @Input({ required: true }) name!: Tech;
  @Input() size = 24;
}
