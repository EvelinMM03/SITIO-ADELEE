document.addEventListener("DOMContentLoaded", () => {
    console.log("Página cargada correctamente");
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

const canciones = {
    album1: [
        { titulo: "Daydreamer", audio: "audio/Daydreamer.mp3", letra: "Daydreamer\nSitting on the sea\nSoaking up the sun\nHe is a real lover\nAnd making up the past and\nFeeling up his girl\nLike he's never felt a figure before\nA jaw dropper\nLooks good when he walks\nIs the subject of their talk\nHe would be hard to chase\nBut good to catch\nAnd he could change the world\nWith his hands behind his back, oh\nYou can find him sittin' on your doorstep\nWaiting for a surprise\nAnd he will feel like he's been there for hours\nAnd you can tell that he'll be there for life.\nDaydreamer\nWith eyes that make you melt\nHe lends his coat for shelter\nPlus he's there for you\nWhen he shouldn't be\nBut he stays all the same\nWaits for you\nThen sees you through\nThere's no way I\nCould describe him\nWhat I've said is\nJust what I'm hoping for\nBut I will find him sittin' on my doorstep\nWaiting for a surprise\nAnd he will feel like he's been there for hours\nAnd I can\ntell that he'll be there for life\nAnd I can tell that he'll be there for life." },
        { titulo: "Chasing Pavements", audio: "audio/Adele - Chasing Pavements.mp3", letra: "I've made up my mind\nDon't need to think it over\nIf I'm wrong, I am right\nDon't need to look no further\nThis ain't lust\nI know this is love, but\nIf I tell the world\nI'll never say enough\n'Cause it was not said to you\nAnd that's exactly what I need to do\nIf I end up with you\nShould I give up? \nOr should I just keep chasing pavements? \nEven if it leads nowhere\nOr would it be a waste? \nEven If I knew my place, should I leave it there? \nShould I give up? \nOr should I just keep chasing pavements? \nEven if it leads nowhere\nI build myself up\nAnd fly around in circles\nWaiting as my heart drops\nAnd my back begins to tingle\nFinally, could this be it, or? \nShould I give up? \nOr should I just keep chasing\npavements? \nEven if it leads nowhere\nOr would it be a waste? \nEven if I knew my\nplace, should I leave it there? \nShould I give up? \nOr should I just keep chasing\n pavements? \nEven if it leads nowhere, yeah\nShould I give up? \nOr should I just keep\nchasing pavements? \nEven if it leads nowhere\nOr would it be a waste? \nEven if I\nknew my place, should I leave it there? \nShould I give up? \nOr should I just keep on\nchasing pavements? \nShould I just keep on chasing pavements? \nOh-oh\nShould I give\nup? \nOr should I just keep chasing pavements? \nEven if it leads nowhere\nOr would it\nbe a waste? \nEven if I knew my place, should I leave it there? \nShould I give up? \nOr\nshould I just keep chasing pavements? \nEven if it leads nowhere." },
        { titulo: "Cold Shoulder", audio: "audio/Adele - Cold Shoulder.mp4", letra: "You say it's all in my head\nAnd the things I think just don't make sense\nSo where you been\nthen? Don't go all coy\nDon't turn it 'round on me like it's my fault\nSee I can see that\nlook in your eyes\nThe one that shoots me each and every time (each and every time) \nYou grace me with your cold shoulder\nWhenever you look at me I wish I was her\nYou\nshower me with words made of knives\nWhenever you look at me I wish I was her\nThese days when I see you\nYou make it look like I'm see-through\nDo tell me why you\nwaste our time\nWhen your heart ain't in it, and you're not satisfied\nYou know I know\njust how you feel\nI'm starting to find myself feeling that way too\nWhen you grace me\nwith your cold shoulder\nWhenever you look at me I wish I was her\nYou shower me with\nwords made of knives\nWhenever you look at me I wish I was her\nTime and time again, \nI play the role of fool\n(Just for you) \nEven in the daylight when you think that\n(I don't see you) \nTry to look for things I hear but our eyes never find\nThough I do know how you play\nYou grace me with your cold shoulder\nWhenever you look at me I wish I was her\nYou\nshower me with words made of knives\nWhenever you look at me I wish I was her\nYou grace me with your cold shoulder\nWhenever you look at me I wish I was her\nYou\nshower me with words made of knives\nWhenever you look at me I wish I was her." },
        { titulo: "Best for Last", audio: "audio/Best for Last.mp3", letra: "Wait, do you see my heart on my sleeve? \nIt's been there for days on end and\nIt's been\nwaiting for you to open up\nYours too baby, come on now\nI'm trying to tell you just how\nI'd like to hear the words roll out of your mouth finally\nSay that it's always been me\nThat's made you feel a way you've never felt before\nAnd I'm all you need and that you\nnever want more\nThen you'd say all of the right things without a clue\nBut you'd save\nthe best for last\nLike I'm the one for you\nYou should know that you're just a temporary fix\nThis is not rooted with you, it don't mean that much to me\nOh, just a filler in the space that happened to be free\nHow dare you think you'd get away with trying to play me, yeah\nWhy is it every time I think I've tried my hardest\nIt turns out it ain't enough? \nYou're still not\nmentioning love\nWhat am I supposed to do to make you want me properly? \nI'm taking these chances and getting nowhere\nAnd though I'm trying my hardest you go back to her\nAnd I think that I know things may never change\nI'm still hoping one day I might hear you say\nI make you feel a way you've never felt before\nAnd I'm all you need and that you never want more\nThen you'd say all of the right things without a clue\nBut you'd save the best for last\nLike I'm the one for you\nYou should know that you're just a temporary fix\nThis is not rooted with you it don't mean that much to me\nOh just a filler in the space that happened to be free\nHow dare you think you'd get away with trying to play me, yeah\nYeah, yeah\nYeah, yeah, yeah, yeah\nBut, despite the truth that I know\nI find it hard to let go and give up on you\nSeems I love the things you do\nLike the meaner you treat me, more eager I am\nTo persist with this heartbreak of running around\nAnd I will do until I'm finding myself with you\nAnd make you feel a way you've never felt before\nAnd be all you need so that you never want more\nThen you'd say all of the right things without a clue\nAnd you'll be the one for me and me, the one for you\nYeah\nYeah, yeah\nYeah\nYeah" }
    ],
    album2: [
        { titulo: "Rolling in the Deep", audio: "audio/Adele - Rolling in the Deep (Official Music Video).mp3", letra: "Aquí va la letra de Rolling in the Deep..." },
        { titulo: "Someone Like You", audio: "audio/Adele - Someone Like You (Official Music Video).mp3", letra: "Aquí va la letra de Someone Like You..." },
        { titulo: "Set Fire to the Rain", audio: "audio/Set Fire to the Rain.mp3", letra: "Aquí va la letra de Someone Like You..." },
        { titulo: "Rumour Has It", audio: "audio/Rumour Has It.mp3", letra: "Aquí va la letra de Someone Like You..." }
    ],
    album3: [
        { titulo: "Hello", audio: "audio/Adele - Hello.mp3", letra: "Aquí va la letra de Rolling in the Deep..." },
        { titulo: "When We Were Young", audio: "audio/When We Were Young.mp3", letra: "Aquí va la letra de Someone Like You..." },
        { titulo: "Send My Love", audio: "audio/Adele - Send My Love (To Your New Lover).mp3", letra: "Aquí va la letra de Someone Like You..." },
        { titulo: "Water Under the Bridge", audio: "audio/Adele - Water Under the Bridge.mp3", letra: "Aquí va la letra de Someone Like You..." }
    ],
    album4: [
        { titulo: "Easy on Me", audio: "audio//Adele - Easy On Me (Audio).mp3", letra: "Aquí va la letra de Rolling in the Deep..." },
        { titulo: "Oh My God", audio: "audio/Adele - Oh My God.mp3", letra: "Aquí va la letra de Someone Like You..." },
        { titulo: "I Drink Wine", audio: "audio/Adele - I Drink Wine (Audio).mp3", letra: "Aquí va la letra de Someone Like You..." },
        { titulo: "Can I Get It", audio: "audio/Adele - Can I Get It.mp3", letra: "Aquí va la letra de Someone Like You..." }
    ],

};

function showAlbum(albumId) {
    const albumDetails = document.getElementById("album-details");
    albumDetails.innerHTML = "";
    
    const cancionesAlbum = canciones[albumId] || [];
    if (cancionesAlbum.length === 0) {
        albumDetails.innerHTML = "<p>No hay canciones disponibles para este álbum.</p>";
        return;
    }
    
    const listaCanciones = document.createElement("ul");
    cancionesAlbum.forEach(cancion => {
        const item = document.createElement("li");
        const boton = document.createElement("button");
        boton.textContent = cancion.titulo;
        boton.onclick = () => reproducirCancion(cancion);
        item.appendChild(boton);
        listaCanciones.appendChild(item);
    });
    
    albumDetails.appendChild(listaCanciones);
    albumDetails.scrollIntoView({ behavior: "smooth" });
}

function reproducirCancion(cancion) {
    const reproductor = document.getElementById("player");
    const tituloCancion = document.getElementById("song-title");
    const letraCancion = document.getElementById("song-lyrics");
    const musicSection = document.getElementById("music");
    
    reproductor.src = cancion.audio;
    reproductor.play();
    tituloCancion.textContent = cancion.titulo;
    letraCancion.textContent = cancion.letra;
    
    musicSection.classList.remove("hidden");
    musicSection.scrollIntoView({ behavior: "smooth" });
}

function openModal(imgSrc) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-image");
    modal.style.display = "flex";
    modalImg.src = imgSrc;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

document.getElementById("toggle-button").addEventListener("click", function() {
    const bioText = document.getElementById("bio-text");
    const moreText = document.getElementById("more-text");

    if (bioText.classList.contains("expanded")) {
        // Si el texto está expandido, lo colapsamos
        bioText.classList.remove("expanded");
        moreText.classList.remove("expanded");
        this.textContent = "Ver más"; // Cambiar el texto del botón
    } else {
        // Si el texto está colapsado, lo expandimos
        bioText.classList.add("expanded");
        moreText.classList.add("expanded");
        this.textContent = "Ver menos"; // Cambiar el texto del botón
    }
});

