function passwordGuess(input){

    let tryPass = input[0];
    let password = 's3cr3t!P@ssw0rd'

    if (tryPass === password ){
        console.log('Welcome')
    }else{
        console.log('Wrong password!')
    }
    
}
passwordGuess(['qwerty'])