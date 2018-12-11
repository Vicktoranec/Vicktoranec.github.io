import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot,
Router } from "@angular/router";
import { AuthService } from "../model/auth.service";
@Injectable()
export class AuthGuard {
constructor(private router: Router,
private auth: AuthService) { }
canActivate(route: ActivatedRouteSnapshot,
state: RouterStateSnapshot): boolean {
if (!this.auth.authenticated) {
this.router.navigateByUrl("/user/auth");
return false;
}
return true;
}
}