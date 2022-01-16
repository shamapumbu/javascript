var names = ["Sham","Mule","Chawa","Eugene","Ntula","Malu","Matipa"];

function whosPaying(random) {
    var number = Math.floor(Math.random() * random.length);

    return random[number] + " is going to buy lunch today!";

}

whosPaying(names);