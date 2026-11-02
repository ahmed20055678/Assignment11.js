const message = require("../common/message.model");

const findById = async (id) => {
    return await message.findById(id);
};

const createMessage = async (data) => {
    return await message.create(data);
};

const findByIdwithoutpassword = async (id) => {
    return await message.findById(id);
};

const findAndUpdate = async (id, updateQuery) => {
    return await message.findByIdAndUpdate(
        id,
        { $set: updateQuery },
        { new: true, runValidators: true }
    );
};

// getMessages
const getMessages = async (filter) => {
    return await message.find(filter);
};

// getMessageById
const getMessageById = async (filter) => {
    return await message.findOne(filter);
};

// deleteMessage
const deleteMessage = async (filter) => {
    return await message.deleteOne(filter);
};

module.exports = {
    createMessage,
    findById,
    findByIdwithoutpassword,
    findAndUpdate,
    getMessages,
    getMessageById,
    deleteMessage
};