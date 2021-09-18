function countWords(sentence){
    let wordset = sentence.split(" ");
    let count =0;
    for(let word of wordset){
        // console.log(word)
        if(word.length > 1){
            count++
        }
    }
    return count;
}

const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
console.log(countWords(sentence));
