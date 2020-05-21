let myPlaylistBtn = document.querySelector('#myPlaylists');
myPlaylistBtn.addEventListener('click', function() {
    console.log("tu as cliqué sur le bouton playlist");
    let contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = `
    <div class="container-fluid">

        <div>
            <h3>Your playlists</h3>
            <div id="yourPlaylists"></div>
        </div>

        <div>
            <form action='apps/create-playlist.php' method='POST' enctype="multipart/form-data" id="createPlaylists">
                <div>
                    <label for='playlistTitle'>Name your new playlist :</label>
                    <input type='textarea' name='playlistTitle' id="playlistTitle" class="my-1">
                </div>

                <div>
                    <label for='playlistImage'>Choose an image for your playlist :</label>
                    <input type="file" id="playlistImage" name="playlistImage" accept=".jpg, .jpeg, .png, .gif">
                </div>

                <div>
                    <input type='submit' id="create" value='Create' class="my-1">
                </div>
            </form>
        </div>

    </div>
    `;
})

let yourPlaylists = document.querySelector('#yourPlaylists');
yourPlaylists.innerHTML = "";