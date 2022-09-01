const app=require("./app");
const dotenv=require("dotenv");
const connectDatabase=require("./config/database");

// Handling Uncaught error Exception
process.on("uncaughtException",err=>{
    console.log(`Error: `,err.message);
    console.log("Shutting down server due to uncaught exception")
    process.exit(1);
    
})

//Config
dotenv.config({path:"./backend/config/config.env"});

//Database Connection call
connectDatabase();

const server= app.listen(process.env.PORT,()=>{
    console.log('Server working on http://localhost:'+process.env.PORT);
}
);

//Unhandled Promise Rejection
process.on("unhandledRejection",err=>{
    console.log(`Error: `,err.message);
    console.log("Shutting down server due to Unhandled Promise rejection")
    server.close(()=>{
        process.exit(1);
    })
})