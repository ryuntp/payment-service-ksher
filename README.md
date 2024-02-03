# Payment-Service Test

Welcome to the Payment-Service test project! This project is built using NestJS and is intended for submitting Ksher's test.

`Please note` that I assume that all properties in the request body are required. So, If you try missing some of them, you will get an error exception.

## Live testing

You can experience the live functionality by testing it through the following URL:

[https://evening-shore-16573-9ce8b6769f53.herokuapp.com/gateway_pay](https://evening-shore-16573-9ce8b6769f53.herokuapp.com/gateway_pay)

## Test the API via URL Requests

I also create mock APIs for this. To interact with this API via URL requests, you can use the following examples:

### Successfully Make a Payment

Make a successful payment request:

**Request:**

POST https://88233c0a-f2fa-430f-b0c2-9db06f8d0d83.mock.pstmn.io/gateway_pay

**Request Body:**

```json
{
  "appid": "mch30000",

  "mch_order_no": "1234567",

  "total_fee": 100,

  "fee_type": "THB",

  "mch_code": "12345",

  "channel_list": "truemoney",

  "product_name": "12345"
}
```

### Failed Payment Cases

Test some failed payment scenarios:

1. Wrong Path:

**Request:**

POST https://88233c0a-f2fa-430f-b0c2-9db06f8d0d83.mock.pstmn.io/gateway_pays

2. Wrong HTTP Method (Should be POST):

**Request:**

GET https://88233c0a-f2fa-430f-b0c2-9db06f8d0d83.mock.pstmn.io/gateway_pay

## Test Locally

To test the API locally, follow these steps:

1. Clone this project to your local machine.

2. Navigate to the repository directory.

3. Run `yarn install` to install the project dependencies.

4. Start the application by running `yarn start`.

The application will run on port 3000 by default.

### Make a Local Request

You can make a simple request locally using the following example:

**Request:**

POST http://localhost:3000/gateway_pay

**Request Body:**

```json
{
  "appid": "mch30000",

  "mch_order_no": "1234567",

  "total_fee": 100,

  "fee_type": "THB",

  "mch_code": "12345",

  "channel_list": "truemoney",

  "product_name": "12345"
}
```

## Explore API Documentation

You can explore the API's documentation using the following URL:

http://localhost:3000/payment-service/swagger/

This API documentation provides detailed information about the available endpoint, request parameter, and response structures.

## Run Unit Tests

This project includes simple unit tests implemented using Jest.

You can run the tests to ensure the functionality of the Payment-Service.

To run the unit tests and view the coverage report, use the following command:

```shell

yarn  test:cov

```
