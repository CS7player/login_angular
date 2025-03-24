import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notify',
  imports: [CommonModule],
  templateUrl: './notify.component.html',
  styleUrl: './notify.component.scss'
})
export class NotifyComponent {
 @Input('ip_mdl') ip_mdl : UINotify | null = null;
}
interface UINotify {
 text: string;
 color: string;
}