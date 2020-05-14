let songsData = {};

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=system%20of%20a%20down", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "3c7ba1a799msh39d4063292763d0p17e532jsn54f102579552"
	}
})
.then(response => {
    if (response.ok) {
        return response.json();
    } else {
        console.log('Error : response not ok');
    }      
})
.then(results => { 
    let songs = results.data;

    for (let i = 0; i < songs.length; i++) {
        songsData[i] = { 
            'title' : songs[i].title, 
            'artist' : songs[i].artist.name, 
            'albumTitle' : songs[i].album.title, 
            'albumCover' : songs[i].album.cover, 
            'link' : songs[i].preview 
        };
        
        // songsData[i].title = songs[i].title;
        // songsData[i].artist = songs[i].artist.name;
        // songsData[i].albumTitle = songs[i].album.title;
        // songsData[i].albumCover = songs[i].album.cover;
        // songsData[i].link = songs[i].preview;

        // songsData[i].title.push(songs[i].title);
        // songsData[i].artist.push(songs[i].artist.name);
        // songsData[i].albumTitle.push(songs[i].album.title);
        // songsData[i].albumCover.push(songs[i].album.cover);
        // songsData[i].link.push(songs[i].preview);

    }
})
.catch(error => {
	console.log(error);
});


console.log(songsData);
 let stringData = JSON.stringify(songsData);
 console.log(stringData);

// function serialize(object) {
//     return JSON.stringify(object);
// }
// let stringData = serialize(songsData);
// console.log(stringData);


// for (let key in songsData) {
//     console.log(key, songsData[key]);
// }

// for (const key of Object.keys(songsData)) {
//     console.log(key, songsData[key]);
// }

// for (const [key, value] of Object.entries(songsData)) {
//     console.log(key, value);
// }

// Object.entries(songsData).forEach(
//     ([key, value]) => console.log(key, value)
// );

// $.each(songsData, function(key, value) {
//     console.log(key, value);
// });

// for (let key in songsData) {
//     if (songsData.hasOwnProperty(key)) {
//        console.log(key, songsData[key]);
//     }
// }




// fetch('./apps/test.php', {
//     method: 'POST',
//     body: stringData.json
// })
// .then(response => {
//     if (response.ok) {
//         return response.json();
//     } else {
//         console.log('Error');
//     }
// })
// .catch(error => {
//     console.error(error);
// });




