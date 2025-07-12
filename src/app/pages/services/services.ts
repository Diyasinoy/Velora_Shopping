import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {

 activePanel: string | null = null;

togglePanel(panelId: string) {
  if (this.activePanel === panelId) {
    this.activePanel = null;
  } else {
    this.activePanel = panelId;
  }
}
  getPanelClass(panelId: string): string {
    return this.activePanel === panelId ? 'panel active' : 'panel';
  }
}
