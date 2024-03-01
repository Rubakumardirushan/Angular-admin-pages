import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './Admin/login/login.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { TeamsComponent } from './Admin/Admin_access_pages/teams/teams.component';
import { MatchesComponent } from './Admin/Admin_access_pages/matches/matches.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,DashboardComponent,TeamsComponent,MatchesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dream';
}
