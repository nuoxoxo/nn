import { describe } from "node:test"
import { Test } from "@nestjs/testing"
import { AppModule } from "src/app.module";

describe('app e2e', () => {

  beforeAll(async () => {
    const module_ref = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()
  });
  it.todo('hello test')
})