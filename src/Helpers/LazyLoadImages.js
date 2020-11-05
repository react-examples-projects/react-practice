//window.addEventListener("scroll", e=> console.log(window.scrollY))
export default function LazLoadImages(image) {
  if ("IntersectionObserver" in window) {
    const InObserver = new IntersectionObserver(fn);
    InObserver.observe(image);

    function fn(entrie) {
      const element = entrie[0].target;

      // entrie es un arreglo, accedemos al unico elemeno img
      if (
        entrie[0].isIntersecting &&
        element.src !== element.getAttribute("data-loaded")
      ) {
        element.src = element.getAttribute("data-loaded");

        // cuando la imagen original cargue, quitamos el efecto borroso
        element.addEventListener("load", () => {
          element.classList.add("loaded");
        });
      }
    }
  } else {
    console.error("IntersectionObserver no implemented this browser");
  }
}
