import { Routes } from '@angular/router';
import { LoginComponent } from './Admin/login/login.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { authGuard } from './Gurds/auth.guard';
import { loginGuard } from './Gurds/login.guard';
import { TeamsComponent } from './Admin/Admin_access_pages/teams/teams.component';
import { PlayersComponent } from './Admin/Admin_access_pages/players/players.component';
import { MatchesComponent } from './Admin/Admin_access_pages/matches/matches.component';
export const routes: Routes = [
  {
    path: 'admin',
    component: LoginComponent,
    canActivate: [loginGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  {
    path: 'addteam',
    component: TeamsComponent,
     canActivate: [authGuard],
  },
  {
    path: 'addplayer',
    component: PlayersComponent,
     canActivate: [authGuard],
  },{
    path:'addmatch',
    component:MatchesComponent,
      canActivate: [authGuard],
  }
];
