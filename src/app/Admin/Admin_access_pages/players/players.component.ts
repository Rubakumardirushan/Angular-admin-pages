import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthuserviceService } from '../../../services/authuservice.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent implements OnInit{
playerform!: FormGroup;
massages: any;


  teamname:string [] = [];
constructor ( private auth: AuthuserviceService ,private fb :FormBuilder) {}
ngOnInit(): void {

this.auth.getteamname().subscribe((data: any) => {

this.teamname = data;
console.log(data);

})
this.playerform = this.fb.group({
playername: new FormControl('',[Validators.required]),
playerjersey: new FormControl('',[Validators.required]),
playerposition: new FormControl('',[Validators.required]),
playerteam: new FormControl('',[Validators.required]),
playerpoints: new FormControl('',[Validators.required]),

})



}
addplayers(){
  console.log(this.playerform.value);
this.auth.addplayers(this.playerform.value.playername,this.playerform.value.playerjersey,this.playerform.value.playerposition,this.playerform.value.playerteam,this.playerform.value.playerpoints).subscribe((data: any) => {
this.massages = data.message;
})
}





}
