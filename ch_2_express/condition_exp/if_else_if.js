
const a=require("readline")

const age=a.createInterface({
    input: process.stdin,
    output: process.stdout
})

age.question("what is your age: ", (answer)=>{answer=Number(answer)

    if (answer<0){
        console.log("please grow up")
    }
    else if(answer>0 && answer<14){
        console.log("prepare yourself for voting")
    }
    else if(answer>=14 && answer<18){
        console.log("ready your docx for participate for voting")
    }
    else if(answer<65){
        console.log("citizens choose your leader")
    }

    else{
        console.log("your are senior citizen")
    }

    age.close()
})