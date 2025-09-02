import { PaymentDetails, PaymentResponse } from '../types';

export const processPayment = async (paymentDetails: PaymentDetails): Promise<PaymentResponse> => {
    try {
        const response = await fetch('/api/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(paymentDetails),
        });

        if (!response.ok) {
            throw new Error('Payment processing failed');
        }

        const data: PaymentResponse = await response.json();
        return data;
    } catch (error) {
        console.error('Error processing payment:', error);
        throw error;
    }
};

export const validatePaymentDetails = (paymentDetails: PaymentDetails): boolean => {
    const { cardNumber, expiryDate, cvv } = paymentDetails;
    const isValidCardNumber = /^\d{16}$/.test(cardNumber);
    const isValidExpiryDate = /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate);
    const isValidCvv = /^\d{3}$/.test(cvv);

    return isValidCardNumber && isValidExpiryDate && isValidCvv;
};