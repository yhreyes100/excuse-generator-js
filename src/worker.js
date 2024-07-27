function newExcuse() {
    let who = ["The dog", "My grandma", "The mailman", "My bird"];
    let action = [" ate", " peed", " crushed", " broke"];
    let what = [" my homework", " my phone", " the car"];
    let when = [
      " before the class",
      " when I was sleeping",
      " while I was exercising",
      " during my lunch",
      " while I was praying"
    ];
    var r =
      who[Math.floor(Math.random() * who.length)] +
      action[Math.floor(Math.random() * action.length)] +
      what[Math.floor(Math.random() * what.length)] +
      when[Math.floor(Math.random() * when.length)];
    postMessage(r);
    setTimeout("newExcuse()", 700);
  }
  newExcuse();