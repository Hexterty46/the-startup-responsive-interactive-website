const shareBtn = document.querySelector(".share-button");
const likeBtn = document.querySelector("#like-button");

const shareData = {
    title: "Funda Woning",
    text: "Bekijk deze woning op Funda",
    url: window.location.href
}

if (navigator.share) {
  shareBtn.addEventListener("click", async () => {
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.warn("Delen geannuleerd", err);
    }
  });
} else {
  console.warn("De webshareAPI word niet ondersteund door deze browser :)");
}


likeBtn.addEventListener("click", function() {
    console.log("WERKT")
    likeBtn.classList.toggle("is-liked");
})