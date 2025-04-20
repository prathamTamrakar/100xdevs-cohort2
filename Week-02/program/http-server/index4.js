// let user1 = [{
//     name: "Pratham",
//     metadata: {
//         profilepicture: "",
//         pronouns: "he/him",
//         address: {
//             houseNo: 2019,
//             street: "kotwali"
//         }
//     }
// }]

// const user2 = {
//     name:"John",
//     kidney: {
//         healthy: false
//     }
// }

// const user3 = [user2]

// instead of 

const express = require("express")
const app = express();

app.use(express.json())

const users = [{
    name: "John",
    kidneya: [{
        healthy: false
    },{
        healthy: true
    }]
}]

app.get('/',(req,res)=>{
    const johnKidneys = users[0].kidneya;
    const numberOfKedneys = johnKidneys.length
    // console.log("There are",numberOfKedneys,"kidneys and there health is",johnKidneys);
    let numberOfHealthyKinneys = 0;
    for(let i =0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKinneys = numberOfHealthyKinneys + 1;
        }
    }
    const numberOfUnhealthyKinneys = numberOfKedneys - numberOfHealthyKinneys;
    res.json({
        numberOfKedneys,
        numberOfHealthyKinneys,
        numberOfUnhealthyKinneys
    })
})

app.post('/',(req,res)=>{
    const isHealthy = req.body.isHealthy
    users[0].kidneya.push({
        healthy: isHealthy
    })
    res.json({
        message: "done"
    })
})

app.put('/',(req,res)=>{
    for(let i=0;i<users[0].kidneya.length;i++){
        users[0].kidneya[i].healthy=true;
    }
    res.json({

    })
})

app.delete('/',(req,res)=>{
    if(isThereAtLeastOneUnhealthyKidney()){
        
        const newKidneys = [];
        for(let i =0; i<users[0].kidneya.length; i++){
            if(users[0].kidneya[i].healthy){
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneya = newKidneys;
        res.json({
            msg: "DELETE Done!"
        }); 
    }else{
        res.status(411).json({
            msg: "You have no bad Kidneys"
        });
    }
})

// only if atleast one unhealty kidney is there else return 411
function isThereAtLeastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false;
    for(let i=0; i<users[0].kidneya.length; i++){
        if(!users[0].kidneya[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}

app.listen(3000,()=>{
    console.log("Server is started on the port 3000");
    
})