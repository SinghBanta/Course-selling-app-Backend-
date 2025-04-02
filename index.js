require('dotenv').config();
const rateLimit = require('express-rate-limit');

const express=require('express');
const app=express();
const { userRouter }=require('./routes/user');
const { courseRouter }=require('./routes/course')
const { adminRouter }=require('./routes/admin');
const mongoose=require('mongoose');

app.use(express.json());


//Apply the rate limiting middleware to all requests.
const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 1 minute
	limit: 2, // Limit each IP to 2 requests per `window` (here, per 1 minute).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})

// Apply the rate limiting middleware to all requests.
app.use(limiter);

app.use('/api/v1/user',userRouter);
app.use('/api/v1/course',courseRouter);
app.use('/api/v1/admin',adminRouter);


async function main(){
await mongoose.connect(process.env.MONGO_URL);
app.listen(3000);
console.log("Server is running on port 3000 ");
}

main();



