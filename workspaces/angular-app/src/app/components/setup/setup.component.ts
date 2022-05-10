import { Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ElectronIpcService } from '../../services/electron-ipc.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit{

  Root_URL = 'https://poker-game-af21a-default-rtdb.firebaseio.com/Games'
  Auth_URL = '.json?auth=qkqbLjLfNE2euq5dRvw9Vc43oxZtpUxcEtE3O7Cc'


  constructor(
		private electronIpc: ElectronIpcService,
		private translate: TranslateService,
    private http: HttpClient
	) {
  }
  
  ngOnInit(): void {
    this.makeGame();
  }

  makeGame(){

    const body = {
      id : 1,
      BigBlind : 1,
      SmallBlind : 2,
      Winner : 0,
      Pot : 10000,
      Players : 
        [{
          Name : "Rayn",
          Bet : 500,
          Cards : 102203,
          Money : 1000 
        },
        {
          Name: "Darren",
          Bet : 400,
          Cards : 103303,
          Money : 2000 
        }
      ],
      Turn : 1,
      Playing: true 
    }


    this.http.post(this.Root_URL+this.Auth_URL,JSON.stringify(body));

    console.log("Ran: " + this.Root_URL+this.Auth_URL)
  }


  }