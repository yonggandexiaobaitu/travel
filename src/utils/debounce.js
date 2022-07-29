export default function debounce (fn, delay) {
  let timeId = null;
  return function () {
    if (timeId) {
      window.clearTimeout(timeId);
    }
    timeId = setTimeout(fn, delay);
  }
}