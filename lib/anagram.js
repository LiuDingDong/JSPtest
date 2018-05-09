function anagram(str){
    // var result = []

    if(!str){
        return result
    }
    if(str.length === 1){
        return [str]
    }
    // result.push(str);
    if(str.length === 2){
        return [str[0]+str[1], str[1]+str[0]]
    }
    var result = [];
    for(var i=0;i<str.length;i++){
        for(var j=0;j<2;j++){
            result.push[str[i]+anagram[drop(str,i)][j]]
        }
    }
    
}

function drop(str,n){
    var result = ""
    for(var i=0;i<str.length;i++){
            if(i===0){
                continue
            }
            result += str[i]
        }
        return result
}

module.exports = anagram
