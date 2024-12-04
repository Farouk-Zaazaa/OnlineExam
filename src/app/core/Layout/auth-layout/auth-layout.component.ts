import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SmallNavComponent } from "../../pages/small-nav/small-nav.component";

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet, SmallNavComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {

}
