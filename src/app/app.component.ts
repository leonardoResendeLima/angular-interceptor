import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'interceptor';

	constructor(private httpClient: HttpClient) { }

	get() {
		this.httpClient.get("https://jsonplaceholder.typicode.com/users").subscribe(
			(data: HttpResponse<any>) => {
				console.log(data);
			},
			(error: HttpErrorResponse) => {
				console.log(error);
			}
		)
	}
}
