import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../model/user";
import { Observable } from "rxjs";
import { FormDataSearchParameters } from "../model/form-data-search-parameters";
import { FormDataSearchResult } from "../model/form-data-search-result";

@Injectable()
export class ApiService {
    constructor(private http: HttpClient) { }

    submitForm(user: User): Observable<any> {
        return this.http.post("/api/form/submit", user);
    }

    searchFormData(searchParams: FormDataSearchParameters): Observable<FormDataSearchResult> {
        return this.http.post<FormDataSearchResult>("/api/form/get", searchParams);
    }
}
