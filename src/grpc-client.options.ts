import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
        package: 'service',
        protoPath: join(__dirname, '\\sql\\sql.proto'),
        url: '0.0.0.0:50053'
    },
};