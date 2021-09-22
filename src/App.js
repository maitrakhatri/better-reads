import "./styles.css";
import React, { useState } from "react";

var bookHQ = {
  MustRead: [
    {
      name: "The Rudest Book Ever",
      myrating: "5/5",
      author: "Shwetabh Gangwar",
      description: "Shwetabh Gangwar is a professional problem-solver—and he’s ace at it. For the past five years, people from all over the world have contacted him with their troubles and he’s worked these out for them.In the process, he has picked up on a simple pattern: people need a set of principles and perspectives to protect them from all the unnecessary bullshit they go through. Codes to live by, essentially. ",
      link: "https://www.amazon.in/Rudest-Book-Ever-Shwetabh-Gangwar/dp/9388754433/"
    },
    {
      name: "The Crossroads of Should and Must",
      myrating: "4.5/5",
      author: "Elle Luna",
      description: "There are two paths in life: Should & Must. We arrive at this crossroads over and over again, and every day. And we get to choose. Starting out or starting over, making a career change or making a life change, the most life-affirming thing you can do is to honor the voice inside that says your have something special to give, and then heed the call and act. Many have traveled this road before. Here’s how you can, too. #choosemust An inspirational gift book for every recent graduate, every artist, every seeker, and every career change.",
      link: "https://www.amazon.in/Crossroads-Should-Must-Elle-Luna/dp/0761184880/"
    },
    {
      name: "Who moved my Cheese ?",
      myrating: "4.5/5",
      author: "Spencer Johnson",
      description: "Written by renowned author, speaker and management speaker Dr. Spencer Johnson and introduced by Kenneth Blanchard, 'Who Moved My Cheese?’ is a world famous, motivational tale shedding light on how to deal with change in an organization and as well as in personal life. It is a simple story that illustrates how people must embrace change and should adapt to new situations with open mind and motivated spirit.",
      link: "https://www.amazon.in/Who-Moved-My-Cheese-Amazing/dp/0091816971/"
    }
  ],

  NonFiction: [
    { name: "Why am I an Atheist", 
      myrating: "5/5", 
      author: "Bhagat Singh",
      description: "Bhagat Singh is a name that became synonymous with revolution in India’s struggle for independence. This young boy brought about a change in the way people thought about freedom. He was well read and fought extensively for rights – his own, his comrades’ and his countrymen’s. A discussion with a friend soon turned into a matter of self-assessment for Bhagat Singh, leading to a discourse on why he chose to be an atheist. Even in the face of death at a very young age, his uncanny observation leads to his putting forth some pertinent questions. On another occasion, he was disappointed with his father’s plea in Court for his innocence and chose to write a letter to him. This book is a collection of eighteen of his valued writings from within the walls of prison and outside it, which show us the resolve in his words, and the bravery in his acts subsequently.",
      link: "https://www.amazon.in/Atheist-Other-Works-Bhagat-Singh/dp/9387022811/"
    },
    {
      name: "IKIGAI",
      myrating: "4/5",
      author: "Francesc Miralles and Hector Garcia",
      description: "'Ikigai gently unlocks simple secrets we can all use to live long, meaningful, happy lives. Science-based studies weave beautifully into honest, straight-talking conversation you won’t be able to put down. Warm, patient, and kind, this book pulls you gently along your own journey rather than pushing you from behind.' Neil Pasricha, bestselling author of The Happiness Equation",
      link: "https://www.amazon.in/Ikigai-Héctor-García/dp/178633089X/"
    },
    { name: "Sapiens", 
      myrating: "5/5", 
      author: "Yuval Noah Harari",
      description: "What makes us brilliant? What makes us deadly? What makes us Sapiens? Yuval Noah Harari challenges everything we know about being human in the perfect read for these unprecedented times.",
      link: "https://www.amazon.in/Sapiens-Humankind-Yuval-Noah-Harari/dp/0099590085/"
    }
  ],

  PersonalFavorite: [
    { name: "Myth = Mithya", 
      myrating: "5/5",
      author: "Devdutt Pattanaik",
      description: "The story has a lucid and provocative introduction named Ancient Hindu seers knew myth as mithya. Pattanaik has explained that it would be arrogant to presume that the ancients actually assumed in 'virgin births, flying horses, talking serpents, gods with six heads and demons with eight arms'. These are symbolic presentations of the thoughts of truths that need to be conveyed. The concepts in the book are inspired by the revolutionary art, establishment of empires etc. The book is segmented into three parts decanted into the Brahma-Saraswati, Vishnu-Lakshmi and Shiva-Shakti. It features these gods or goddesses in simple and attractive prose and the reference has been taken from the Vedas and Puranas. Indeed it's an amazing collection for reader.",
      link: "https://www.amazon.in/Myth-Mithya-Decoding-Hindu-Mythology/dp/0143423320/"
    },
    { name: "Wise and Otherwise",
      myrating: "5/5", 
      author: "Sutha Murthy",
      description: "Understanding human and human nature is one of the toughest jobs .Many time what seems right and good or vice versa can be completely different if explored to proper depth. In many instance, we all come across people and forms an opinion about the people we meet without actually knowing anything about them. But hearing and learning about such instances helps us to redefine our thought process and become wiser. Sudha Murty’s book Wise and otherwise will take you to a journey across the length and breadth of India through narrations of 51 stories inspired by the extensive travels of the author herself. ",
      link: "https://www.amazon.in/Wise-Otherwise-salute-Sudha-Murty/dp/0143062220/"
    },
    {
      name: "Chanakya Neeti",
      myrating: "4.5/5",
      author: "Dr. Radhakrishnan Pillai",
      description: "The original Chanakya Neeti was written over two thousand years ago, but its brilliant verses are still applicable today because the basic quests of man remain the same—peace, prosperity and happiness.In this volume, Radhakrishnan Pillai offers a modern interpretation of Chanakya’s crisp and practical maxims in his characteristic easy-to-follow and elegant prose.Imbibe Chanakya’s wisdom to break loose from the web of troubles and create the life you desire on your terms.",
      link: "https://www.amazon.in/Chanakya-Neeti-Radhakrishnan-Pillai/dp/9388423577/"
    }
  ]
};


export default function App() {
  var [selectedGenre, setGenre] = useState("MustRead");

  function clickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>betterreads2.0 📚 </h1>
      <h2>Book recommendations by Maitra Khatri</h2>

      {Object.keys(bookHQ).map(function (genre) {
        return (
          <span onClick ={() => clickHandler(genre)} key={genre}>
            <button> {genre} </button>
          </span>
        );
      })}

      <div>

        {bookHQ.[selectedGenre].map((book) => (
          <li className = "litag" key = {book.name}>
            {" "}
            <div className = "booklist"> <h3> {book.name} </h3> </div>
            <div className = "booklist"> My Rating: <b> {book.myrating} </b> </div>
            <div className = "booklist"> Author: <b> {book.author} </b> </div>
            {/* <div className = "booklist" id= "des"> <b> Description: </b> {book.description}  </div> */}
            <div className = "booklist" id= "des"><details>
      <summary> <b> Read Description </b></summary>
      <p>{book.description}</p>
      </details></div>
            <div className = "booklist"> <a href={book.link} target="_blank"> Buy on Amazon </a></div>
          </li>
        ))}

      </div>

                 

    </div>
  );
}
