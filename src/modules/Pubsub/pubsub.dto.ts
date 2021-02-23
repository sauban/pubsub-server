import { IsObject, IsString } from 'class-validator';
 
export class SubcribePubSubDto {
    @IsString()
    public topic: string;

    @IsString()
    public url: string;
}

export class PublishPubSubDto {
    @IsString()
    public topic: string;

    @IsObject()
    public data: object;
}
