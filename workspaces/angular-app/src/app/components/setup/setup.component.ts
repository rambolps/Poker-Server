import { Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ElectronIpcService } from '../../services/electron-ipc.service';
import { HttpClient} from '@angular/common/http';
import { Game, Size } from '../Game';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit{

  readonly ROOT_URL = 'https://poker-game-af21a-default-rtdb.firebaseio.com/';
  readonly Auth = '.json?auth=qkqbLjLfNE2euq5dRvw9Vc43oxZtpUxcEtE3O7Cc';
  Code = '';

  data : Observable<Game> | undefined;

  constructor(
		private electronIpc: ElectronIpcService,
		private translate: TranslateService,
    private http: HttpClient,
    private router : Router
	) {
  }
  
  ngOnInit(): void {
    console.log();
  }

  getGame() : Game{
    // eslint-disable-next-line prefer-const
    let g : Game = {};
    this.data = this.http.get<Game>(this.ROOT_URL+this.Code+this.Auth);
    this.data.forEach(x => {
      g.BigBlind = x.BigBlind;
      g.Players = x.Players;
      g.Playing = x.Playing;
      g.Pot = x.Pot;
      g.SmallBlind = x.SmallBlind;
      g.Turn = x.Turn;
      g.Winner = x.Winner;
    });

    console.log(g);
    return g;
  }

  createGame() : void {
    
    // eslint-disable-next-line prefer-const
    let sizeO: Observable<Size> = this.http.get<Size>(this.ROOT_URL+'Size'+this.Auth);
    let size = 0;
    
    sizeO.forEach(x => {
      if(x.Size != null){
        size = x.Size;
      }
    });

    console.log(size);
    if(size < 3){


      const g = {
        BigBlind: 0,
        Playing: true,
        Players: [],
        Pot: 0,
        SmallBlind: 1,
        Turn: 0,
        Winner: -1
      }

      if (size == 0) {
        this.Code = this.makeCode(3,'A');
      }
      if (size == 1) {
        this.Code = this.makeCode(3,'B');
      }
      if (size == 2) {
        this.Code = this.makeCode(3,'C');
      }

      this.http.put(this.ROOT_URL+this.Code+this.Auth, g).subscribe();
      

      size = size + 1;
      this.http.patch(this.ROOT_URL+this.Auth, {Size:size}).subscribe();

      this.router.navigate(['/wait']);
    }
    else{
      console.log('Full');
    }
    


  }

  makeCode(l : number, e : string): string {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    for (let i = 0; i < l; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text.concat(e);
  }


  }