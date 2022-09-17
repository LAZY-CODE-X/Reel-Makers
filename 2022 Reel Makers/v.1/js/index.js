const previous =  document.querySelector('#pre')
const play =  document.querySelector('#play')
const next =  document.querySelector('#next')
const title =  document.querySelector('#title')


const recent_volume =  document.querySelector('#volume')
const volume_show =  document.querySelector('#volume_show')
const slider =  document.querySelector('#duration_slider')
const show_duration =  document.querySelector('#show_duration')

// const track_image =  document.querySelector('#track_image').src = 'images/mk.png'
const track_image =  document.querySelector('img ')
const present =  document.querySelector('#present')
const total =  document.querySelector('#total')
const artist =  document.querySelector('#artist')
const lyric = document.querySelector('#lyrics')
const download_link = document.querySelector('#download-link')
const lyricsContainer = document.querySelector('.lyric-container')

// stopped at 19:23

let timer;
let autolay = 0;

let index_no = 0;
let playing_song = false;

//create the audio element 
let track = document.createElement('audio')

const all_song = [
    {
        name: "Beat it",
        path: "music/mk_beat_it.mp3",
        img: "./images/mk.jpg",
        singer: "Michael Jackson",
        lyrics: `Beat  !! Beat  !!Beat  !!Beat  !!Beat  !! Beat  !! Beat  !!Beat  !!Beat  !!Beat  !! Beat  !! Beat  !!Beat  !!Beat  !!Beat  !! Beat  !! Beat  !!Beat  !!Beat  !!Beat  !! Beat  !! Beat  !!Beat  !!
        They told him, "Don't you ever come around here"
        "Don't wanna see your face, you better disappear"
        The fire's in their eyes and their words are really clear
        So beat it, just beat it
        You better run, you better do what you can
        Don't wanna see no blood, don't be a macho man
        You wanna be tough, better do what you can
        So beat it, but you wanna be bad
        Just beat it (beat it), beat it (beat it)
        No one wants to be defeated
        Showin' how funky and strong is your fight
        It doesn't matter who's wrong or right
        Just beat it (beat it)
        Just beat it (beat it)
        Just beat it (beat it)
        Just beat it (beat it, uh)
        They're out to get you, better leave while you can
        Don't wanna be a boy, you wanna be a man
        You wanna stay alive, better do what you can
        So beat it, just beat it
        You have to show them that you're really not scared
        You're playin' with your life, this ain't no truth or dare
        They'll kick you, then they'll beat you
        Then they'll tell you it's fair
        So beat it, but you wanna be bad
        Just beat it (beat it), beat it (beat it)
        No one wants to be defeated
        Showin' how funky and strong is your fight
        It doesn't matter who's wrong or right
        Just beat it (beat it), beat it (beat it)
        No one wants to be defeated
        Showin' how funky and strong is your fight
        It doesn't matter who's wrong or right
        Just beat it (beat it, beat it, beat it)
        Beat it (beat it, beat it)
        Beat it (beat it, beat it)
        Beat it (beat it, beat it)
        Beat it (beat it, beat it)
        Beat it (beat it), beat it (beat it)
        No one wants to be defeated
        Showin' how funky and strong is your fight
        It doesn't matter who's wrong or right (who's right)
        Just beat it (beat it), beat it (beat it)
        No one wants to be defeated (no one)
        Showin' how funky and strong is your fight
        It doesn't matter who's wrong or right
        Just beat it (beat it), beat it (beat it)
        No one wants to be defeated (oh, no)
        Showin' how funky and strong is your fight
        It doesn't matter who's wrong or right
        Just beat it (beat it), beat it (beat it)
        No one wants to be defeated
        Showin' how funky and strong is your fight
        It doesn't matter who's wrong or right
        Just beat it (beat it), beat it (beat it)`
    },
    {
        name: "smooth criminal",
        path: "music/mk_smooth_criminal.mp3",
        img: "images/mk2.jpg",
        singer: "Michael Jackson",
        lyrics: `Beat  !! Beat  !!Beat  !!Beat  !!Beat  !! Beat  !! Beat  !!Beat  !!Beat  !!Beat  !! Beat  !! Beat  !!Beat  !!Beat  !!Beat  !! Beat  !! Beat  !!Beat  !!Beat  !!Beat  !! Beat 
        As he came into the window was a sound of a crescendo
        He came into her apartment, he left the bloodstains on the carpet
        She ran underneath the table, he could see she was unable
        So she ran into the bedroom, she was struck down
        It was her doom
        Annie, are you okay?
        So, Annie, are you okay? Are you okay, Annie?
        Annie, are you okay?
        So, Annie, are you okay? Are you okay, Annie?
        Annie, are you okay?
        So, Annie, are you okay? Are you okay, Annie?
        Annie, are you okay?
        So, Annie, are you okay? Are you okay, Annie?
        Annie, are you okay?
        Will you tell us that you're okay?
        There's a sound at the window
        Then he struck you, a crescendo, Annie
        He came into your apartment
        Left the bloodstains on the carpet
        And then you ran into the bedroom
        You were struck down
        It was your doom
        Annie, are you okay?
        So, Annie, are you okay? Are you okay, Annie?
        Annie, are you okay?
        So, Annie, are you okay? Are you okay, Annie?
        Annie, are you okay?
        So, Annie, are you okay? Are you okay, Annie?
        You've been hit by
        You've been hit by
        A smooth criminal
        So they came in to the out way
        It was Sunday, what a black day
        Mouth-to-mouth resuscitation
        Sounding heartbeats, intimidations
        Annie, are you okay?
        So, Annie, are you okay? Are you okay, Annie?
        Annie, are you okay? (Annie, are you okay?)
        So, Annie, are you okay? (Annie, are you okay?)
        Are you okay, Annie?
        Annie, are you okay? (Annie, are you okay?)
        So, Annie, are you okay? (Annie, are you okay?)
        Are you okay, Annie?
        Annie, are you okay?
        So, Annie, are you okay?
        Are you okay, Annie?
        Annie, are you okay?
        Will you tell us that you're okay?
        There's a sound at the window
        Then he struck you, a crescendo, Annie
        He came into your apartment
        Left the bloodstains on the carpet
        And then you ran into the bedroom
        You were struck down
        It was your doom
        Annie, are you okay?
        So, Annie, are you okay? Are you okay, Annie?
        You've been hit by
        You've been struck by
        A smooth criminal
        Annie, are you okay? (I don't know)
        Will you tell us that you're okay? (I don't know)
        There's a sound at the window (I don't know)
        Then he struck you, a crescendo, Annie (I don't know)
        He came into your apartment (I don't know)
        Left the bloodstains on the carpet (I don't know why, baby)
        And then you ran into the bedroom (help me)
        You were struck down
        It was your doom, Annie (dag gone it)
        Annie, are you okay? (Dag gone it, baby)
        Will you tell us that you're okay? (I don't know)
        There's a sound at the window (dag gone it)
        Then he struck you, a crescendo, Annie (whoo, whoo!)
        He came into your apartment (dag gone it)
        Left the bloodstains on the carpet (whoo!)
        And then you ran into the bedroom
        You were struck down (dag gone it)
        It was your doom, Annie (ow!)`
    },
    {
        name: "speechless",
        path: "music/mk_speechless.mp3",
        img: "images/mk3.jpg",
        singer: "Michael Jackson",
        lyrics: `Your love is magical
        That's how I feel
        But I have not the words here to explain
        Gone is the grace for expressions of passion
        But there are worlds and worlds of ways to explain
        To tell you how I feel
        But I am speechless
        Speechless
        That's how you make me feel
        Though I'm with you
        I am far away
        And nothing is for real
        When I'm with you
        I am lost for words
        I don't know what to say
        My head's spinning like a carousel
        So silently I pray
        Helpless and hopeless
        That's how I feel inside
        Nothing's real
        But all is possible
        If God is on my side
        When I'm with you
        I am in the light
        Where I cannot be found
        It's as though I am standing in
        The place called Hallowed Ground
        Speechless
        Speechless
        That's how you make me feel
        Though I'm with you
        I am far away
        And nothing is for real
        I'll go anywhere and do anything
        Just can to touch your face
        There's no mountain high
        I cannot climb
        I'm humbled in your grace
        Speechless
        Speechless
        That's how you make me feel
        Though I'm with you
        I am lost words
        And nothing is for real
        Speechless
        Speechless
        That's how you make me feel
        Though I'm with you
        I am lost words
        And nothing is for real
        Speechless
        Speechless
        That's how you make me feel
        Though I'm with you
        I am lost words
        And nothing is for real
        Speechless
        Your love is magical
        That's how I feel
        But in your presence I'm lost for words`
    },
    {
        name: "Thriller",
        path: "music/mk_thriller.mp3",
        img: "images/mk4.jpg",
        singer: "Michael Jackson",
        lyrics: `Beat  !! Beat  !!Beat  !!Beat  !!Beat  !! Beat  !! Beat  !!Beat  !!Beat  !!Beat  !! Beat  !! Beat  !!Beat  !!Beat
          !!Beat  !! Beat  !! Beat  !!Beat  !!Beat  !!Beat 
          Beat  !! Beat  !!Beat  !!Beat  !!Beat  !! Beat  !! Beat  !!Beat  !!Beat  !!Beat  !! Beat  !! Beat  !!Beat  !!Beat !! Beat 
          Beat  !! Beat  !!Beat  !!Beat  !!Beat  !! Beat  !! Beat  !!Beat  !!Beat  !!Beat  !! Beat  !! Beat  !!Beat  !!Beat
          It's close to midnight
        And something evil's lurking in the dark
        Under the moonlight
        You see a sight that almost stops your heart
        You try to scream
        But terror takes the sound before you make it
        You start to freeze
        As horror looks you right between the eyes
        You're paralyzed
        'Cause this is thriller, thriller night
        And no one's gonna save you from the beast about to strike
        You know it's thriller, thriller night
        You're fighting for your life inside a killer, thriller tonight, yeah
        Ooh, ooh
        You hear the door slam
        And realize there's nowhere left to run
        You feel the cold hand
        And wonder if you'll ever see the sun
        You close your eyes
        And hope that this is just imagination
        Girl, but all the while
        You hear a creature creepin' up behind
        You're out of time
        'Cause this is thriller, thriller night
        There ain't no second chance against the thing with forty eyes, girl
        Thriller, thriller night
        You're fighting for your life inside a killer, thriller tonight
        Night creatures call
        And the dead start to walk in their masquerade
        There's no escaping the jaws of the alien this time (they're open wide)
        This is the end of your life, ooh
        They're out to get you
        There's demons closin' in on every side
        They will possess you
        Unless you change that number on your dial
        Now is the time
        For you and I to cuddle close together, yeah
        All through the night
        I'll save you from the terror on the screen
        I'll make you see
        That this is thriller, thriller night
        'Cause I can thrill you more than any ghoul would ever dare try
        Thriller, thriller night
        So let me hold you tight and share a killer, thriller
        Chiller, thriller here tonight
        'Cause this is thriller, thriller night
        Girl, I can thrill you more than any ghoul would ever dare try
        Thriller, thriller night
        So let me hold you tight and share a killer, thriller, ow
        I'm gonna thrill you tonight
        Darkness falls across the land
        The midnight hour is close at hand
        Creatures crawl in search of blood
        To terrorize y'all's neighborhood (I'm gonna thrill you tonight)
        And whosoever shall be found
        Without the soul for getting down
        Must stand and face the hounds of hell
        And rot inside a corpse's shell
        I'm gonna thrill you tonight
        Thriller, ooh baby (thriller)
        I'm gonna thrill you tonight (thriller night)
        Thriller, all night, oh baby
        I'm gonna thrill you tonight
        Thriller, thriller night (oh baby)
        I'm gonna thrill you tonight
        Thriller, all night (oh baby)
        Thriller night, babe (thriller night, babe), ooh
        The foulest stench is in the air
        The funk of forty thousand years
        And grizzly ghouls from every tomb
        Are closing in to seal your doom
        And though you fight to stay alive
        Your body starts to shiver
        For no mere mortal can resist
        The evil of the thriller`
    },
    {
        name: "Bad",
        path: "music/mk_bad.mp3",
        img: "images/mk5.jpg",
        singer: "Michael Jackson",
        lyrics: `Beat  !! Beat  !!Beat  !!Beat  !!Beat  !! Beat  !! Beat  !!Beat  !!Beat  !!Beat  !! Beat  !! Beat  !!Beat  !!Beat
        Beat  !! Beat  !!Beat  !!Beat  !!Beat  !!
        Ah, your butt is mine, gon' tell you right, ah
        Just show your face in broad daylight, ah
        I'm tellin' you on who I feel, ah
        Gonna hurt your mind, don't shoot to kill
        Shamone, ah, shamone
        Lay it on me, ah, alright
        Ah, I'm givin' you on count to three, ah
        Just show your stuff or let it be, ah
        I'm tellin' you, just watch your mouth, ah
        I know your game, what you're about
        Well, they say the sky's the limit
        And to me that's really true, ah
        But, my friend, you have seen nothin'
        Just wait 'til I get through
        Because I'm bad, I'm bad, shamone (bad, bad, really, really bad)
        You know I'm bad, I'm bad (bad, bad)
        You know it (really, really bad)
        You know I'm bad, I'm bad (bad, bad)
        Shamone, you know (really, really bad)
        And the whole world has to answer right now
        Just to tell you once again
        Who's bad?
        The word is out, you're doin' it wrong, ah
        Gon' lock you up before too long, ah
        Your lyin' eyes gon' tell you right, ah
        So listen up, don't make a fight, ah
        Your talk is cheap, you're not a man, ah
        You're throwin' stones to hide your hands
        Well, they say the sky's the limit
        And to me that's really true, ah
        But, my friend, you have seen nothin'
        Just wait 'til I get through
        Because I'm bad, I'm bad, shamone (bad, bad, really, really bad)
        You know I'm bad, I'm bad (bad, bad)
        You know it (really, really bad)
        You know I'm bad, I'm bad (bad, bad)
        You know it, you know (really, really bad)
        And the whole world has to answer right now
        Just to tell you once again
        Who's bad?
        We can change the world tomorrow
        This could be a better place, ah
        If you don't like what I'm sayin'
        Then won't you slap my face?
        Because I'm bad, I'm bad, shamone (bad, bad, really, really bad)
        You know I'm bad, I'm bad (bad, bad)
        You know it (really, really bad)
        You know I'm bad, I'm bad (bad, bad)
        You know it, you know (really, really bad)
        And the whole world has to answer right now (hoo, hoo)
        Just to tell you once again (hoo)
        You know I'm bad, I'm bad, shamone (bad, bad, really, really bad)
        You know I'm bad, I'm bad (bad, bad)
        You know it, you know it (really, really bad)
        You know, you know (bad, bad)
        You know, shamone (really, really bad)
        And the whole world has to answer right now
        Just to tell you once again
        You know I'm smooth, I'm bad, you know it (bad, bad, really, really bad)
        You know I'm bad, I'm bad (bad, bad, really, really bad)
        You know, you know, you know it, come on (bad, bad, really, really bad)
        And the whole world has to answer right now (hoo)
        Just to tell you once again (hoo)
        You know I'm bad, I'm bad, you know it (bad, bad, really, really bad)
        You know I'm bad, you know, woo (bad, bad, really, really bad)
        You know I'm bad, I'm bad (bad, bad)
        You know it, you know (really, really bad)
        And the whole world has to answer right now
        Just to tell you once again
        Who's bad?`
    },
]


// all functions
 
// console.log(track_img);


// function load_track
const load_track = (index_no) => {
    track.src = all_song[index_no].path;
    title.innerHTML = all_song[index_no].name;
    artist.innerHTML = all_song[index_no].singer
    track_image.src = all_song[index_no].img;
    lyric.innerText = all_song[index_no].lyrics
    track.load()

    total.innerHTML = all_song.length
    present.innerHTML = index_no + 1

    timer = setInterval(range_slider , 1000)
}
load_track(index_no);






//check if the song is playing
const justplay = () =>{
    if (playing_song == false) {
        playsong()
    }else{
        pausesong()
    }
}

//play the music
const playsong = () => {
    track.play()
    playing_song = true;
    play.innerHTML = '<span class="material-symbols-outlined">pause_circle</span>'
}


// [pause the music]
const pausesong = () =>{
    track.pause()
    playing_song = false;
    play.innerHTML = '<span class="material-symbols-outlined">play_circle</span>'
}


// next song
const next_song = () =>{
    if (index_no < all_song.length - 1) {
        index_no += 1;
        load_track(index_no);
        playsong()
    }else{
        index_no = 0;
        load_track(index_no)
        playsong()
    }
}

//prev song
const previous_song = () =>{
    if (index_no > 0) {
        index_no --;
        load_track(index_no)
        playsong()
    }else{
        index_no = all_song.length
        load_track(index_no)
        playsong()
    }
}

// change volume
const volume_change = () => {
    volume_show.innerHTML = recent_volume.value
    track.volume = recent_volume.value / 100
}

//change slider position
function change_duration() {
    slider_position = track.duration * (slider.value / 100)
    track.currentTime = slider_position
}
function range_slider() {
    let position = 0;
    
    //update slider position
    if (!isNaN(track.duration)) {
        position = track.currentTime * (100 / track.duration)
        slider.value = position
    }
}


const download = () =>{
    // e.preventDefault()
    var current_path = track.src = all_song[index_no].path;
    load_track(index_no)
    pausesong()
    playsong()
    download_link.href = current_path
    download_link.setAttribute('download', '')
    console.log('Downloading...');
}



// disply lyrics function
const display_lyrics = () =>{
    lyricsContainer.classList.toggle('show')
    pagescroll()

    // console.log(lyricsContainer);
}

const pagescroll = () => {
    lyricsContainer.scrollBy(0, 1)
    scrolldelay = setTimeout(pagescroll, 300)
}