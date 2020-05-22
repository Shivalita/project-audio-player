<?php

class PlaylistsManager
{
    private $pdo;

    public function setPdo(PDO $pdo)
    {
        $this->pdo = $pdo;
    }
    
    public function __construct(PDO $pdo)
    {
        $this->setPdo($pdo);
    }

    public function create(Playlist $playlist)
    {
        $req = $this->pdo->prepare('INSERT INTO playlists(playlist_title, user_id, playlist_image) VALUES(:playlist_title, user_id, playlist_image)');
        $req->execute(array(
            'playlist_title' => $playlist->getPlaylistTitle(),
            'user_id' => $playlist->getUserId(),
            'playlist_image' => $playlist->getPlaylistImage()
            ));

        $playlist->hydrate([
            'id' => $this->pdo->lastInsertId()
        ]);
    }
}

?>