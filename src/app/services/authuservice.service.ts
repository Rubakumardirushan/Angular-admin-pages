import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthuserviceService {
  httpoptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  altertext: string = '';

  constructor(private http: HttpClient, private route: Router) {}
  isLoggedIn(username: string, password: string): boolean {
    this.http
      .post('http://127.0.0.1:8000/api/login', {
        name: username,
        password: password,
      })
      .subscribe((data: any) => {
        let token = data.token;
        localStorage.setItem('angular17token', token);
      });
    if (localStorage.getItem('angular17token') != null) {
      this.route.navigate(['/dashboard']);
      return true;
    } else {
      this.altertext = 'Invalid username or password';

      return false;
    }
  }
  getUserInfo(token: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });

    return this.http.get<any>(`http://127.0.0.1:8000/api/get`, { headers });
  }

  createTeam(Team_name: string): Observable<any> {
    const body = { Team_name: Team_name };
    return this.http.post<any>(
      'http://127.0.0.1:8000/api/addteam',
      body,
      this.httpoptions
    );
  }



  getteamname(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8000/api/teamname');

  }

  addplayers(playername: string, playerjersey: string, playerposition: string, playerteam: string, playerpoints: number): Observable<any> {
    const body = { Player_name: playername, Player_jersey_number: playerjersey, Player_role: playerposition, Player_team: playerteam, Player_points: playerpoints };
    return this.http.post<any>( 'http://127.0.0.1:8000/api/addplayer',
    body,
    this.httpoptions);
}
getplayers(): Observable<any> {
  return this.http.get<any>('http://127.0.0.1:8000/api/getplayers');
}



  creatematch(TeamA: string, TeamB: string, startdate: Date, enddate: Date): Observable<any> {

    const body = { TeamA: TeamA, TeamB: TeamB, Match_start_time: startdate, Match_end_time:enddate };
    console.log(body);
    return this.http.post<any>('http://127.0.0.1:8000/api/creatematch',body,this.httpoptions);}


    getmatchinfo(): Observable<any> {
      return this.http.get<any>('http://127.0.0.1:8000/api/getmatches')
    }

}
