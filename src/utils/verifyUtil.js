const verifyEmail =  function(email) {
    let result = false;
    if(email != ''){
        var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if(!reg.test(email)){
            result = false;
        }else{
            result = true;
        }
    }else{
        result = true;
    }
    return result;
}


const verifyPhone =  function(phone) {
    let result = false;
    if(phone != ''){
        var reg = /^1[3456789]\d{9}$/;
        if(!reg.test(phone)){
            result = false;
        }else{
            result = true;
        }
    }else{
        result = true;
    }
    return result;
}

export {verifyEmail,verifyPhone}