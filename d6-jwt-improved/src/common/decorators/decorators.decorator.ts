import { ExecutionContext, createParamDecorator } from "@nestjs/common";

export const get_current_user_id = createParamDecorator (
  (field: undefined, context: ExecutionContext) : number => {
    const request = context.switchToHttp().getRequest()
    return request.user['sub']
    /*
    if (!field)
      return request.user
    return request.user[field]
    */
  }
)

export const get_current_user = createParamDecorator (
  (field: string | undefined | undefined, context: ExecutionContext) : number => {
    const request = context.switchToHttp().getRequest()
    if (!field)
      return request.user
    return request.user[field]
  }
)
