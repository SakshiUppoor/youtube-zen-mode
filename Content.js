let search_bar = "#center.ytd-masthead"; // Seachbar in nav
let body = "ytd-browse"; // Recommended videos feed

let elements_to_hide = [
  "ytd-mini-guide-renderer.ytd-app", // Sidebar
  search_bar, // Seachbar in nav
  "#end", // Other buttons in nav
];

elements_to_hide.forEach(
  (ele) => (document.querySelector(ele).style.display = "none")
);

var url = chrome.extension.getURL("search.svg");
content = `

<style>
@import url("https://fonts.googleapis.com/css?family=Muli");
html {
  background-color: #181818;
  font-family: "Muli", sans-serif;
}
.heading-1 {
  color: #fff;
  font-size: 40px;
  text-align:center;
}

ytd-browse {
  min-height: 80vh;
}

#my-search {
    margin: 40px auto;
}

#my-content {
  width: 70vw;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
} 
.iconify {
  color: rgba(0, 0, 0, 0.623);
  font-size: 1.3em;
  transition: all 0.3s ease-in-out;
}
.iconify:hover {
  color: rgba(0, 0, 0, 0.794);
}
.my-searchbar {
  border-bottom: #fff 1px solid;
}
#myInputWrapper {
    margin: auto;
  height: 100%;
  position: relative;
  width: 40vw;
}
#searchText {
  height: 45px !important;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: #fffffff0;
  border: none;
  border-radius: 2em;
  color: var(--search-box-text);
  font-family: inherit;
  font-size: 18px;
  height: 100%;
  outline: none;
  padding-inline-end: 44px;
  padding-inline-start: 32px;
  position: relative;
  width: 100%;
}
:-webkit-any(input, #searchButton) {
  z-index: 2;
}
#mySearchButton {
    z-index:2;
  background: url(chrome://new-tab-page/icons/googlemic_clr_24px.svg)
    no-repeat center;
  background-size: 21px 21px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  height: 100%;
  outline: none;
  padding: 0;
  pointer-events: auto;
  position: absolute;
  right: 16px;
  width: 26px;
}
:host {
  align-items: center;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  width: 32px;
}
</style>
<div id="my-content">
<div class="heading-1">What do you want to study today?</div>
<form id="my-search" action="">
  <div id="myInputWrapper">
    <input
      id="searchText"
      type="search"
      autocomplete="off"
      spellcheck="false"
      role="combobox"
      aria-live="polite"
      placeholder="Search"
    />
    <button id="mySearchButton" title="Search videos">
      <img src="${url}">
    </button>
  </div>
</form>
</div>
`;

document.querySelector("ytd-page-manager.ytd-app").style.marginLeft = "0px";
document.querySelector(body).innerHTML = content;

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

var el = document.createElement("script");
el.innerHTML += `
console.log("hi");
      function searchResults(e) {
        e.preventDefault();
        var search_text=encodeURIComponent(document.querySelector("#searchText").value);
        window.location.href ='https://www.youtube.com/results?search_query='+encodeURIComponent(search_text).replace('%2520', '+');
    
      }
      document
        .getElementById("my-search")
        .addEventListener("submit", searchResults);
`;
insertAfter(document.querySelector("ytd-app"), el);
