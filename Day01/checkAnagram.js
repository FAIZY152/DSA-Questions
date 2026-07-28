// we have 2 strings A and B is that keywords are equal or not rreturn ans True or False 

function CheckAnagram(a,b) {
    if (a.length !== b.length) {
        return false
    }
    
    let barry = b.split("")

    for (let i = 0; i < a.length; i++) {
        let found = false

        for (let j = 0; j < barry.length; j++) {
                if (a[i] === barry[j]) {
                    found  = true
                    barry[j] = "*"
                    break
                }        

        }
        if(!found){
            return false
        }
    }
    return true
}

console.log(CheckAnagram("cat" , "tac"));

console.log(CheckAnagram("ram" , "mar"));
console.log(CheckAnagram("hell" , "hall"));

