<div class="container">
    <form action="./apps/comment-process.php" method="POST">
        <div class="row justify-content-around mt-4">
            <div class="col-4">
                <label data-error="wrong" data-success="right" for="comment" class="text-white">Post a comment</label>
                <textarea id="commentInput" class="form-control text-white control" name="comment" rows="3" minlength="2" maxlength="300" required></textarea>
            </div> 
        </div>  
        <div class="row justify-content-around">
            <div class="text-center mt-4">
                <button type="submit" class="btn text-white control">Send</button>
            </div>
        </div>
    </form>
</div>