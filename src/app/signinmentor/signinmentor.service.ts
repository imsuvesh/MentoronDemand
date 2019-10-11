
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignInMentorM} from './signinmentor.model';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class signinmentorService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8883/mentor/';
  //private userUrl = '/api';
  public authenticate(username,password)
  {
    return this.http.get<SignInMentorM>(this.userUrl+username+"/"+password);
  }

}
