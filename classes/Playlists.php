<?php

    class Playlist
    {
        private $id;
        private $playlistTitle;
        private $userId;
        private $playlistImage;
        public $playlistSongs = [];
    
        public function setId(int $id)
        {
            $this->id = $id;
        }
        public function getId()
        {
            return ($this->id);
        }
    
        public function setPlaylistTitle(string $playlistTitle)
        {
            $this->playlistTitle = $playlistTitle;
        }
        public function getPlaylistTitle()
        {
            return $this->playlistTitle;
        }
    
        public function setUserId(int $userId)
        {
            $this->userId = $userId;
        }
        public function getUserId()
        {
            return $this->userId;
        }
    
        public function setPlaylistImage($playlistImage)
        {
            $this->playlistImage = $playlistImage;
        }
        public function getPlaylistImage()
        {
            return $this->playlistImage;
        }

        public function setPlaylistSongs(array $playlistSongs)
        {
            $this->playlistSongs = $playlistSongs;
        }
        public function getPlaylistSongs()
        {
            return ($this->playlistSongs);
        }

        public function hydrate(array $playlistRow)
        {
            $this->setPlaylistTitle($playlistRow["playlist_title"]);

            $this->setUserId($playlistRow["user_id"]);

            $this->setPlaylistImage($playlistRow["playlist_image"]);
        }

        public function __construct(array $playlistRow)
        {
          $this->hydrate($playlistRow);
        }
    }
?>