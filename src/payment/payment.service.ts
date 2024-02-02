import { Injectable } from '@nestjs/common';
import { CreatePaymentRequestDto, CreatePaymentResponseDto } from './dtos/create-payment.dto';

@Injectable()
export class PaymentService {
  makePayment(data: CreatePaymentRequestDto): CreatePaymentResponseDto {
    // I use try catch here to simulate real-world usage
    try {
      // just return example response along with dynamic mch_order_no
      return {
        code: 0,
        msg: 'SUCCESS',
        data: {
          pay_content: `https://88233c0a-f2fa-430f-b0c2-9db06f8d0d83.mock.pstmn.io/gateway_pay/success?mch_order_no=${data.mch_order_no}`
        },
        message: 'SUCCESS'
      };
    } catch (error) {
      throw error;
    }
  }
}
