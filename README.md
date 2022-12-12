# FlexMoney Intenship Assignment

## Yoga Registration Form

### The Form is divided for New Users and Existing Users

### For New User:
1. Personal Details : Name, Age, Gender, Phone, Email, Batch. After then, user is redirected to payment.
2. Payment Info : Card Holder's Name, Card Number, Expiry, CVV.
3. Request Sent to API to process payment and store the data.
4. Confirmation message shown to User.

We Store only the personal details of user, not the payment info to maintain privacy and security. The Payment Info is only used to process the payment.

### For Existing User:
1. Email and Payment Info
2. Request sent to API to process payment and update payment status and batch change.
3. Confirmation message shown to User.


### Database
After the validations and payment, we store the data to mongodb database.
Data includes name, email, gender, phone, age, Batch, Last Payment Month.
Last Payment Month tells us the last month the user paid for. It helps us to track the current users also.
Email is kept Unique to identify users.
For Existing Users, the batch and last payment month is updated after successful payment.

## Assumptions made

1. User registers one time, pays every month. So, Form divided into new users and existing users.
2. No need to store Payment Details,only used for processing.
3. CompletePayment() Mock Function currently returns true for all calls.
4. User pays for the current full month. If user pays on 15th Jan, he pays for whole Jan month and he has to again pay for Feb month.