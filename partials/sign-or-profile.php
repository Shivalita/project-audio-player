<?php
  if (!isset($_SESSION['nickname'])) {
?>

  <div class="text-center">
    <a id="signUpButton" href="" class="btn btn-dark btn-rounded mb-4 mt-5 control" data-toggle="modal" data-target="#modalSignUpForm">SIGN UP</a>
  </div>

  <div class="text-center mb-5">
    <a id="signInButton" href="" class="btn btn-dark btn-rounded mb-4 control" data-toggle="modal" data-target="#modalSignInForm">SIGN IN</a>
  </div>

<?php
  } else {
?>
 
  <div class="row justify-content-around">
    <div class="col-12 text-center mt-3">
      <img id="userAvatar" class="img-fluid control avatar" src="<?=$_SESSION['avatar']?>" alt="">
    </div>

    <div class="col-12 text-center mt-4">
      <h5 id="userName" class="nickname mb-5"><b class="name"><?=$_SESSION['nickname']?></b></h5>
    </div>

    <div class="col-12 text-center m-1">
      <button id="myComments" class="sideButton">My comments</button>
    </div>

    <div class="col-12 text-center mt-3 mb-3">
      <button id="myPlaylists" class="sideButton">My playlists</button>
    </div>
  </div>
   
<?php
  }

?> 