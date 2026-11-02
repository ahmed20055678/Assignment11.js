const authRouter=require('./app/route')
const {config}=require('dotenv')
config()
const messageRouter=require('./message/message.route')
const express=require('express')
const cors=require('cors')
const sendEmail=require('./common/servcie')
const app=express()
const {connectionDB,client}=require('./common/connection.redis')
const {connectDB}=require('./common/mongoose')
connectDB();
connectionDB();

client.set("name","ahmed")
app.use(express.json())
app.use(cors({
    origin:"*"
}))
app.use('/user',authRouter)

app.use('/users',authRouter)
app.use('/message',messageRouter)
app.use((err, req, res, next) => {

    console.log(err);
    console.log(err.errors);

    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || 'Internal Server Error'
    });
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});