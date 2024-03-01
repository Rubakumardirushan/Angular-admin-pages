import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { AuthuserviceService } from '../../services/authuservice.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HttpClientModule,RouterLink,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(private route: Router ,private userservice :AuthuserviceService){}
  username: string = '';
  userInfo: any;
teamname: string[] = [];
players: any[] = [];
matches: any[] = [];
   ngOnInit(): void {
    const token:any=localStorage.getItem('angular17token');

    this.userservice.getUserInfo(token)
      .subscribe(
        (data) => {
          this.userInfo = data;
          this.username = this.userInfo.user.name;
          console.log('User Info:', this.userInfo);
        },
        (error) => {
          console.error('Error fetching user info:', error);
        }
      );


this.userservice.getteamname().subscribe((data: any) => {
this.teamname = data;
})

this.userservice.getplayers().subscribe((data: any) => {

  this.players = data;
  console.log(this.players);
})


this.userservice.getmatchinfo().subscribe((data: any) => {
  this.matches = data;
  console.log(this.matches);
})



  }





  onlogout(){
    localStorage.removeItem('angular17token');
    this.route.navigate(['/admin']);

   }
   isPast(endTime: string): boolean {
    const currentTime = new Date();
    const endTimeDate = new Date(endTime);
    return endTimeDate < currentTime;
  }
  notisPast(endTime: string): boolean {
    const currentTime = new Date();
    const endTimeDate = new Date(endTime);
    return endTimeDate > currentTime;
  }

  }
