import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../model/user";
import { Observable } from "rxjs";

@Injectable()
export class ApiService {
    constructor(private http: HttpClient) { }

    submitForm(user: User): Observable<any> {
        return this.http.post("/api/form/submit", user);
    }
}
