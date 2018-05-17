const express=require("express")
const path=require("path")
const app=express()
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
//app.use("/api",require("./routes/courses"))
app.use('/',express.static(path.join(__dirname,'public')))
app.use("/api/courses",require("./routes/courses"))
app.use("/api/students",require("./routes/students"))
app.use("/api/teachers",require("./routes/teachers"))
app.use("/api/subjects",require("./routes/subjects"))
app.use("/api/batches",require("./routes/batches"))
app.use("/api/lectures",require("./routes/lectures"))
let PORT = process.env.PORT || 5678;
app.listen(PORT, () => console.log('Server started at http://localhost:5678'))
