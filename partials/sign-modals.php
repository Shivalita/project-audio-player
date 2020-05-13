<!-- Sign up modal -->

<div class="modal fade" id="modalSignUpForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">

        <div class="modal-content">
            <div class="modal-header text-center">
                <h4 class="modal-title w-100 font-weight-bold">Sign up</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <!--FIX THIS-->
                <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <form action="./apps/sign-up.php" method="POST" enctype="multipart/form-data">
                <div class="modal-body mx-3">

                    <div class="md-form mb-5">
                        <i class="fas fa-user prefix grey-text"></i>
                        <label data-error="wrong" data-success="right" for="nickname">Nickname</label>
                        <input type="text" id="signUpNickname" name="nickname" class="form-control validate" minlength="2" maxlength="20" required>
                    </div>

                    <div class="md-form mb-5">
                        <i class="fas fa-lock prefix grey-text"></i>
                        <label data-error="wrong" data-success="right" for="password">Password</label>
                        <input type="password" id="signUpPassword" name="password" class="form-control validate" minlength="6" maxlength="20" required>
                    </div>

                    <div class="md-form mb-4">
                        <i class="fas fa-lock prefix grey-text"></i>
                        <label data-error="wrong" data-success="right" for="avatar">Avatar</label><br />
                        <div class="input-group">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input btn" id="avatar" name="avatar" accept=".jpg, .jpeg, .png, .gif">
                                <label class="custom-file-label" for="file">Choose file</label>
                            </div>
                        </div>
                    </div>        

                </div>

                <div class="modal-footer d-flex justify-content-center">
                    <button type="submit" class="btn btn-dark">Sign up</button>
                </div>

                </div>
            </form>

        </div>
    </div>
</div>

<!-- Sign in modal -->

<div class="modal fade" id="modalSignInForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">

        <div class="modal-content">
            <div class="modal-header text-center">
                <h4 class="modal-title w-100 font-weight-bold">Sign in</h4>

                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>

            </div>

            <form action="./apps/login.php" method="POST">
                <div class="modal-body mx-3">

                    <div class="md-form mb-5">
                        <i class="fas fa-user prefix grey-text"></i>
                        <label data-error="wrong" data-success="right" for="nickname">Nickname</label>
                        <input type="text" id="signUpNickname" name="nickname" class="form-control validate" required>
                    </div>

                    <div class="md-form mb-5">
                        <i class="fas fa-lock prefix grey-text"></i>
                        <label data-error="wrong" data-success="right" for="password">Password</label>
                        <input type="password" id="signUpPassword" name="password" class="form-control validate" required>
                    </div>

                </div>
                <div class="modal-footer d-flex justify-content-center">
                    <button type="submit" class="btn btn-dark">Sign in</button>
                </div>

                </div>
            </form>

        </div>
    </div>
</div>