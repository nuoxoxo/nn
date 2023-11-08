import { ExecutionContext, SetMetadata, createParamDecorator } from "@nestjs/common";

export const Get_current_user_id = createParamDecorator (
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

export const Get_current_user = createParamDecorator (
  (field: string | undefined | undefined, context: ExecutionContext) : number => {

    const request = context.switchToHttp().getRequest()
    if (!field)
      return request.user
    return request.user[field]
  }
)

export const Public = () => SetMetadata("isPublic", true)
// export const Public = () => {
//   return SetMetadata("isPublic", true)
// }
