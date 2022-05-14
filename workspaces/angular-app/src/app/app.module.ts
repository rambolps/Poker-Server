import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MutiplesComponent } from './components/mutiples/mutiples.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SetupComponent } from './components/setup/setup.component';
import { GameComponent } from './components/game/game.component';
import { WaitroomComponent } from './components/waitroom/waitroom.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
	declarations: [AppComponent, MutiplesComponent, SetupComponent, GameComponent, WaitroomComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		ReactiveFormsModule,
		TranslateModule.forRoot({
			defaultLanguage: 'en',
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			},
		}),
		BrowserAnimationsModule,
		NbThemeModule.forRoot({ name: 'cosmic' }),
		NbLayoutModule,
		NbEvaIconsModule,
		NbButtonModule,

	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
