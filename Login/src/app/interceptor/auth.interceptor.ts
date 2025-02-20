import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Paso por el interceptor');
  const cloneRequest = req.clone({
    setHeaders: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('accessToken') || '',
    },
  });

  if (cloneRequest.url.includes('auth')) {
    return next(req);
  } else {
    return next(cloneRequest);
  }
};
