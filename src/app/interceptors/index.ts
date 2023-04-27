import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { RetryInterceptor } from "./retry.interceptor";

export const httpInterceptorsProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor, multi: true },
];
