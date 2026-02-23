
const x=require("readline")

const y=x.createInterface({
    input:process.stdin,
    output:process.stdout,
})

y.question("Tell me any natural number: ",(answer)=>{answer=Number(answer);

    let sum=0;
    for (let i=0; i<answer; i++){
        sum+=(i+1)
    }
    console.log("user input"+answer+ "| sum of nth number"+ sum)

y.close();
})