import { AuthService } from '../auth.service';

import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

import { Observable } from 'rxjs';

@Injectable()
export class JWTGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  async canActivate(
    context: ExecutionContext,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    // token => eyJhbGciO...
    const token = request.headers.authorization.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException('error authorization');
    }

    const validToken = this.authService.verifyToken(token);

    if (validToken?.error) {
      throw new UnauthorizedException(validToken?.error);
    }
    return (request.token = token);
  }
}
