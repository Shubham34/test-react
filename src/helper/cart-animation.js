export const cartAnimation = (event) => {
  const getClosest = function (elem, selector) {
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;
  };

  // start animation block
  let imgToDrag = getClosest(event.target, ".product-card");
  let viewCart = document.getElementsByClassName("cart-container")[0];
  let imgToDragImage = imgToDrag.querySelector(".product-image");

  let disLeft = imgToDrag.getBoundingClientRect().right;
  let disTop = imgToDrag.getBoundingClientRect().top;
  let cartLeft = viewCart.getBoundingClientRect().right;
  let cartTop = viewCart.getBoundingClientRect().top;
  let image = imgToDragImage.cloneNode(true);
  image.style =
    "z-index: 11111; width: 100px;opacity:1; position:fixed; top:" +
    disTop +
    "px;right:" +
    disLeft +
    "px;transition: right 1s, top 1s, width 1s, opacity 1s cubic-bezier(1, 1, 1, 1);border-radius: 50px; overflow: hidden; box-shadow: 0 21px 36px rgba(0,0,0,0.1)";
  var reChange = document.body.appendChild(image);
  setTimeout(function () {
    image.style.right = cartLeft + "px";
    image.style.top = cartTop + "px";
    image.style.width = "40px";
    image.style.opacity = "0";
  }, 200);
  setTimeout(function () {
    reChange.parentNode.removeChild(reChange);
  }, 1000);
  // End Animation Block
};
