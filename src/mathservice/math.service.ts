import { Injectable, Logger } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';

@Injectable()
export class MathService {

    private client: ClientProxy;

    private logger = new Logger('MathServiceClientController');
// Normal TCP
    // constructor() {
    //     this.client = ClientProxyFactory.create({
    //         transport: Transport.TCP,
    //         options: {
    //             host:'127.0.0.1',
    //             port: 8877,
    //           },
    //     });
    // }
// USING REDIS INSTEAD
    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.REDIS,
            options: {
                url:'redis://localhost:6379',
              },
        });
    }


    public accumulate(data: number[]){
       // this.logger.log('accumulate' + data.toString()); // Log something on evry call
        return this.client.send<number, Number[]>('add', data);
    }
}
