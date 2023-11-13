import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUserDCR = createParamDecorator(
  (data: string, context: ExecutionContext) => {
    const request = context
      .switchToHttp()
      .getRequest(); // we are replacing the @Req decorator so getRequest 

    // return request.user

    const user = request.user;
    return data ? user?.[data] : user;
  },
);
