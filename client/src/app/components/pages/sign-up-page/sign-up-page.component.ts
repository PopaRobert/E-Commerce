import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { AuthService } from 'src/app/modules/core/services/auth.service';

@Component({
	selector: 'app-sign-up-page',
	templateUrl: './sign-up-page.component.html',
	styleUrls: ['./sign-up-page.component.scss'],
})
export class SignUpPageComponent implements OnInit {
	public signUpForm: FormGroup = new FormGroup({});

	constructor(
		private formBuilder: FormBuilder,
		private authService: AuthService,
	) {}

	public ngOnInit(): void {
		this.signUpForm = this.formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(6)]],
		});
	}

	public onSubmit(): void {
		if (this.signUpForm.valid) {
			this.authService
				.signUp(this.signUpForm.value.email, this.signUpForm.value.password)
				.pipe(take(1))
				.subscribe(
					response => {
						console.log(response);
					},
					error => {
						console.log(error);
					},
				);
		}
	}
}
