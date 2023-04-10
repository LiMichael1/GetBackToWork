const definedCss = () => {
  return `<style>
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 100%;
    height: auto;
  }
  </styles>`
}

const definedHTML = () => {
  return `<div class="content">
    <img src="https://kf-dwp-uploads-p001.storage.googleapis.com/wp-content/uploads/2022/04/05151534/back-to-office.jpeg"
      alt="Get Back to Work" />
  </div>`
}

const forbiddenUrls = ["www.reddit.com", "www.instagram.com", "twitter.com"];
const set = new Set(forbiddenUrls);

if(set.has(window.location.hostname)) {
  // replace HTML and CSS
  document.head.innerHTML = definedCss();
  document.body.innerHTML = definedHTML();
}