import { IsInt, IsString, IsNotEmpty, Min, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePaymentRequestDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'mch30000', description: 'The application ID' })
  appid: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '12345', description: 'The merchant order number' })
  mch_order_no: string;

  @IsInt()
  @Min(0)
  @ApiProperty({ example: 100, description: 'The total fee' })
  total_fee: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'THB', description: 'The fee type or currency' })
  fee_type: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '12345', description: 'The merchant code' })
  mch_code: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'truemoney', description: 'The channel list' })
  channel_list: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '12345', description: 'The product name' })
  product_name: string;
}

class PaymentDataDto {
  @IsString()
  @ApiProperty({ example: 'https://88233c0a-f2fa-430f-b0c2-9db06f8d0d83.mock.pstmn.io/gateway_pay', description: 'The payment content URL' })
  pay_content: string;
}

export class CreatePaymentResponseDto {
  @IsInt()
  @ApiProperty({ example: 0, description: 'The response code' })
  code: number;

  @IsString()
  @ApiProperty({ example: 'SUCCESS', description: 'The message response' })
  msg: string;

  @IsObject()
  @ApiProperty({ type: PaymentDataDto, description: 'The data containing payment details' })
  data: PaymentDataDto;

  @IsString()
  @ApiProperty({ example: 'SUCCESS', description: 'The detailed message response' })
  message: string;
}
