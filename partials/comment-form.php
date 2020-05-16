<form action="./apps/commentProcess.php" method="POST">
    <div class="row justify-content-around mt-4">
        <div class="col-10 col-md-6">
            <i class="fas fa-user prefix grey-text"></i>
            <label data-error="wrong" data-success="right" for="comment">Post a comment</label>
            <input type="text" id="commentInput" name="comment" class="form-control validate" minlength="2" maxlength="300" required>
        </div> 
    </div>  
    <div class="row justify-content-around">
        <div class="text-center mt-4">
            <button type="submit" class="btn btn-dark">Send</button>
        </div>
    </div>
</form>