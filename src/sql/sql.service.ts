import { Injectable } from '@nestjs/common';

@Injectable()
export class SqlService {
    functionRun(name: any): any {
        return { d: name }
    }
}
