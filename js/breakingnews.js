
// async function getNews(keyword) {
//   let response = await fetch('https://api.breakingapi.com/news?q='+keyword+'&type=headlines&locale=en-US&api_key=A8355D7336F0410185101B260556E062')
//   let data = await response.json()

//   console.log(data)
//   document.write(data.articles[0].title)
//   for (let i = 0; i < data.articles.length; i++) {
//     document.write(data.articles[i].title)
    
//   }
//   //let marquee = document.getElementById('marque')
//   //marquee.innerText = data.articles[i].title
// }
// getNews(prompt('desired head lines'))
async function  getnews(){
  // getting the elements from html to be filled with data
  
   
  let url = 'http://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'apiKey=49930c4220cf4050a021dc4c581f54ac';
  
let data = await fetch(url)
if(data.status == 200){
   let news = await data.json()
   console.log(news)
  
news.articles.forEach(element => {
  let text = document.getElementById('text')
  
  console.log(element);
  //document.write(element.title)
  //element.title.push(text.innerText)
  
  //document.write('<marquee>'+element.title+'</marquee>')
  text.innerText +=element.title +"-|-"
   //document.getElementById("text").innerText = element.title

  // setTimeout(function() {
  //   
  // }, 5000);

});
// for (let i = 1; i < news.articles.length; i++) {
  
//   text.innerText = news.articles[i].title
  
// }
   
} 

}

getnews()
