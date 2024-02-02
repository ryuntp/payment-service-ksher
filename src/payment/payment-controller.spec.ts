import { Test, TestingModule } from '@nestjs/testing';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { CreatePaymentRequestDto, CreatePaymentResponseDto } from './dtos/create-payment.dto';

describe('PaymentController', () => {
    let controller: PaymentController;
    let service: PaymentService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PaymentController],
            providers: [
                {
                    provide: PaymentService,
                    useValue: {
                        makePayment: jest.fn().mockImplementation(() => {
                            return {
                                code: 0,
                                msg: 'SUCCESS',
                                data: {
                                    "pay_content": "https://88233c0a-f2fa-430f-b0c2-9db06f8d0d83.mock.pstmn.io/gateway_pay"
                                },
                                message: 'SUCCESS'
                            };
                        }),
                    },
                },
            ],
        }).compile();

        controller = module.get<PaymentController>(PaymentController);
        service = module.get<PaymentService>(PaymentService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('should call makePayment on service with correct parameters', async () => {
        const mockPaymentRequest: CreatePaymentRequestDto = {
            appid: "mch30000",
            mch_order_no: "12345",
            total_fee: 100,
            fee_type: "THB",
            mch_code: "12345",
            channel_list: "truemoney",
            product_name: "12345"
        };

        const mockResponse: CreatePaymentResponseDto = {
            code: 0,
            msg: 'SUCCESS',
            data: {
                "pay_content": "https://88233c0a-f2fa-430f-b0c2-9db06f8d0d83.mock.pstmn.io/gateway_pay"
            },
            message: 'SUCCESS'
        };

        jest.spyOn(service, 'makePayment').mockReturnValueOnce(mockResponse);

        expect(service.makePayment(mockPaymentRequest)).toBe(mockResponse);
        expect(service.makePayment).toHaveBeenCalledWith(mockPaymentRequest);
    });

});
