var btn =document.getElementById("btn");
var output=document.getElementById("quote")
var quotes =
[
    '“Be yourself; everyone else is already taken.”― Oscar Wilde',
    `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”― Marilyn Monroe`,
    `“So many books, so little time.”― Frank Zappa`,
    `“You only live once, but if you do it right, once is enough.”― Mae West`,
    `“A friend is someone who knows all about you and still loves you.”― Elbert Hubbard`
];

function randomquote()
{
    var randomquote=quotes[Math.floor(Math.random()*quotes.length)];
    output.innerHTML=randomquote;
}