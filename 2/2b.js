function sevenRandomNumbers() {
    var arr = [];
while(arr.length < 8){
    var r = Math.floor(Math.random() * 10) ;
    if(arr.indexOf(r) === -1) arr.push(r);
}
return arr;
}
 console.log(sevenRandomNumbers())