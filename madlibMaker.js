function madlibMakerRun() {
    let name;
    let noun;
    let verb;
    let adjective;
    let adverb;
    name = prompt("What's your name?")
    noun = prompt("Write a noun");
    verb = prompt("Write a verb");
    adjective = prompt("Write an adjective");
    adverb = prompt("Write an adverb");
    madlibMakerHeader.innerHTML = `${name}'s Madlib`;
    madlibMakerParagraph.innerHTML = `It was three days ago when I went to the ${noun}. While there I ${verb}ed in the most ${adjective} manner. I think I'll do that again ${adverb}.`;
}

madlibMakerButton.onclick = madlibMakerRun;