import { ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

export class ATGuard extends AuthGuard ('Jwt') {
  // way 1
  // constructor () {
  // way 2 : ignore ATGuard on @Public handler
  constructor (private reflector: Reflector) {
    super()
  }

  canActivate(context: ExecutionContext)
  : boolean | Promise<boolean> | Observable<boolean> {

    const isPublic = this.reflector.getAllAndOverride( 'isPublic', [
      context.getHandler(),
      context.getClass()
    ])

    if (isPublic) // bypass the guard on all endpoints decorated @Public 
      return true
    return super.canActivate(context) // otherwise activate/execute the guard
  }
}