

function search(){
    const name = document.getElementById('search').value
    const baseUrl = 'https://api.tvmaze.com/search/shows?q=';
    const filmes = document.getElementById('filmes');
    const url = baseUrl+name
    
    console.log(url)
    fetch(url).then(response => {
        return response.json();
    }).then(data =>{
        cleanResult() //cleanResult irá limpar toda a pesquisa feita anteriormente
        data.forEach(element => {
            const moviename = element.show.name;
            let p = document.createElement("p");
            p.innerText= moviename;
            filmes.appendChild(p);
            

            if(element.show.image){   
                const moviephoto = element.show.image.medium;
                let img = document.createElement("img");
                img.src = moviephoto;
                filmes.appendChild(img); 
            }

            const movielink = element.show.url;
            let a = document.createElement("a");
            a.href = movielink;
            let linkTexto = document.createTextNode("Descubra Mais");
            a.appendChild(linkTexto);
            filmes.appendChild(a);
            
        });
       
    })
}
function cleanResult() {
    
    const filmes = document.getElementById("filmes");
    filmes.innerHTML=""
    
    
    const search = document.getElementById("search");
    console.log(search);
    search.value = ""
    //console.log(cleanResult);

}

const movie = {
    score: "0.5",
    show: {
        name: "shrek",
        type: "animation",
    }

}


