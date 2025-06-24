import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./ui/navbar/navbar";
import { Footer } from "./ui/footer/footer";
import { Body } from "./pages/body/body";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar,  Footer, Body],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'project';
}
