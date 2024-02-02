import { Test, TestingModule } from '@nestjs/testing';
import { PaymentService } from './payment.service';
import { CreatePaymentRequestDto } from './dtos/create-payment.dto';

describe('PaymentService', () => {
    let service: PaymentService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PaymentService],
        }).compile();

        service = module.get<PaymentService>(PaymentService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('makePayment', () => {
        it('should return success message with correct data', () => {
            const paymentDto: CreatePaymentRequestDto = {
                appid: "mch30000",
                mch_order_no: "12345",
                total_fee: 100,
                fee_type: "THB",
                mch_code: "12345",
                channel_list: "truemoney",
                product_name: "12345"
            };

            const expectedResult = {
                code: 0,
                msg: 'SUCCESS',
                data: {
                    "pay_content": "https://88233c0a-f2fa-430f-b0c2-9db06f8d0d83.mock.pstmn.io/gateway_pay/success?mch_order_no=12345"
                },
                message: 'SUCCESS'
            };

            expect(service.makePayment(paymentDto)).toEqual(expectedResult);
        });
    });
});
