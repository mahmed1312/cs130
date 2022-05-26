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
//this code get tracks based on term and prints to screen
        fetch(baseURL + "?type=track&limit=5&q="+ `${term}`)
        .then(response => response.json())
        .then(tracks =>{

             console.log(tracks);
             document.querySelector('#tracks').innerHTML =  ``;
             document.querySelector('button').addEventListener("click", handleTrackClick);
             if(tracks.length===0){
                document.querySelector('#tracks').innerHTML =  `<p>No tracks for "${term}"</p>`;
             }

            
            for (const track of tracks){
               
                    document.querySelector('#tracks').innerHTML +=  `<button class="track-item preview" data-preview-track="${track.preview_url}" data-preview-img ="${track.album.image_url}" h21 ="${track.name}" p1="${track.artist.name}" >
                    <img id=im src="${track.album.image_url}" alt ="${track.name}">
                    <i class="fas fa-play play-track" aria-hidden="true"></i>
                    <div class="label">
                        <h2>${track.name}</h2>
                        <p>
                            ${track.artist.name}
                        </p>
                    </div>
                    </button>`;

                   
               
            }

            var buttons = document.querySelectorAll("button");
        
            for(var b of buttons){
                 
                b.addEventListener("click", handleTrackClick);
            }

        // var pic = document.querySelectorAll("#im");
        //   for(var i of pic){
                 
        //         i.addEventListener("click", footer(i));
               
        //     }
            
              

        })
     

};

const getAlbums = (term) => {
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);

        fetch(baseURL + "?type=album&q="+ `${term}`)
        .then(response => response.json())
        .then(albums =>{

             console.log(albums);
             document.querySelector('#albums').innerHTML =  ``;
             if(tracks.length===0){
                document.querySelector('#albums').innerHTML =  `<p>No albums for "${term}"</p>`;
             }
            
            
            for (const album of albums){
                    document.querySelector('#albums').innerHTML +=  ` <section class="album-card" id="${album.id}">
                    <div>
                        <img src="${album.image_url}" alt="${album.name}" >
                        <h2>${album.name}</h2>
                        <div class="footer">
                            <a href="${album.spotify_url}" target="_blank">
                                view on spotify
                            </a>
                        </div>
                    </div>
                </section>`;
        
            }

        })




};

const getArtist = (term) => {

    console.log(`
    get albums from spotify based on the search term
    "${term}" and load them into the #artist section 
    of the DOM...`);

    
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
       <img src= "${results[0].image_url}" alt="${results[0].name}">
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
    



};

const handleTrackClick = (ev) => {
    
    let a = ev.currentTarget;
    console.log(a);
    console.log ("track clicked");
    let previewUrl = a.getAttribute('data-preview-track');
    audioPlayer.setAudioFile(previewUrl);
    audioPlayer.play();

  console.log();
  var imgsrc = a.getAttribute('data-preview-img');
  var heder = a.getAttribute('h21');
  var peder = a.getAttribute('p1');

 document.querySelector('#current-track').innerHTML = 
 `
 <img src="${imgsrc}" alt="${heder}" >
 <i class="fas play-track fa-pause" aria-hidden="true"></i>
 <div class="label">
     <h2>${heder}</h2>
     <p>
     ${peder}
     </p>
     `

    
};


document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};

