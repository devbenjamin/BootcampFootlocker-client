import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { EmailValidator } from "@angular/forms";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    // Authorization: localStorage.getItem("token")
  })
};
const httpOptionsAuth = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token")
  })
};
// let id = localStorage.getItem("user.id");

@Injectable()
export class AuthService {
  id = localStorage.getItem("id");
  private _loginUrl = "http://localhost:3000/user/login";
  private _signUpUrl = "http://localhost:3000/user/signup";
  private _updateUsernameUrl = `http://localhost:3000/user/${this.id}/update`;
  constructor(private http: HttpClient) {}

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, { user: user }, httpOptions);
  }

  signUpUser(user) {
    // console.log(user);
    return this.http.post<any>(this._signUpUrl, { user: user }, httpOptions);
  }

  editUsername(user) {
    // console.log("this._updateUsernameUrl:", this._updateUsernameUrl)
    return this.http.put<any>(this._updateUsernameUrl, { user }, httpOptionsAuth);
  }

  // deleteUser() {
  //   return {"hi": 1};
  // }
}
