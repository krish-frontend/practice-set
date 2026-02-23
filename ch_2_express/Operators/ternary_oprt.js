
const age= require("readline")

const x=age.createInterface({
    input:process.stdin,
    output:process.stdout,
})

x.question("tell me your age: ", (answer)=>{answer=Number(answer)

    const y=answer>=18?"eligible age for drive": "minor age"
    console.log(y) 

x.close
})