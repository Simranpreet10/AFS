const express = require('express');
const app = express();

app.use(express.json());

app.use("/api/users",require("./routers/userRoute"))
app.use("/api/blogs",require("./routers/blogRoute"))
app.use("/api/auth",require("./routers/auth"))
app.use("/api/like",require("./routers/like"))
app.use("/api/dislike",require("./routers/dislike"))

app.listen(4245,()=>{
    console.log("server started")
})
