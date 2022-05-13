let results;

const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const getTracks = (term) => {
    console.log(`
        get tracks from spotify based on the search term
        "${term}" and load them into the #tracks section 
        of the DOM...`);

       
};

const getAlbums = (term) => {
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);

};

const getArtist = (term) => {
    
        fetch(baseURL + "?type=artist&q="+ `${term}`)
        .then(response => {
           return response.json()
        })
        .then(doStuff);


    
};

const doStuff = (data) =>{

     console.log(data);
     if(data.length === 0){
        document.getElementById('artist').innerHTML ="<div> no artist </div>";
        document.getElementById('artist').innerHTML = `<section class="artist-card">
        <div>
          <img src= "nf.png" alt="no"/>
         <h2> Artist Not Found </h2>
         </div>`
  
    
    }

     results = data;

   document.getElementById('artist').innerHTML = `<section class="artist-card" id="${results[0].id}">
   <div>
       <img src= "${results[0].image_url}" >
       <h2>${results[0].name}</h2>
       <div class="footer">
           <a href="${results[0].spotify_url}" target="_blank">
               view on spotify
           </a>
       </div>
   </div>
</section>`;



    console.log(results[0]);
    console.log(results.length);
    



}

const handleTrackClick = (ev) => {
    const previewUrl = ev.currentTarget.getAttribute('data-preview-track');
    console.log("cock"+previewUrl);

  

    //document.querySelector('#gallery').innerHTML="";
 
}

document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};