
const age=require("readline")

const sth=age.createInterface({
    input:process.stdin,
    output:process.stdout,
})

sth.question("what is your age: ",(answer)=>{answer=Number(answer)

    switch(answer){                                             //normal way to check 
        case (answer>=18):
            console.log("valid age")
            break
        default:
            console.log("default age")
    }
sth.close()
})

// switch(true){                                            // condition way to check 
//             case answer>=18, answer<=55:
//                 console.log("valid age")
//                 break
//             case answer<18:
//                 console.log("below age")
//                 break
//             default:
//                 console.log("default")
//             }
// sth.close()
// })