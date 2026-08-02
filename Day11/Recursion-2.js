// print accending numbers

function assendingNm(start, end) {
     
    if (start > end) {
        return
    }
    console.log(start);

    return assendingNm(start + 1 , end)
    
}

assendingNm(1,20)