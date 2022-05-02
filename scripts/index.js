// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


let search = async() => {
    
    let query = document.getElementById('search_input').value;

    try{
            
    let s = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`);

    let d = await s.json();
    
    console.log(d)
    append(d.articles)

    }
    catch(err){
        console.log(err)
    }


}

let append = (d) =>{

    d.forEach(({title,urlToImage})=>{
    
        let sob = document.getElementById('searchresults');

    let box=document.createElement('div');
    box.innerHTML=null;
    box.style.margin="20px"
    let f = document.createElement('p');
    f.innerText=title

    let image=document.createElement('img');
    image.src=urlToImage;
    image.style.width='100%'

    box.append(f,image);
    sob.append(box)

    })
    
}


let searchCountry = async() => {
    let c=document.querySelector('.code').value
    try{
       let s = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${c}`)
       let d = await s.json();
       console.log(d)
       append(d.articles)
       console.log(c)
    }
    catch(err){
      console.log(err)
    }
}