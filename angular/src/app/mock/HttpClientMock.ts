import { HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

export class HttpClientMock {
    get(
        url: string,
        options: {
            headers?:
            | HttpHeaders
            | {
                [header: string]: string | string[];
            };
            observe?: 'body';
            params?:
            | HttpParams
            | {
                [param: string]: string | string[];
            };
            reportProgress?: boolean;
            responseType: 'arraybuffer';
            withCredentials?: boolean;
        }): Observable<any> {
        return
    }
}