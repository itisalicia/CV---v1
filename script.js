function checkForVisibility() {
    var headers = document.querySelectorAll(".car");
    headers.forEach(function(car) {
      if (isElementInViewport(car)) {
        car.classList.add("carVisible");
      } else {
        car.classList.remove("carVisible");
      }
    });
  }
  
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  if (window.addEventListener) {
    addEventListener("DOMContentLoaded", checkForVisibility, false);
    addEventListener("load", checkForVisibility, false);
    addEventListener("scroll", checkForVisibility, false);
  }
  