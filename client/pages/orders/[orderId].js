import useRequest from '../../hooks/request';
import { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const OrderShow = ({ order, currentUser }) => {

    const [timeLeft, setTimeLeft] = useState(0);
    const { sendRequest, errors } = useRequest({
        url: '/api/payment',
        method: 'post',
        body: {
            orderId: order.id,
        },
        onSuccess: (payment) => console.log(payment)
    });

    useEffect(() => {
        const findTimeLeft = () => {
            const minutesLeft = new Date(order.expiresAt) - new Date();
            setTimeLeft(Math.round(minutesLeft / 1000));
        };
        findTimeLeft();
        const timerId = setInterval(findTimeLeft, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, [order]);



    if (timeLeft < 0) {
        return <div>Order has expired.</div>
    }

    return (<div>
        <h1>Order</h1>
        <p>The order will expire in: {timeLeft} seconds </p>
        <StripeCheckout
            token={({ id }) => sendRequest({ token: id })}
            stripeKey="pk_test_I1EtbGOWq7Ytjo2qfpBtoCj300lZyMbmCq"
            amount={order.ticket.price * 100}
            email={currentUser.email}
        />
        {errors}
    </div>)
}

OrderShow.getInitialProps = async (context, client) => {
    const { orderId } = context.query;
    const { data } = await client.get(`/api/orders/${orderId}`);
    return { order: data };
}
export default OrderShow;