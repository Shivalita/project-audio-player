<?php
  if (!isset($_SESSION['nickname'])) {
?>

    <div class="text-center">
      <a id="signUpButton" href="" class="btn btn-dark btn-rounded mb-4 mt-5 control" data-toggle="modal" data-target="#modalSignUpForm">SIGN UP</a>
    </div>

    <div class="text-center">
      <a id="signInButton" href="" class="btn btn-dark btn-rounded mb-4 control" data-toggle="modal" data-target="#modalSignInForm">SIGN IN</a>
    </div>

<?php
  } else {
?>
 

    <div class="col-12 col-md-8 offset-md-2 text-center mt-4">
      <img id="userAvatar" class="img-fluid control avatar" src="<?=$_SESSION['avatar']?>" alt="">
    </div>

    <div class="col-12 col-md-10 offset-md-1 text-center mt-4">
      <h5 id="userName" class="nickname mb-5"><?=$_SESSION['nickname']?></h5>
    </div>

<?php
  }

?> 