// HARD CODED:
//  const generate = () => {
//   let quotes = {
//     "- Oscar Wilde":
//       '"To live is the rarest thing in the world. Most people exist, that is all."',
//     "- Emily Dickinson":
//       '"That it will never come again is what makes life so sweet."',
//     "- George Eliot": '"It is never too late to be what you might have been."',
//     "- Ralph Waldo Emerson":
//       '"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."',
//     "- Haruki Murakami": '"Pain is inevitable. Suffering is optional."',
//   };
//   let authors = Object.keys(quotes);
//   console.log(authors);
//   let author = authors[Math.floor(Math.random() * authors.length)];
//   let quote = quotes[author];

//   document.getElementById("quote").innerHTML = quote;
//   document.getElementById("author").innerHTML = author;
// }
// console.log("here");

// USING API:
const generate = async () => {
  const response = await fetch("https://api.quotable.io/quotes/random");
  const data = await response.json();

  console.log(data);

  document.getElementById("quote").innerHTML = data[0].content;
  document.getElementById("author").innerHTML = data[0].author;
};
