import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentRequestDto, CreatePaymentResponseDto } from './dtos/create-payment.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('/gateway_pay')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) { }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Payment successfully processed',
    type: CreatePaymentResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid payment details',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'The specified resource was not found',
  })
  makePayment(
    @Body() data: CreatePaymentRequestDto
  ): CreatePaymentResponseDto {
    return this.paymentService.makePayment(data);
  }
}
