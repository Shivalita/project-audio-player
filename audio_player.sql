-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : lun. 18 mai 2020 à 14:15
-- Version du serveur :  5.7.24
-- Version de PHP : 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `audio_player`
--

-- --------------------------------------------------------

--
-- Structure de la table `albums`
--

CREATE TABLE `albums` (
  `id` int(11) NOT NULL,
  `album_title` varchar(255) DEFAULT NULL,
  `artist_id` int(11) NOT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `release_date` date DEFAULT NULL,
  `album_image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `albums`
--

INSERT INTO `albums` (`id`, `album_title`, `artist_id`, `genre`, `release_date`, `album_image`) VALUES
(1, 'Toxicity', 1, NULL, NULL, 'https://api.deezer.com/album/5979050/image'),
(2, 'Chop Suey!', 1, NULL, NULL, 'https://api.deezer.com/album/98304/image'),
(3, 'Hypnotize', 1, NULL, NULL, 'https://api.deezer.com/album/72046/image'),
(4, 'Mezmerize', 1, NULL, NULL, 'https://api.deezer.com/album/73123/image'),
(5, 'Steal This Album!', 1, NULL, NULL, 'https://api.deezer.com/album/6883271/image'),
(6, 'System Of A Down', 1, NULL, NULL, 'https://api.deezer.com/album/6969482/image'),
(7, 'Babylon (U.S. Version)', 2, NULL, NULL, 'https://api.deezer.com/album/85469/image'),
(8, 'Ratrace (UK Single)', 2, NULL, NULL, 'https://api.deezer.com/album/365437/image'),
(9, 'Big Tings', 2, NULL, NULL, 'https://api.deezer.com/album/62000122/image'),
(10, 'Nobody (Album Version Intl Digital)', 2, NULL, NULL, 'https://api.deezer.com/album/84605/image'),
(11, 'Kill The Power', 2, NULL, NULL, 'https://api.deezer.com/album/7293847/image'),
(12, 'Roots Rock Riot (Japanese Version)', 2, NULL, NULL, 'https://api.deezer.com/album/8588136/image'),
(13, 'Shark Bites and Dog Fights', 2, NULL, NULL, 'https://api.deezer.com/album/88159732/image'),
(14, 'Roots Rock Riot', 2, NULL, NULL, 'https://api.deezer.com/album/85913702/image'),
(15, 'Union Black', 2, NULL, NULL, 'https://api.deezer.com/album/69047152/image'),
(16, 'Babylon (Revised Online Music)', 2, NULL, NULL, 'https://api.deezer.com/album/80426/image'),
(17, 'Meteora', 3, NULL, NULL, 'https://api.deezer.com/album/1346746/image'),
(18, 'Minutes to Midnight', 3, NULL, NULL, 'https://api.deezer.com/album/81817/image'),
(19, 'Hybrid Theory (Bonus Edition)', 3, NULL, NULL, 'https://api.deezer.com/album/81763/image'),
(20, 'Meteora (Bonus Edition)', 3, NULL, NULL, 'https://api.deezer.com/album/81847/image'),
(21, 'LIVING THINGS', 3, NULL, NULL, 'https://api.deezer.com/album/3666371/image'),
(22, 'Twilight Original Motion Picture Soundtrack (International Special Edition)', 3, NULL, NULL, 'https://api.deezer.com/album/467339/image'),
(23, 'One More Light', 3, NULL, NULL, 'https://api.deezer.com/album/41645391/image'),
(24, 'Transformers: Revenge Of The Fallen The Album', 3, NULL, NULL, 'https://api.deezer.com/album/356532/image'),
(25, 'A Star Is Born Soundtrack', 4, NULL, NULL, 'https://api.deezer.com/album/74434962/image'),
(26, 'Bad Romance', 4, NULL, NULL, 'https://api.deezer.com/album/423235/image'),
(27, 'The Fame', 4, NULL, NULL, 'https://api.deezer.com/album/253927/image'),
(28, 'Dance Club 2020.02', 4, NULL, NULL, 'https://api.deezer.com/album/147375132/image'),
(29, 'Joanne (Deluxe)', 4, NULL, NULL, 'https://api.deezer.com/album/14344820/image'),
(30, 'Stupid Love', 4, NULL, NULL, 'https://api.deezer.com/album/133937592/image'),
(31, 'Born This Way (International Special Edition Version)', 4, NULL, NULL, 'https://api.deezer.com/album/1075407/image'),
(32, 'The Fame Monster (International Deluxe)', 4, NULL, NULL, 'https://api.deezer.com/album/433789/image'),
(33, 'Applause', 4, NULL, NULL, 'https://api.deezer.com/album/6851673/image'),
(34, 'The Cure', 4, NULL, NULL, 'https://api.deezer.com/album/40018381/image'),
(35, 'ARTPOP', 4, NULL, NULL, 'https://api.deezer.com/album/86712972/image'),
(36, 'The Fame Monster', 4, NULL, NULL, 'https://api.deezer.com/album/433789/image'),
(37, 'A Star Is Born Soundtrack (Without Dialogue)', 4, NULL, NULL, 'https://api.deezer.com/album/74441042/image'),
(38, 'Ladilafé', 6, NULL, NULL, 'https://api.deezer.com/album/6756907/image'),
(39, 'La tribu de Pierre Perret au café du canal', 6, NULL, NULL, 'https://api.deezer.com/album/45557191/image'),
(40, 'XXV', 6, NULL, NULL, 'https://api.deezer.com/album/121424812/image'),
(41, 'Vent debout', 6, NULL, NULL, 'https://api.deezer.com/album/14229892/image'),
(42, 'Chanter', 6, NULL, NULL, 'https://api.deezer.com/album/13994864/image'),
(43, 'Charlie', 6, NULL, NULL, 'https://api.deezer.com/album/53577262/image'),
(44, 'Né quelque part', 6, NULL, NULL, 'https://api.deezer.com/album/9180475/image'),
(45, 'Mamagubida', 6, NULL, NULL, 'https://api.deezer.com/album/44948621/image'),
(46, 'Grain de sable', 6, NULL, NULL, 'https://api.deezer.com/album/44948561/image'),
(47, 'Maniac (Live)', 8, NULL, NULL, 'https://api.deezer.com/album/42142871/image'),
(48, 'Blood Machines - Original Motion Picture Soundtrack', 8, NULL, NULL, 'https://api.deezer.com/album/141388042/image'),
(49, 'Maniac', 8, NULL, NULL, 'https://api.deezer.com/album/147343012/image'),
(50, 'TRILOGY', 8, NULL, NULL, 'https://api.deezer.com/album/43429281/image'),
(51, 'Leather Teeth', 8, NULL, NULL, 'https://api.deezer.com/album/57209082/image'),
(52, 'EP I', 8, NULL, NULL, 'https://api.deezer.com/album/43431241/image'),
(53, 'CARPENTERBRUTLIVE', 8, NULL, NULL, 'https://api.deezer.com/album/41838531/image'),
(55, 'Dangerous Days', 10, NULL, NULL, 'https://api.deezer.com/album/7730566/image'),
(56, 'Sexualizer EP', 10, NULL, NULL, 'https://api.deezer.com/album/7491979/image'),
(57, 'The Uncanny Valley', 10, NULL, NULL, 'https://api.deezer.com/album/12638690/image'),
(58, 'I Am the Night', 10, NULL, NULL, 'https://api.deezer.com/album/9732496/image');

-- --------------------------------------------------------

--
-- Structure de la table `artists`
--

CREATE TABLE `artists` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `artists`
--

INSERT INTO `artists` (`id`, `name`, `genre`) VALUES
(1, 'System of a Down', NULL),
(2, 'Skindred', NULL),
(3, 'Linkin Park', NULL),
(4, 'Lady Gaga', NULL),
(6, 'Tryo', NULL),
(8, 'Carpenter Brut', NULL),
(10, 'Perturbator', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `comment` varchar(300) NOT NULL,
  `song_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `comments`
--

INSERT INTO `comments` (`id`, `user_id`, `created_at`, `comment`, `song_id`) VALUES
(1, 3, '2020-05-15 22:22:27', 'I prefer Lady Gaga.', 20),
(2, 18, '2020-05-15 22:26:54', 'I prefer the sound that my rat makes.', 10),
(3, 4, '2020-05-15 22:28:35', 'I prefer apero!', 2),
(4, 5, '2020-05-15 22:31:14', 'I prefer baking.', 4),
(5, 2, '2020-05-15 22:32:55', 'I prefer JS :p', 19),
(6, 1, '2020-05-15 22:35:03', 'I prefer asynchronous functions \\o/', 20),
(7, 10, '2020-05-15 22:36:25', 'I prefer Fortnite.', 8),
(8, 9, '2020-05-15 22:39:10', 'I prefer CSS.', 7),
(9, 13, '2020-05-15 22:41:32', 'I prefer make a baby <3', 20),
(10, 16, '2020-05-15 22:43:05', 'I prefer classical music.', 21),
(11, 2, '2020-05-18 01:21:08', 'I prefer to never do asynchronous functions again.', 12),
(12, 2, '2020-05-18 01:23:00', 'I prefer to never do asynchronous functions again.', 22);

-- --------------------------------------------------------

--
-- Structure de la table `playlists`
--

CREATE TABLE `playlists` (
  `id` int(11) NOT NULL,
  `playlist_title` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `playlist_image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `songs`
--

CREATE TABLE `songs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `artist_id` int(11) NOT NULL,
  `album_id` int(11) NOT NULL,
  `release_date` date DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `link` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `songs`
--

INSERT INTO `songs` (`id`, `title`, `artist_id`, `album_id`, `release_date`, `genre`, `link`) VALUES
(1, 'Chop Suey!', 1, 2, NULL, NULL, 'https://cdns-preview-c.dzcdn.net/stream/c-caa438e780d2b57f12eac5e4ef9c6ef7-4.mp3'),
(2, 'Toxicity', 1, 1, NULL, NULL, 'https://cdns-preview-7.dzcdn.net/stream/c-7243bf039ab415fb749980c406aafb29-2.mp3'),
(3, 'Aerials', 1, 2, NULL, NULL, 'https://cdns-preview-8.dzcdn.net/stream/c-818998c2ce56ac4778ff37bd26719da0-4.mp3'),
(4, 'Hypnotize', 1, 4, NULL, NULL, 'https://cdns-preview-8.dzcdn.net/stream/c-8668907c4fc7c82ed34ea16fdb7353d7-1.mp3'),
(5, 'Lonely Day', 1, 4, NULL, NULL, 'https://cdns-preview-3.dzcdn.net/stream/c-366c8e0040970911e82b776fcb2bdd8d-3.mp3'),
(6, 'B.Y.O.B.', 1, 4, NULL, NULL, 'https://cdns-preview-e.dzcdn.net/stream/c-e8533b2a22196d44762e25ed71c62bf1-4.mp3'),
(7, 'Radio/Video', 1, 6, NULL, NULL, 'https://cdns-preview-2.dzcdn.net/stream/c-2fc4e996ca3ff0d3a1f69f9624db09aa-5.mp3'),
(8, 'Lost In Hollywood', 1, 6, NULL, NULL, 'https://cdns-preview-6.dzcdn.net/stream/c-6cc9aa23760e965667b49f9c2b089bbf-4.mp3'),
(9, 'Spiders', 1, 6, NULL, NULL, 'https://cdns-preview-c.dzcdn.net/stream/c-c921f0abf85b36ea8878b68ab520dd1b-5.mp3'),
(10, 'I-E-A-I-A-I-O', 1, 6, NULL, NULL, 'https://cdns-preview-4.dzcdn.net/stream/c-431206feff3f63c3792de71269c2dbbe-3.mp3'),
(11, 'ATWA', 1, 6, NULL, NULL, 'https://cdns-preview-7.dzcdn.net/stream/c-7849966761914692315823076d61617e-2.mp3'),
(12, 'Question!', 1, 6, NULL, NULL, 'https://cdns-preview-3.dzcdn.net/stream/c-369a11361b0a154b9b7374742b4d0009-4.mp3'),
(13, 'Revenga', 1, 6, NULL, NULL, 'https://cdns-preview-2.dzcdn.net/stream/c-2dd6cb9dfa99308fc9f96c7a93d7b4f1-4.mp3'),
(14, 'Prison Song', 1, 6, NULL, NULL, 'https://cdns-preview-2.dzcdn.net/stream/c-2230465c99a02ede7750da7965e9ca66-2.mp3'),
(15, 'Holy Mountains', 1, 6, NULL, NULL, 'https://cdns-preview-d.dzcdn.net/stream/c-d6159947b33a76a975d7d807ddf64b5a-85.mp3'),
(16, 'Cigaro', 1, 6, NULL, NULL, 'https://cdns-preview-6.dzcdn.net/stream/c-60df40e520aa6e554e64eca169eddf7a-4.mp3'),
(17, 'Violent Pornography', 1, 6, NULL, NULL, 'https://cdns-preview-f.dzcdn.net/stream/c-f5c5e6c19ef408d2a0dbf075b8cda5d3-5.mp3'),
(18, 'Sad Statue', 1, 6, NULL, NULL, 'https://cdns-preview-6.dzcdn.net/stream/c-68f11990f7590a0831dbd735af91dd51-4.mp3'),
(19, 'Roulette', 1, 6, NULL, NULL, 'https://cdns-preview-9.dzcdn.net/stream/c-949d57a6d60ec912eb8a3e0a863b2381-3.mp3'),
(20, 'Needles', 1, 6, NULL, NULL, 'https://cdns-preview-b.dzcdn.net/stream/c-b9bb337b6ef074f2734c3e96474b0191-3.mp3'),
(21, 'Soldier Side', 1, 6, NULL, NULL, 'https://cdns-preview-0.dzcdn.net/stream/c-026944d56866b47f1c45bd725b4e2c93-2.mp3'),
(22, 'Pressure', 2, 9, NULL, NULL, 'https://cdns-preview-2.dzcdn.net/stream/c-20d7f69d195536cc129af482636cbd40-6.mp3'),
(23, 'Nobody', 2, 11, NULL, NULL, 'https://cdns-preview-a.dzcdn.net/stream/c-a5482202623fa10d63f358fc315d16d4-7.mp3'),
(24, 'Ratrace', 2, 11, NULL, NULL, 'https://cdns-preview-6.dzcdn.net/stream/c-654e561c5096e97f8771f215b393e223-5.mp3'),
(25, 'That\'s My Jam', 2, 11, NULL, NULL, 'https://cdns-preview-0.dzcdn.net/stream/c-07c27bc31dcb733501d47cdd9e9d661e-3.mp3'),
(26, 'Big Tings', 2, 12, NULL, NULL, 'https://cdns-preview-f.dzcdn.net/stream/c-f101110070be558c2e67bcbebe662ffa-3.mp3'),
(27, 'Kill The Power', 2, 12, NULL, NULL, 'https://cdns-preview-4.dzcdn.net/stream/c-417fe204fcc79ee6aa15462cafa84f27-4.mp3'),
(28, 'Selector', 2, 12, NULL, NULL, 'https://cdns-preview-5.dzcdn.net/stream/c-55aa6ea3551c9f05c1951beb861c6713-6.mp3'),
(29, 'Rude Boy for Life', 2, 14, NULL, NULL, 'https://cdns-preview-e.dzcdn.net/stream/c-e3ea53b802134e2ef5c34b7cb7e89605-3.mp3'),
(30, 'Destroy the Dancefloor', 2, 14, NULL, NULL, 'https://cdns-preview-f.dzcdn.net/stream/c-f3d5e45ae54bb232c4f93cc435bcfa79-3.mp3'),
(31, 'Stand for Something', 2, 15, NULL, NULL, 'https://cdns-preview-0.dzcdn.net/stream/c-046632c41a19b79fa3f3c80c4db17b4c-3.mp3'),
(32, 'Trouble', 2, 15, NULL, NULL, 'https://cdns-preview-0.dzcdn.net/stream/c-0d80d5c73721a773d195d8c7c636b806-3.mp3'),
(33, 'Doom Riff', 2, 16, NULL, NULL, 'https://cdns-preview-b.dzcdn.net/stream/c-bdafd60606aeea1b2b79141d15251e32-4.mp3'),
(34, 'State of Emergency', 2, 16, NULL, NULL, 'https://cdns-preview-b.dzcdn.net/stream/c-b496da1c1b7f95b9d1eff03b142a9789-3.mp3'),
(35, 'Roots Rock Riot', 2, 16, NULL, NULL, 'https://cdns-preview-4.dzcdn.net/stream/c-4677700a480dfb205fe771ad44e2a829-3.mp3'),
(36, 'Set It Off', 2, 16, NULL, NULL, 'https://cdns-preview-b.dzcdn.net/stream/c-b737a71bfe1bfefe2748eafa2dfd95a1-5.mp3'),
(37, 'World\'s On Fire', 2, 16, NULL, NULL, 'https://cdns-preview-7.dzcdn.net/stream/c-79c065870340846d9aa7a9133289e4b1-4.mp3'),
(38, 'Cut Dem', 2, 16, NULL, NULL, 'https://cdns-preview-5.dzcdn.net/stream/c-591b7b952085a94de4cc2edf825819ca-3.mp3'),
(39, 'Cause Ah Riot', 2, 16, NULL, NULL, 'https://cdns-preview-8.dzcdn.net/stream/c-8f0fd455d83d71da9b896e6964fba5cb-3.mp3'),
(40, 'Game Over', 2, 16, NULL, NULL, 'https://cdns-preview-b.dzcdn.net/stream/c-b07a45ebee3c4bd06f8378b211394897-3.mp3'),
(41, 'Ninja', 2, 16, NULL, NULL, 'https://cdns-preview-f.dzcdn.net/stream/c-fd0e53b3ef0565fa4a1387efdaf5c847-4.mp3'),
(42, 'Bruises', 2, 16, NULL, NULL, 'https://cdns-preview-6.dzcdn.net/stream/c-60f857686947d50ba12e580c9d29bdc3-5.mp3'),
(43, 'What I\'ve Done', 3, 19, NULL, NULL, 'https://cdns-preview-5.dzcdn.net/stream/c-519437e79b95138d9907888afaa77bc1-5.mp3'),
(44, 'Numb', 3, 20, NULL, NULL, 'https://cdns-preview-1.dzcdn.net/stream/c-1cdfe90120447061efa70135a552152c-10.mp3'),
(45, 'Breaking the Habit', 3, 20, NULL, NULL, 'https://cdns-preview-1.dzcdn.net/stream/c-133a49d8d9a16a83b9c569ecf0b9a867-8.mp3'),
(46, 'Leave Out All The Rest', 3, 20, NULL, NULL, 'https://cdns-preview-1.dzcdn.net/stream/c-153583b73a88889893f8350f26532eb2-7.mp3'),
(47, 'Faint', 3, 20, NULL, NULL, 'https://cdns-preview-8.dzcdn.net/stream/c-8bb11e7461cb6e601bda4e80321db03c-6.mp3'),
(48, 'In the End', 3, 20, NULL, NULL, 'https://cdns-preview-1.dzcdn.net/stream/c-179888dacdd6a28871ead1caebf86c79-3.mp3'),
(49, 'Crawling', 3, 22, NULL, NULL, 'https://cdns-preview-a.dzcdn.net/stream/c-af84d7e81bf40e912a3ea6069e3a136a-6.mp3'),
(50, 'CASTLE OF GLASS', 3, 22, NULL, NULL, 'https://cdns-preview-7.dzcdn.net/stream/c-7ba68e05ce872c3466426cbe4a90d7fa-22.mp3'),
(51, 'One Step Closer', 3, 22, NULL, NULL, 'https://cdns-preview-3.dzcdn.net/stream/c-3aecca9907d53fa844c1f7f6bb0d5972-6.mp3'),
(52, 'BURN IT DOWN', 3, 22, NULL, NULL, 'https://cdns-preview-2.dzcdn.net/stream/c-214c35e74fcd6c09d17fbea62100cb69-5.mp3'),
(53, 'Papercut', 3, 23, NULL, NULL, 'https://cdns-preview-b.dzcdn.net/stream/c-b70d69563c41df497d889fc72033c5bf-6.mp3'),
(54, 'One More Light', 3, 23, NULL, NULL, 'https://cdns-preview-0.dzcdn.net/stream/c-03177060bbf65dd2ead15108a8459683-4.mp3'),
(55, 'Somewhere I Belong', 3, 23, NULL, NULL, 'https://cdns-preview-1.dzcdn.net/stream/c-1966c2a3ab4087631727116b14b34fb3-6.mp3'),
(56, 'A Place for My Head', 3, 23, NULL, NULL, 'https://cdns-preview-a.dzcdn.net/stream/c-ae14d380c0153a2df6a1061b7b336290-6.mp3'),
(57, 'Given Up', 3, 23, NULL, NULL, 'https://cdns-preview-6.dzcdn.net/stream/c-64fbdcc4c9d64ba1b63de9e077c12a5f-5.mp3'),
(58, 'Don\'t Stay', 3, 23, NULL, NULL, 'https://cdns-preview-d.dzcdn.net/stream/c-dc7956948ae19baff0e3a084db65475a-7.mp3'),
(59, 'Shadow of the Day', 3, 24, NULL, NULL, 'https://cdns-preview-8.dzcdn.net/stream/c-8d95427fd5e3e51e586f98a07be864e8-3.mp3'),
(60, 'New Divide', 3, 24, NULL, NULL, 'https://cdns-preview-7.dzcdn.net/stream/c-7174e274381557670dda8d4851f4c854-4.mp3'),
(61, 'Talking to Myself', 3, 24, NULL, NULL, 'https://cdns-preview-a.dzcdn.net/stream/c-a24e2f058681cb09e6194b9a6631c7ed-4.mp3'),
(62, 'LOST IN THE ECHO', 3, 24, NULL, NULL, 'https://cdns-preview-3.dzcdn.net/stream/c-382adf5bec626b084b5729b3f4cafc45-22.mp3'),
(63, 'Points of Authority', 3, 24, NULL, NULL, 'https://cdns-preview-a.dzcdn.net/stream/c-a90cd7192ce4520edd92e7898515c238-6.mp3'),
(64, 'Bleed It Out', 3, 24, NULL, NULL, 'https://cdns-preview-4.dzcdn.net/stream/c-4b1fe8eb355db58cd024f55d28af37c1-3.mp3'),
(65, 'Bad Romance', 4, 30, NULL, NULL, 'https://cdns-preview-4.dzcdn.net/stream/c-4c49d46c0af225fe7c346d1fa53c8bad-5.mp3'),
(66, 'Million Reasons', 4, 30, NULL, NULL, 'https://cdns-preview-1.dzcdn.net/stream/c-186cf14c9e0f443ad35ce90ab007fd44-4.mp3'),
(67, 'Always Remember Us This Way', 4, 30, NULL, NULL, 'https://cdns-preview-0.dzcdn.net/stream/c-0ed0308396f779b677c4d146c5eeb2a9-5.mp3'),
(68, 'Poker Face', 4, 30, NULL, NULL, 'https://cdns-preview-f.dzcdn.net/stream/c-fc31a3c3db5e7283e3a70528f67c89c2-6.mp3'),
(69, 'Stupid Love', 4, 30, NULL, NULL, 'https://cdns-preview-f.dzcdn.net/stream/c-f03fe9fd5598e4ac2c4a9f10d0dbfeb9-5.mp3'),
(70, 'Born This Way', 4, 32, NULL, NULL, 'https://cdns-preview-7.dzcdn.net/stream/c-79ebe6317e5684b616baf7fef3420565-5.mp3'),
(71, 'Paparazzi', 4, 32, NULL, NULL, 'https://cdns-preview-b.dzcdn.net/stream/c-b0182bba441946d1902ee90466330646-8.mp3'),
(72, 'Is That Alright?', 4, 32, NULL, NULL, 'https://cdns-preview-4.dzcdn.net/stream/c-4b539cc8ffa30f5efbe7b22ddd66440e-5.mp3'),
(73, 'I\'ll Never Love Again', 4, 32, NULL, NULL, 'https://cdns-preview-3.dzcdn.net/stream/c-38ad74c338a0cd335a68aeda07999bc2-4.mp3'),
(74, 'Alejandro', 4, 32, NULL, NULL, 'https://cdns-preview-2.dzcdn.net/stream/c-269bb724b66c421cc60de7bd302b1015-8.mp3'),
(75, 'Judas', 4, 32, NULL, NULL, 'https://cdns-preview-1.dzcdn.net/stream/c-17abeb7a650901f0fff49136e3f0f803-5.mp3'),
(76, 'Look What I Found', 4, 32, NULL, NULL, 'https://cdns-preview-d.dzcdn.net/stream/c-da53f30af906ee941552fd64425211e4-5.mp3'),
(77, 'The Edge Of Glory', 4, 34, NULL, NULL, 'https://cdns-preview-e.dzcdn.net/stream/c-e4d8431e992b6b36ec3468898762447f-5.mp3'),
(78, 'Perfect Illusion', 4, 34, NULL, NULL, 'https://cdns-preview-0.dzcdn.net/stream/c-05583ca6ced0829c397d871a3f68aa68-4.mp3'),
(79, 'The Cure', 4, 34, NULL, NULL, 'https://cdns-preview-3.dzcdn.net/stream/c-39aeee8760e90d9b86783926b32b51ee-5.mp3'),
(80, 'Applause', 4, 34, NULL, NULL, 'https://cdns-preview-d.dzcdn.net/stream/c-da44605b60d08074217820df231153c0-2.mp3'),
(81, 'Heal Me', 4, 35, NULL, NULL, 'https://cdns-preview-b.dzcdn.net/stream/c-b260b7603ab480c705983637009f6b13-5.mp3'),
(82, 'La Vie En Rose', 4, 35, NULL, NULL, 'https://cdns-preview-d.dzcdn.net/stream/c-dd6befa213ce086d8b38ecb389c686fc-7.mp3'),
(83, 'Why Did You Do That?', 4, 35, NULL, NULL, 'https://cdns-preview-d.dzcdn.net/stream/c-d182ee22353a4214c05ae9720d82cf68-5.mp3'),
(84, 'G.U.Y.', 4, 37, NULL, NULL, 'https://cdns-preview-c.dzcdn.net/stream/c-ca4956a7afa7b9955f0b9ca37a480302-6.mp3'),
(85, 'LoveGame', 4, 37, NULL, NULL, 'https://cdns-preview-b.dzcdn.net/stream/c-b74101c7dde2a86e5aeaee8a0ff5b91a-8.mp3'),
(86, 'Greenwashing', 6, 39, NULL, NULL, 'https://cdns-preview-f.dzcdn.net/stream/c-f56b8a8334639c6c5963422186f6faf5-2.mp3'),
(87, 'Toi et moi XXV', 6, 41, NULL, NULL, 'https://cdns-preview-4.dzcdn.net/stream/c-4cde494a2f378ab7ebebe02c8cebda8f-3.mp3'),
(88, 'Ladilafé', 6, 41, NULL, NULL, 'https://cdns-preview-6.dzcdn.net/stream/c-6970a55044b49f3b72866096cfe88ad2-2.mp3'),
(89, 'Watson', 6, 41, NULL, NULL, 'https://cdns-preview-0.dzcdn.net/stream/c-038c95cb4b69138cdcdb4e50263cd555-4.mp3'),
(90, 'Estelle', 6, 41, NULL, NULL, 'https://cdns-preview-b.dzcdn.net/stream/c-ba71c11828f8c5cb615f31f8996aa7bc-6.mp3'),
(91, 'Le petit prince', 6, 41, NULL, NULL, 'https://cdns-preview-f.dzcdn.net/stream/c-f4566614c4e080d993554d3779f1f66c-4.mp3'),
(92, 'La demoiselle', 6, 41, NULL, NULL, 'https://cdns-preview-0.dzcdn.net/stream/c-00e22df20c5fe5920a4e4cdab408021b-4.mp3'),
(93, 'Chanter', 6, 44, NULL, NULL, 'https://cdns-preview-c.dzcdn.net/stream/c-c7800b8f5dab5c894ca70584fc467e3b-4.mp3'),
(94, 'Américain', 6, 44, NULL, NULL, 'https://cdns-preview-b.dzcdn.net/stream/c-b719833878176a68a793104eb5e7e2e7-6.mp3'),
(95, 'Souffler', 6, 44, NULL, NULL, 'https://cdns-preview-6.dzcdn.net/stream/c-6f99b73e4f0109bcdd1a5527a02675dd-4.mp3'),
(96, 'Charlie', 6, 44, NULL, NULL, 'https://cdns-preview-0.dzcdn.net/stream/c-0308a65229129e5739b2f3c149c9661e-3.mp3'),
(97, 'La corrida', 6, 44, NULL, NULL, 'https://cdns-preview-9.dzcdn.net/stream/c-945b1743435e313752960330d8abe520-3.mp3'),
(98, 'L\'hymne de nos campagnes XXV', 6, 44, NULL, NULL, 'https://cdns-preview-4.dzcdn.net/stream/c-4ac5678be82d40f3dbb51d53f46973d5-3.mp3'),
(99, 'Le temps XXV', 6, 44, NULL, NULL, 'https://cdns-preview-7.dzcdn.net/stream/c-7f17e3ca4157ae5312e198a69df458a3-3.mp3'),
(100, 'Nous génération', 6, 44, NULL, NULL, 'https://cdns-preview-9.dzcdn.net/stream/c-9dd0979ac9a42405ba0e9d65adac4831-3.mp3'),
(101, 'Né quelque part', 6, 45, NULL, NULL, 'https://cdns-preview-6.dzcdn.net/stream/c-692c75359480f3100ddfcafaf0901200-5.mp3'),
(102, 'Obsolète', 6, 45, NULL, NULL, 'https://cdns-preview-1.dzcdn.net/stream/c-1b4c81a3baf53d69cb9a747331207624-5.mp3'),
(103, 'El dulce de leche XXV', 6, 45, NULL, NULL, 'https://cdns-preview-a.dzcdn.net/stream/c-a2c5212c6826216cc2f460994744759a-3.mp3'),
(104, 'L\'hymne de nos campagnes', 6, 45, NULL, NULL, 'https://cdns-preview-6.dzcdn.net/stream/c-634ef9c8031130252e09601feb84a65b-4.mp3'),
(105, 'Un homme qui aime les femmes XXV', 6, 45, NULL, NULL, 'https://cdns-preview-5.dzcdn.net/stream/c-520311bb1e9106c69e34b4cad0ed1214-3.mp3'),
(106, 'Les anciens', 6, 45, NULL, NULL, 'https://cdns-preview-9.dzcdn.net/stream/c-9fa48e168a6eac807152f796a277e3df-2.mp3'),
(107, 'Marine est là', 6, 45, NULL, NULL, 'https://cdns-preview-e.dzcdn.net/stream/c-ecf43412d1d2c1ac388a9b6fed353b8b-2.mp3'),
(108, 'La misère d\'en face XXV', 6, 46, NULL, NULL, 'https://cdns-preview-6.dzcdn.net/stream/c-61e7e256d862db67cef72e9f1ed0d0ff-3.mp3'),
(109, 'Désolé pour hier soir', 6, 46, NULL, NULL, 'https://cdns-preview-a.dzcdn.net/stream/c-aecef128de0d9650ea110c34c078e907-4.mp3'),
(110, 'Blood Machines Theme', 8, 49, NULL, NULL, 'https://cdns-preview-2.dzcdn.net/stream/c-248f69797d2194699263ec5a833a5866-4.mp3'),
(111, 'Maniac', 8, 50, NULL, NULL, 'https://cdns-preview-9.dzcdn.net/stream/c-92400911d74408ef6433a283f8b3277a-4.mp3'),
(112, 'Intro', 8, 50, NULL, NULL, 'https://cdns-preview-a.dzcdn.net/stream/c-ad2dc9d0f56032fc6e18c475b678a645-3.mp3'),
(113, 'Roller Mobster', 8, 50, NULL, NULL, 'https://cdns-preview-d.dzcdn.net/stream/c-d66554c27c56ed22357a734fdd7ff887-5.mp3'),
(114, 'Turbo Killer', 8, 51, NULL, NULL, 'https://cdns-preview-3.dzcdn.net/stream/c-359cdf3a0953ffb43c13973d97ce6ae6-5.mp3'),
(115, 'Leather Teeth', 8, 52, NULL, NULL, 'https://cdns-preview-7.dzcdn.net/stream/c-79865d0194f691a5942152d16480cbd1-5.mp3'),
(116, 'Le perv', 8, 52, NULL, NULL, 'https://cdns-preview-2.dzcdn.net/stream/c-225c62ea4caccbf641dfdd2c3b61fc45-5.mp3'),
(117, 'Attack Of The Amazons', 8, 53, NULL, NULL, 'https://cdns-preview-3.dzcdn.net/stream/c-3d4445124c355e45c005e179c2453e9f-3.mp3'),
(118, 'Hang\'em All', 8, 53, NULL, NULL, 'https://cdns-preview-1.dzcdn.net/stream/c-103b8885cdf1682323e58f8d04b38d20-5.mp3'),
(119, 'The Ceremony', 8, 53, NULL, NULL, 'https://cdns-preview-a.dzcdn.net/stream/c-a7561a007bdcab324fac1bb9bfe11713-3.mp3'),
(120, 'Souls Wreck', 8, 53, NULL, NULL, 'https://cdns-preview-6.dzcdn.net/stream/c-65ae073d5b5935c2d37fc8af9351d9ef-3.mp3'),
(121, 'The Last Ceremony', 8, 53, NULL, NULL, 'https://cdns-preview-3.dzcdn.net/stream/c-3821a9d4b7228c33dbe7c62079e2147c-3.mp3'),
(122, 'Grand Final', 8, 53, NULL, NULL, 'https://cdns-preview-8.dzcdn.net/stream/c-8aca0b0edd0356534e79a1e7c1e279ad-3.mp3'),
(123, 'Anarchy Road', 8, 53, NULL, NULL, 'https://cdns-preview-c.dzcdn.net/stream/c-c5a8abc1148ab5fd25baa5db40adc024-5.mp3'),
(124, 'Paradise Warfare', 8, 53, NULL, NULL, 'https://cdns-preview-0.dzcdn.net/stream/c-070744778146671691215def4227e73c-5.mp3'),
(125, 'Escape From Midwich Valley', 8, 53, NULL, NULL, 'https://cdns-preview-0.dzcdn.net/stream/c-0ee95a1bdcabd76d9c421c05dc6b21f9-4.mp3'),
(126, 'Touchdown', 8, 53, NULL, NULL, 'https://cdns-preview-e.dzcdn.net/stream/c-e0586ff95d06ceb4e3cb19f88905f8b1-3.mp3'),
(127, 'Disco Zombi Italia', 8, 53, NULL, NULL, 'https://cdns-preview-2.dzcdn.net/stream/c-2b065dc7f6ca224ab15fffe1261b3317-5.mp3'),
(128, 'Looking For Tracy Tzu', 8, 53, NULL, NULL, 'https://cdns-preview-1.dzcdn.net/stream/c-1d3c3febe92fd7fb63db7aadd832e40f-4.mp3'),
(129, 'Bloody Kisses The Swift', 8, 53, NULL, NULL, 'https://cdns-preview-c.dzcdn.net/stream/c-c3c0f8adc9ec5943976b2abb99a3d404-3.mp3'),
(130, 'Heart Ship', 8, 53, NULL, NULL, 'https://cdns-preview-5.dzcdn.net/stream/c-5b5691f56c5edddf2074fcb973c26086-3.mp3'),
(131, 'Division Ruine', 8, 53, NULL, NULL, 'https://cdns-preview-e.dzcdn.net/stream/c-e4ee51f73089386b96e4e39ec7b2c882-5.mp3'),
(132, 'Inferno Galore', 8, 53, NULL, NULL, 'https://cdns-preview-7.dzcdn.net/stream/c-7435ce656a19fbca9537d77a4185b375-5.mp3'),
(133, 'Raw Power', 10, 55, NULL, NULL, 'https://cdns-preview-6.dzcdn.net/stream/c-65b182b529099f9db47a7cfefe03496a-1.mp3'),
(135, 'Perturbator\'s Theme', 10, 56, NULL, NULL, 'https://cdns-preview-f.dzcdn.net/stream/c-febc776f0aaaa09b3de01018985bce84-2.mp3'),
(136, 'Sexualizer (feat. Flash Arnold)', 10, 56, NULL, NULL, 'https://cdns-preview-5.dzcdn.net/stream/c-5d55918b473418caee62361db7584113-3.mp3'),
(138, 'Disco Inferno', 10, 58, NULL, NULL, 'https://cdns-preview-4.dzcdn.net/stream/c-431d0757222ccd544d13a96494b441f1-4.mp3'),
(139, 'Death Squad', 10, 58, NULL, NULL, 'https://cdns-preview-2.dzcdn.net/stream/c-260f7e95f73d876dd5331080ad14b81a-4.mp3'),
(140, 'She Is Young, She Is Beautiful, She Is Next', 10, 58, NULL, NULL, 'https://cdns-preview-8.dzcdn.net/stream/c-8cc3777f07f98a770d769797747f5c75-1.mp3'),
(141, 'Miami Disco', 10, 58, NULL, NULL, 'https://cdns-preview-9.dzcdn.net/stream/c-98e8559c905ad35c26fcd581b9837d6d-3.mp3'),
(142, 'Venger (feat. Greta Link)', 10, 58, NULL, NULL, 'https://cdns-preview-7.dzcdn.net/stream/c-712bbe876e184d39c080e7fc5e67b386-4.mp3'),
(143, 'Technoir (feat. Noir Deco)', 10, 58, NULL, NULL, 'https://cdns-preview-4.dzcdn.net/stream/c-440ddb3d66b429cc34d093f61425c665-2.mp3'),
(144, 'I Am the Night', 10, 58, NULL, NULL, 'https://cdns-preview-5.dzcdn.net/stream/c-576719b694f96977e57cafde82a73c4d-2.mp3'),
(145, 'Sentient (feat. Hayley Stewart)', 10, 58, NULL, NULL, 'https://cdns-preview-9.dzcdn.net/stream/c-9e01ca950b4900b84f929b7059f53395-3.mp3'),
(146, 'Hard Wired (feat. Isabella Goloversic)', 10, 58, NULL, NULL, 'https://cdns-preview-c.dzcdn.net/stream/c-ccf6cf3d5c7918d9a1fa6d49117290b3-1.mp3'),
(147, 'Minuit (feat. Dead Astronauts)', 10, 58, NULL, NULL, 'https://cdns-preview-4.dzcdn.net/stream/c-4d8744e1e753ac886364b4bd0a6b5f60-1.mp3'),
(148, 'Neo Tokyo', 10, 58, NULL, NULL, 'https://cdns-preview-a.dzcdn.net/stream/c-a8934cfc33d94de282538834c16aab95-4.mp3'),
(149, 'Welcome Back', 10, 58, NULL, NULL, 'https://cdns-preview-e.dzcdn.net/stream/c-ee7996fb3a7be0f547a962403bd19fb4-2.mp3'),
(150, 'Satanic Rites', 10, 58, NULL, NULL, 'https://cdns-preview-4.dzcdn.net/stream/c-4eaadefbdcc729cb251fad53d0e470fb-2.mp3'),
(151, 'Eclipse', 10, 58, NULL, NULL, 'https://cdns-preview-b.dzcdn.net/stream/c-b86892b1bdd0a3c9835c54b9925b088e-2.mp3'),
(152, 'War Against Machines', 10, 58, NULL, NULL, 'https://cdns-preview-2.dzcdn.net/stream/c-2ed2ff03a6cd2c36cf8847fa358c170c-1.mp3'),
(153, 'Dangerous Days', 10, 58, NULL, NULL, 'https://cdns-preview-0.dzcdn.net/stream/c-0b1199e5a523d280b7093000fded2a6e-2.mp3'),
(154, 'Last Kiss', 10, 58, NULL, NULL, 'https://cdns-preview-1.dzcdn.net/stream/c-1d9c7753316c3031980f6c53b16d19f8-2.mp3');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nickname` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `avatar` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `nickname`, `password`, `avatar`) VALUES
(1, 'Audrene', 'asyncawait', '../uploads/Audrene.jpg'),
(2, 'Perle', 'javascript', '../uploads/Perle.jpg'),
(3, 'Gregory', 'bigboss', '../uploads/Gregory.jpg'),
(4, 'Usher', 'aperooo', '../uploads/Usher.jpg'),
(5, 'Yoan', 'allezmerci', '../uploads/Yoan.jpg'),
(6, 'Celine', 'celine', '../uploads/Celine.jpg'),
(7, 'Lucas', 'lucas1', '../uploads/Lucas.jpg'),
(8, 'Matthias', 'matthias', '../uploads/Matthias.jpg'),
(9, 'Maureen', 'maureen', '../uploads/Maureen.jpg'),
(10, 'Raphael', 'raphael', '../uploads/Raphael.jpg'),
(11, 'Antonin', 'antonin', '../uploads/Antonin.jpg'),
(12, 'Clement', 'clement', '../uploads/Clement.jpg'),
(13, 'Esther', 'esther', '../uploads/Esther.jpg'),
(14, 'Hamza', 'hamza1', '../uploads/Hamza.jpg'),
(15, 'Mateo', 'mateo1', '../uploads/Mateo.jpg'),
(16, 'Olivier', 'olivier', '../uploads/Olivier.jpeg'),
(17, 'Veronique', 'veronique', '../uploads/Veronique.jpg'),
(18, 'Victoria', 'victoria', '../uploads/Victoria.jpeg');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `artists`
--
ALTER TABLE `artists`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `playlists`
--
ALTER TABLE `playlists`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `songs`
--
ALTER TABLE `songs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `link` (`link`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nickname` (`nickname`) USING BTREE;

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `albums`
--
ALTER TABLE `albums`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT pour la table `artists`
--
ALTER TABLE `artists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `playlists`
--
ALTER TABLE `playlists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `songs`
--
ALTER TABLE `songs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=155;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `playlists`
--
ALTER TABLE `playlists`
  ADD CONSTRAINT `playlists_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
