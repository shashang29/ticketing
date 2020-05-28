import express, { Request, Response } from 'express';
import { requireAuth, NotFoundError, currentUser, NotAuthorizedError } from '@ss-ticketing/common';
import { Order, OrderStatus } from '../models/orders';


const router = express.Router();

router.patch('/api/orders/:orderId', requireAuth,
    async (req: Request, res: Response) => {

        const order = await Order.findById(req.params.orderId).populate('ticket');

        if (!order) {
            throw new NotFoundError();
        }

        if (order.userId !== req.currentUser!.id) {
            throw new NotAuthorizedError();
        }

        order.status = OrderStatus.Cancelled;
        await order.save();
        res.send(order);
    });


export { router as deleteOrderRouter };