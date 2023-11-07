import { ExecutionContext, createParamDecorator } from "@nestjs/common";

export const get_current_user = createParamDecorator (
  (context: ExecutionContext) => {

  }
)