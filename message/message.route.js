const authcontroller = require('./message.controller');
const auth = require('../common/auth');

const { createMessageSchema } = require('../val');
const { signup } = require('../common/valdtion');

const { Router } = require('express');
const multerLocal = require('../common/multer');
const { Multer_Enum } = require('../common/multer.enum');

const messageRouter = Router();


// createMessage
messageRouter.post(
    '/creat-message',
    multerLocal({
        custpath: "messages",
        custtype: Multer_Enum.images
    }).array("atthments"),
    signup(createMessageSchema),
    authcontroller.createMessage
);


// getMessages
messageRouter.get(
    '/get-messages',
    auth,
    authcontroller.getMessages
);


// getMessageById
messageRouter.get(
    '/get-message/:id',
    auth,
    authcontroller.getMessageById
);


// deleteMessage
messageRouter.delete(
    '/delete-message/:id',
    auth,
    authcontroller.deleteMessage
);


module.exports = messageRouter;