(function(window, document, undefined) {
  // js nonsense
  function handleClick(event) {
    if (event.target !== event.currentTarget && event.target.nodeName === "BUTTON") {
      console.log(event.target);

      dropMenu(event.target);
    }
    event.stopPropagation();
  }

  var buttonEl = document.getElementById("menuBtn");
  buttonEl.addEventListener("click", handleClick, true);

  function dropMenu(clicked) {
    // js or css stuff should happen
    console.log(clicked);
  }

})(window = window || {}, document)
