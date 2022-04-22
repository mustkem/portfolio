const config = {
  rootMargin: "0px 0px -100%",
};

function intersectionHandler(entry) {
  const id = entry.target.id;
  const currentlyActive = document.querySelector("nav li.active");
  const shouldBeActive = document.querySelector("nav li[data-ref=" + id + "]");

  if (currentlyActive) {
    currentlyActive.classList.remove("active");
  }
  if (shouldBeActive) {
    shouldBeActive.classList.add("active");
  }
}

let observer = null;
if (typeof window !== "undefined") {
  // The code inside brackets will be executed ONLY in browser
  observer = new IntersectionObserver(function (entries, self) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        intersectionHandler(entry);
      }
    });
  }, config);
}

const activateNavMenuItem = (source) => {
  observer.observe(source);
};

export default activateNavMenuItem;
