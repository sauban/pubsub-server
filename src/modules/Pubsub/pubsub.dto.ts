import { IsObject, IsOptional, IsString } from 'class-validator';
 
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
    @IsOptional()
    public data: object;
}
