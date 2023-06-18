import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private HttpClient: HttpClient) {}

	public signUp(email: string, password: string): Observable<any> {
		return this.HttpClient.post('http://localhost:3000/signup', {
			email,
			password,
		});
	}
}
