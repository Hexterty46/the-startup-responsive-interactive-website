const shareBtn = document.querySelector(".share-button");

const shareData = {
    title: "Woning",
    text: "Bekijk deze woning op Funda",
    url: window.location.href
}

shareBtn.addEventListener("click", async () => {
    try {
        await navigator.share(shareData)
    } catch (err) {
        console.warn("Kan niet delen", err)
    }
})