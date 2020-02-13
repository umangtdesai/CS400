function* wordEmitter(sentence) {
    const words = sentence.split(" ");
    for (i = 0; i < words.length; i++) {
        yield words[i];
    }
}

const sentence = "All I know is something like a bird within her sang"
for (wordsInSent of wordEmitter(sentence)) {
    console.log(wordsInSent);
}