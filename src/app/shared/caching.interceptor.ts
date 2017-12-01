import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

import { HttpCache } from './http.cache';

export class CachingInterceptor implements HttpInterceptor {

	constructor(private httpCache: HttpCache) {}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		// cahce only get requests and pass rest to handler
		if(request.method !== 'GET') {
			return next.handle(request);
		}

		const cacheResponse = this.httpCache.get(request);
		if(cacheResponse) {
			return Observable.of(cacheResponse);
		}

		return next.handle(request).do(event => {
			if(event instanceof HttpResponse) {
				this.httpCache.put(request, event);
			}
		})
	}
}