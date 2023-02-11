// const generate= document.getElementById("generate")
// generate.addEventListener("click", showquote());
// function showquote(){
//     document.getElementById("quote").innerText="Heyyyyyyy";
// }

let count=0;

var tsquotes = [
    "People haven't always been there for me, but music always has.",
    "Everybody has that point in their life where you hit a crossroads and you've had a bunch of bad days and there's different ways you can deal with it and the way I dealt with it was I just turned completely to music.",
    "I wish all teenagers can filter through songs instead of turning to drugs and alcohol.",
    "If you write, you can turn your lessons into your legacy.",
    "Why leave when you can stay, why stay if you have to go",
    "If you're horrible to me, I'm going to write a song about it, and you won't like it. That's how I operate.",
    "Just because as human beings, what we can't have is what we reply in our head over and over again before we go to sleep.",
    "I still love sparkles and grocery shopping and really old cats that are only nice to you half the time. I still love writing in my journal and wearing dresses all the time and staring at chandeliers.",
    "I love these people so much and getting to go out there to look them in the eye and tell them that is my favorite part of the night.",
    "We should love, not fall in love because everything that falls breaks.",
    "In a relationship each person should support the other; they should lift each other up.",
    "I'm not opposed to falling in love",
    "You need to be happy with yourself or you'll never be able to be happy in a relationship.",
    "Life isn't how to survive the storm, it's about how to dance in the rain.",
    "If you're lucky enough to be different, never change",
    "I never want to change so much that people can't recognize me.",
    "I’m intimidated by the fear of being average.",
    "The lesson I've learned the most often in life is that you're always going to know more in the future than you know now.",
    "And when someone apologizes to you enough times for things they'll never stop doing, I think it's FEARLESS to stop believing them. It's FEARLESS to say 'you're NOT sorry' and walk away.",
    "Being FEARLESS isn't being 100% Not FEARFUL, it's being terrified but you jump anyway...",
    "Words can break someone into a million pieces, but they can also put them back together. I hope you use yours for good, because the only words you'll regret more than the ones left unsaid are the ones you use to intentionally hurt someone.",
    "I've wanted one thing for me whole life and I'm not going to be that girl who wants one thing her whole life then gets it and complains.",
    "Just be yourself, there is no one better.",
    "Giving up doesn't always mean you're weak, sometimes you're just strong enough to let go.",
    "FEARLESS is getting back up and fighting for what you want over and over again....even though every time you've tried before you've lost.",
    "Real life is a funny thing, you know. In real life, saying the right thing at the right moment is beyond crucial. So crucial, in fact, that most of us start to hesitate, for fear of saying the wrong thing at the wrong time. But lately what I've begun to fear more that that is letting the moment pass without saying anything. I think most of us fear reaching the end of our life, and looking back, regretting the moments we didn't speak up. When we didn't say 'I love you.' When we should've said 'I'm Sorry."]

   
      
document.getElementById("generate").addEventListener("click", showquote);

function showquote(){
    let quoteNO=Math.floor(Math.random() * 25);
    console.log(quoteNO);

    document.getElementById("quote").innerText = tsquotes[quoteNO];
  };
  