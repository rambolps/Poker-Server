import { Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ElectronIpcService } from '../../services/electron-ipc.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  readonly Root_URL = 'https://data.mongodb-api.com/app/data-vkrqq/endpoint/data/beta/action/find';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  posts: any;


  
  constructor(
		private electronIpc: ElectronIpcService,
		private translate: TranslateService,
    private http: HttpClient
	) {}
  
  getPosts(){
    const body =  {
      collection: "Games",
      database: "Poker-DB",
      dataSource: "Poker"
    }

    const headers = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Access-Control-Request-Headers': '*',
       'api-key': 'HN58AQaOf7qmyodaPxwWCGteaMmmQ9634521oXXCWzkw9VshHdqevEyogl7Wd0zL'
      })
    }
    
    this.posts = this.http.post(this.Root_URL,body,headers);
  }


  ngOnInit(): void {
    this.getPosts();
    console.log(this.posts)
  }
  }