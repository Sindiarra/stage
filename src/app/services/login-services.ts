import { Utilisateurs } from '../modules/administrations/models-admin/Utilisateurs/Utilisateur';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users: Utilisateurs[] = [];

  loggedUser!:string;
  isloggedIn: Boolean = false;
  roles!:string;
 apiURL='http://localhost/backend_courrier';

  constructor(private http:HttpClient, private route:Router) {}
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    }),
  };



logout() {
  if (sessionStorage.getItem('identifiant')===null) {
   // this.route.navigateByUrl('login');
  }
}

  SignIn(loginForm :any){
  return this.http.post(this.apiURL+'/liste/connexion.php', loginForm);
  }

  isAdmin():Boolean{
    if (!this.roles) //this.roles== undefiened
       return false;
    return (this.roles.indexOf('ADMIN') >-1);

  }

  setLoggedUserFromLocalStorage(login : string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }

  getUserRoles(username :string){
    this.users.forEach((curUser) => {
      // if( curUser.Login == username) {
      //     this.roles = curUser.Role;
      // }
    });
  }

}
