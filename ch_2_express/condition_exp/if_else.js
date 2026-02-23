
const a=require("readline")         // input way to take

const rl=a.createInterface({        // make a bridge to communicate both side keybard input and terminal output
    input: process.stdin,           // keyboard
    output: process.stdout          // terminal 
})

rl.question("what is your age: ", (answer)=>{answer=Number(answer)      // question : "... " , ans--> number string etc


if (answer>=18){                                                        // logic building
    console.log("Eligible for vote")
}
else{
    console.log("not Eligible for vote")
}

rl.close()

})

// console.log(typeof a)