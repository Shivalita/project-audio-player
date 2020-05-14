
/* Display file's name when chosen */
$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});


/* --- ERROR MESSAGES --- */

/* Alert error message if user is unknown */
$(document).ready(function() {
  if (window.location.href.indexOf("unknown_user") > -1) {
    alert("Unknown username");
  }
});

/* Alert error message if nickname or password is incorrect */
$(document).ready(function() {
  if (window.location.href.indexOf("wrong_identifiers") > -1) {
    alert("Nickname or password incorrect");
  }
});

/* Alert error message if extension file is not allowed */
$(document).ready(function() {
  if (window.location.href.indexOf("wrong_extension") > -1) {
    alert("File extension not allowed (.jpg, .jpeg, .gif and .png only)");
  }
});

/* Alert error message if image's size is too big */
$(document).ready(function() {
  if (window.location.href.indexOf("file_size") > -1) {
    alert("Image's size too important");
  }
});

/* Alert error message if nickname is already taken */
$(document).ready(function() {
  if (window.location.href.indexOf("nickname_taken") > -1) {
    alert("Nickname already taken");
  }
}); 