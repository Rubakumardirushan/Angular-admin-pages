import { Component, importProvidersFrom } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthuserviceService } from '../../../services/authuservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css',
})
export class TeamsComponent {
  constructor(private http: HttpClient, private auth: AuthuserviceService) {}
  teamname: string = '';

massages: any;

  addteam() {
    console.log(this.teamname);


    this.auth.createTeam(this.teamname).subscribe((data: any) => {

      this.massages =   data.message;
    });







  }
}
