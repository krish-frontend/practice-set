
//otp generator

function otpgenerator(){
    let otp = Math.floor(10000+Math.random()*90000);

    // for(let i=0;i<6;++i){
    // otp+=Math.floor(Math.random()*10)}

    console.log(otp)
}

otpgenerator()