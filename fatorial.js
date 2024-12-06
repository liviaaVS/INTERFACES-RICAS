function fatorial (e){
    if(e<=0) throw new Error("Number is not valid")
    for(var x = e-1; x > 0; x--){
        e = e * x
    }
    return e
}

module.exports = fatorial;

