const resizeObserver = new ResizeObserver(function addResizingClass() {
  document.body.classList.add("resizing");

  requestAnimationFrame(function removeResizingClass() {
    document.body.classList.remove("resizing");
  });
});

resizeObserver.observe(document.body);
