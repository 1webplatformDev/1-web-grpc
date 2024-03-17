import { Controller, Inject } from '@nestjs/common';
import { SqlService } from "./sql.service";
import { GrpcMethod } from "@nestjs/microservices";
import {
    FunctionRunParamsRb,
    FunctionRunReturnRb,
    SQL_LIST_METHOD,
    SQL_SERVICE_NAME
} from "./sql.pb";

@Controller()
export class SqlController {
    @Inject(SqlService)
    private sqlService: SqlService;

    @GrpcMethod(SQL_SERVICE_NAME, SQL_LIST_METHOD.FUNCTION_RUN)
    functionRun(payload: FunctionRunParamsRb): FunctionRunReturnRb {
        console.log(payload);
        return this.sqlService.functionRun(payload.name);
    }
}