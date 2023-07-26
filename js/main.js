

var Quotes = [
  {
    'quote': '"Life is what happens to us while we are making other plans."',
    'author': "— Allen Saunders"

  },
  {
    'quote':' " Doubt kills more dreams than failure ever will."',
    'author': "— Suzy Kassem"

  },
  {
    'quote': '"Life isn’t about finding yourself. Life is about creating yourself."',
    'author': "—George Bernard Shaw"
  },

  {
    'quote': '"  I hate to lose more than I love to win."',
    'author': "— Jimmy Connors"
  }, 
  {
    'quote': '"I play each point like my life depends on it."',
    'author': "— Rafael Nadal"
  },
   {
    'quote': '"Success is a journey, not a destination. The doing is often more important than the outcome."',
    'author': "— Arthur Ashe"
  }, 
  {
    'quote': '"There is no way around hard work. Embrace it. You have to put in the hours because there’s always something which you can improve."',
    'author': "— Roger Federer"
  },
  {
    'quote': '"Losing is not my enemy, fear of losing is my enemy."',
    'author': "— Nadal"
  },
  {
    'quote': '"I’d rather regret the risks that didn’t work out than the chances I didn’t take at all."',
    'author': "— Simone Biles"
  },
  {
    'quote': '"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better."',
    'author': "— Samuel Beckett"
  },

]

function generateQuote() {
var randomQuote = Math.floor(Math.random()*Quotes.length);

var quote=Quotes[randomQuote].quote;


var author=Quotes[randomQuote].author;

document.getElementById("displayQuote").innerHTML=quote;
document.getElementById("displayAuthor").innerHTML=author;
 

}

