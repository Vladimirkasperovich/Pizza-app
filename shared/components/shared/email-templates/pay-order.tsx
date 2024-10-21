import React from "react";

interface EmailTemplateProps {
    orderId: number;
    totalAmount: number;
    paymentUrl: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
                                                                orderId,
                                                                totalAmount,
                                                                paymentUrl
                                                            }) => (
    <div>
        <h1>Заказ #{orderId}</h1>
        <p>Оплатите заказ на сумму {totalAmount} BYN. Перейдите <a href={paymentUrl}> по ссылке</a> для оплаты заказа.</p>
    </div>
);