(function() {
    this.Widget = function() {
      // HTML source code for the widget
      this.html =
        `<div class='container'>` +
        `<div class='discount-text'>Welcome to the world of anime</div>` +
        `<div class='logo'><span>b</span><span>l</span><span>a</span><span>h</span>.com</div>` +
        `<form id='form' name="widget-form" action="" target="_blank" style="margin-top:5%">` +
        `   <button id='submit-button'>Visit US..</button>` +
        `</form>` +
        `</div>`;
      var defaults = {
        containerId: "widget",
        formName: "widget-form",
      };
      this.options = defaults;
  
      initializeWidget(this);
      initialiseEvents(this);
    };
    function initializeWidget(self) {
      var container = document.getElementById(self.options.containerId);
      if (container) {
        // Appending the widget html code to the block which has the id "widget" in the demo page
        container.innerHTML = self.html;
      }
    }
    function initialiseEvents(self) {
      // Adding event listener to the "Book Now" button
      var button = document.getElementById("submit-button");
      if (button) {
        button.addEventListener("click", submitClicked.bind(self));
      }
      var form = document.getElementById("form");
      if (form) {
        form.addEventListener("submit", submitClicked.bind(self));
      }
    }
  
    function submitClicked(event) {
      // Opening the vue app with all the details
      window.open(
        `https://vuewidget.herokuapp.com/`,
      );
    }
  })();
  
  new Widget({});