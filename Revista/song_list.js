//song list
let All_song = [
   {
     name: "Burning Flag - Misery",
     path: "music/1.mp3",
     img: "images/1.jpg",
     singer: "NoCopyrightSounds [NCS]"
   },
   {
     name: "Hellnomorf - Amorphus Hell",
     path: "music/2.mp3",
     img: "images/2.jpg",
     singer: "NoCopyrightSounds"
   },
   {
     name: "Invertebral - Not to Return",
     path: "music/3.mp3",
     img: "images/3.jpg",
     singer: "NoCopyrightSounds"
   },
   {
     name: "Rebelion - Una Nueva Historia ",
     path: "music/4.mp3",
     img: "images/4.jpg",
     singer: "NoCopyrightSounds"
   },
   {
     name: "K Libre - Pasa La Peste",
     path: "music/5.mp3",
     img: "images/5.jpg",
     singer: "NoCopyrightSounds"
   },
   {
    name: "Damage Device - Cabra, Cabrão",
    path: "music/6.mp3",
    img: "images/6.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "Horrific - La Ley del Diablo",
    path: "music/7.mp3",
    img: "images/7.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "Historias Nórdicas de la Abuela Vikinga - Cataclismo",
    path: "music/8.mp3",
    img: "images/8.jpg",
    singer: "NoCopyrightSounds"
    },
{
    name: "Liliumdust - Inner Child",
    path: "music/9.mp3",
    img: "images/9.jpg",
    singer: "NoCopyrightSounds"
   },
{
    name: "Other Brain - Long Life The King",
    path: "music/10.mp3",
    img: "images/10.jpg",
    singer: "NoCopyrightSounds"
    },
{
    name: "Scarlett - Rise Of The Tyrant Empire",
    path: "music/11.mp3",
    img: "images/11.jpg",
    singer: "NoCopyrightSounds"
    },
{
    name: "Spell of Niriti - Chronicles Of Life And Death",
    path: "music/12.mp3",
    img: "images/12.jpg",
    singer: "NoCopyrightSounds"
    },
{
    name: "Notoken - Paraiso de la Oferta",
    path: "music/13.mp3",
    img: "images/13.jpg",
    singer: "NoCopyrightSounds"
    },
{
    name: "Feeling Worthless - Autoestima Cero",
    path: "music/14.mp3",
    img: "images/14.jpg",
    singer: "NoCopyrightSounds"
    },
{
    name: "Soulburner - Fade Away",
    path: "music/15.mp3",
    img: "images/15.jpg",
    singer: "NoCopyrightSounds"
    },
{
    name: "Proaresis - Propios y Extraños",
    path: "music/16.mp3",
    img: "images/16.jpg",
    singer: "NoCopyrightSounds"
    },
{
    name: "Inluminus - The Curse and the Beast",
    path: "music/17.mp3",
    img: "images/17.jpg",
    singer: "NoCopyrightSounds"
    },
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/