$(document).ready(function() {
  $("form#wordPlayForm").submit(function(event) {
    event.preventDefault();
    const sentenceInput = $("input#inputSentence").val();

    const sentenceArray = sentenceInput.split(' ');
    let newArray = [];

    sentenceArray.forEach(function(element) {
      newArray = element.length >= 3;
    });

    $("#hidden").show();
    $("#output").text(newArray);
  });
});