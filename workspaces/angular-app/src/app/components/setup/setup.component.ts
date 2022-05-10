import { Component} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ElectronIpcService } from '../../services/electron-ipc.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent {

  constructor(
		private electronIpc: ElectronIpcService,
		private translate: TranslateService
	) {}
  }