import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../model/auth.service";
@Component({
moduleId: module.id,
templateUrl: "user.component.html"
})
export class UserComponent {
constructor(private auth: AuthService,
private router: Router) { }
logout() {
	this.auth.clear();
this.router.navigateByUrl("/");
}
}