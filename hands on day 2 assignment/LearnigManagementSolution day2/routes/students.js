const stoyys=require('../makedatabase').Student
const batchstudent=require('../makedatabase').batchStudent
const routee=require('express').Router()

    routee.route("/").get((req,res)=>{
        //"/strorys":List storys
        stoyys.findAll({}).then(result=>res.json(result))
   .catch(errror=>{
res.status(412).json({msg:error.message});
        });
    })
    .post((req,res)=>{
//"/tasks" Save  new  storys
 stoyys.create(req.body).then(result=>res.json(result))
.catch(error=>{
    res.status(412).json({msg:error.message});
})
    });
   
routee.route("/:id").get((req,res)=>{
    //"tasks/1":find a  story

    stoyys.findOne({where:{ studentid :req.params.id}}).
    then(result=>{
        if(result){
            res.json(result);
        }
        else{
            res.sendStatus(404);
        }
        }
    )
    .catch(error=>{
        res.status(412).json({msg:error.message})
    })
})
.put((req,res)=>{

    //"tasks/1":update a story
    stoyys.update(req.body,{where :{studentid: req.params.id}})
    .then(result=>{stoyys.findOne({where:{studentid:req.params.id}}).then(ress=>{res.send(ress);console.log(ress)})})
    .catch(error=>res.sendStatus(412).json({msg:error.message}));

})
.delete((req,res)=>{
//"/storys/1": delete a story
stoyys
.destroy({where:{studentid:req.params.id}})
.then(result => res.sendStatus(204))
.catch(error =>{
    res.status(412).json({msg:error.message});
});
});
routee.route("/:studentid/batches").get((req, res) => {
    batchstudent.findAll({ where: { studentStudentid: req.params.studentid } }).
        then(result => {
            if (result) {
                res.json(result);
            }
            else {
                res.sendStatus(404);
            }
        }
        )
        .catch(error => {
            res.status(412).json({ msg: error.message })
        })
})
    

module.exports=routee;