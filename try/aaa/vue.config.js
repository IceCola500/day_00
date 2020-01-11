const data = require("./mock/data.json");
module.exports={
    devServer:{
        before(app){
            app.get("/maoyan",(req,res)=>{
                res.send(data)
            })
        }
    }
}