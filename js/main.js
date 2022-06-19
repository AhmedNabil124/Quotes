var Quotes = [
    {quote:"“Be yourself; everyone else is already taken.”",
     author:'-- Oscar Wilde'
    },
    {quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
     author:'― Albert Einstein'
    },
    {quote:"“So many books, so little time.”",
     author:'-- Oscar Wilde'
    },
    {quote:"“A room without books is like a body without a soul.”",
     author:'― Marcus Tullius Cicero'
    },
    {quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
     author:'― Bernard M. Baruch'
    },
    {quote:"“You only live once, but if you do it right, once is enough.”",
     author:'― Mae West'
    },
    {quote:"“In three words I can sum up everything I've learned about life: it goes on.”",
     author:'―- Robert Frost'
    }
];
function getQuote(){
    var randomQuote = Math.floor(Math.random() * Quotes.length);
    document.getElementById('quote').innerHTML = Quotes[randomQuote].quote;
    document.getElementById('author').innerHTML = Quotes[randomQuote].author;
}