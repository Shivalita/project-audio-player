<?php
  if (!$_SESSION) {
    return `
    <div class="text-center">
      <a id="signUpButton" href="" class="btn btn-dark btn-rounded mb-4 mt-5" data-toggle="modal" data-target="#modalSignUpForm">SIGN UP</a>
    </div>

    <div class="text-center">
      <a id="signInButton" href="" class="btn btn-dark btn-rounded mb-4" data-toggle="modal" data-target="#modalSignInForm">SIGN IN</a>
    </div>
    `;
  } else {
    $avatarImg = substr($_SESSION['avatar'], 1);
    $nickname = $_SESSION['nickname'];
    return `
    <div class="col-12 col-md-8 offset-md-2 text-center mt-4">
      <img id="userAvatar" class="img-fluid img-rounded" src="$avatarImg" alt="">
    </div>

    <div class="col-12 col-md-10 offset-md-1 text-center mt-4">
      <h5 id="userName">$nickname</h5>
    </div>
    `;
}
?>