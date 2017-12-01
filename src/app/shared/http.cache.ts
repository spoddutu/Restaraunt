import { HttpRequest, HttpResponse } from '@angular/common/http';

export abstract class HttpCache {
	abstract get(request: HttpRequest<any>): HttpResponse<any> | null;

	abstract put(request: HttpRequest<any>, response: HttpResponse<any>): void;
}