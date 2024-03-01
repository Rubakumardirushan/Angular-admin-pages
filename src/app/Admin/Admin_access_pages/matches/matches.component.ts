import { Component, OnInit } from '@angular/core';
import { AuthuserviceService } from '../../../services/authuservice.service';
import { CommonModule ,} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.css'
})
export class MatchesComponent implements OnInit {
Mathcform!: FormGroup;
massages: string = '';
  teamname: string[] = [];
constructor(private auth: AuthuserviceService, private fb:FormBuilder) { }

ngOnInit(): void {
    this.auth.getteamname().subscribe((data: any) => {

this.teamname = data;
    })
this.Mathcform = this.fb.group({
TeamA:new FormControl('',[Validators.required]),
TeamB:new FormControl('',[Validators.required]),
startdate:new FormControl('',[Validators.required]),
enddate:new FormControl('',[Validators.required]),

})


}
creatematch(){
console.log(this.Mathcform.value);
this.auth.creatematch(this.Mathcform.value.TeamA,this.Mathcform.value.TeamB,this.Mathcform.value.startdate,this.Mathcform.value.enddate).subscribe((data: any) => {


  this.massages = data.message;
})

}


}
