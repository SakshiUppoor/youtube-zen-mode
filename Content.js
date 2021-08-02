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
  color: rgb(255 255 255 / 35%);
  font-size: 1.3em;
  transition: all 0.3s ease-in-out;
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

#folders-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.folder {
  color: rgba(255, 255, 255, 0.589);
  font-size: 18px;
  font-weight: 500;
  background: #272727;
  margin: 10px;
  padding: 25px;
  border-radius: 10px;
  flex: 1 0 23%;
  max-width: 30%;
}
.folder:hover {
  cursor: pointer;
  color: rgba(255, 255, 255, 0.856);
  background: #2e2e2e;
}
/* The Modal (background) */
.modal {
  display: none;
  position: absolute; 
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0, 0, 0); 
  background-color: rgba(0, 0, 0, 0.644); 
}

.folder-name {
  vertical-align: top;
  margin-left: 4px;
}

/* Modal Content/Box */
.modal-content {
  margin: 15% auto;
  padding: 20px;
  width: 80%;
    color: rgba(255, 255, 255, 0.589);
    font-size: 16px;
    font-weight: 500;
    background: #272727;
    margin: 10px;
    padding: 30px;
    border-radius: 10px;
    position: relative;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
}

.modal-content a {
  text-decoration: none;
  color: inherit;
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: rgb(211, 211, 211);
  text-decoration: none;
  cursor: pointer;
}
.modal-title {
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 14px;
}
#channels {
  display: flex;
}
.channel {
  text-align: center;
  width: fit-content;
  margin: 0 10px;
}
.img-circle {
  border-radius: 50%;
  width: 70px;
  height: 70px;
  padding: 5px;
}
.channel-name {
  font-size: 14px;
}
#add-channel {
  cursor: pointer;
}
#addChannelError, #addVideoError, #addFolderError {
  display: none;
  color: red;
}
#videos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
}
.video {
  display: flex;
}
.video span {
  margin: 10px;
}
.video-name {
  font-size: 16px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.794);
}
.my-video-card {    
  height: 180px;
  border-radius: 10px;
  color: #fff;
  position: relative;
  background-size: cover !important;
  background-position-x: center !important;
  background-position-y: center !important;
}
.video-text {
  position: absolute;
  bottom: 0;
  padding: 10px;
}
.red-button {
  cursor: pointer;
  border:none;
  background-color: var(--yt-spec-brand-button-background);
  border-radius: 2px;
  color: var(--yt-spec-static-brand-white);
  padding: var(--yt-button-padding);
  margin: auto var(--ytd-subscribe-button-margin, 4px);
  white-space: nowrap;
  font-size: var(--ytd-tab-system_-_font-size);
  font-weight: var(--ytd-tab-system_-_font-weight);
  letter-spacing: var(--ytd-tab-system_-_letter-spacing);
  text-transform: var(--ytd-tab-system_-_text-transform);
}

.my-section {
  margin: 20px 5px;
}
.modal-main-content {
  max-height: 70vh;
  overflow: auto;
}

.addModals div {
  width: fit-content;
}
.addModals .main-content * {
  margin: 20px 0;
}
.addModals input {
  position: relative;
  align-items: center;
  background-color: var(--ytd-searchbox-background);
  border: 1px solid var(--ytd-searchbox-legacy-border-color);
  border-right: none;
  border-radius: 2px 0 0 2px;
  box-shadow: inset 0 1px 2px
    var(--ytd-searchbox-legacy-border-shadow-color);
  color: var(--ytd-searchbox-text-color);
  padding: 2px 6px;
  height: 36px !important;
}

.add-folder {
  border: 2px solid rgba(255, 255, 255, 0.589);
  background: transparent;
}

#channels {
  margin: 0 20px;
}
::-webkit-scrollbar{
	width: 10px;
}

::-webkit-scrollbar-track-piece{
	background-color: transparent;
}

::-webkit-scrollbar-thumb{
	background-color: hsl(0, 0%, 18.82%);
  border-radius: 1em;
}

::-webkit-scrollbar-thumb:hover{
	background-color: #909090;
}
#folder-name {
  font-size: 20px;
    color: #ffffffd4;
    text-align: center;
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

<div id="folders-container">
</div>

</div>
<!-- The Modal -->
<div id="myModal" class="modal">
  <!-- Modal content -->
  <div class="modal-content">
    <div id="folder-name">DBMS</div>
    <span class="close">&times;</span>

    <div class="modal-main-content">
      <!-- Channels Section -->
      <div class="my-section">
        <p class="modal-title">Channels</p>
        <div id="channels">
        </div>
      </div>

      <!-- Videos Section -->
      <div class="my-section">
        <div
          class="row"
          style="display: flex; justify-content: space-between; margin-bottom: 10px;"
        >
          <span class="modal-title">Videos</span>
          <div
                id="addVideoModalBtn"
                class="red-button"
                onclick="openAddVideoModal(this)"
              >
                Add Video
              </div>
        </div>
        <div id="videos">
        </div>
      </div>

      <!-- Playlist Section -->
    </div>
  </div>
</div>

<!-- The Add Channel Modal -->
<div id="addChannelModal" class="modal addModals">
  <!-- Modal content -->
  <div class="modal-content">
    <di class="close">&times;</di>
    <div class="main-content">
      <div class="modal-title">Add Channel</div>
      <input type="text" class="channel-name" />
      <button id="addChannelBtn" class="red-button" onclick="addChannel(this)">Add</button>
      <p id="addChannelError">Can't find channel</p>
    </div>
  </div>
</div>


<!-- The Add Video Modal -->
<div id="addVideoModal" class="modal addModals">
  <!-- Modal content -->
  <div class="modal-content">
    <di class="close">&times;</di>
    <div class="main-content">
      <div class="modal-title">Add Video</div>
      <input type="text" class="video-name" placeholder="Enter video ID" />
      <button id="addVideoBtn" class="red-button" onclick="addVideo(this)">
        Add
      </button>
      <p id="addVideoError">Can't find video</p>
    </div>
  </div>
</div>


<!-- The Add Folder Modal -->
<div id="addFolderModal" class="modal addModals">
  <!-- Modal content -->
  <div class="modal-content">
    <di class="close">&times;</di>
    <div class="main-content">
      <div class="modal-title">Create new Folder</div>
      <input type="text" class="folder-name" placeholder="Enter folder name" required/>
      <button id="addFolderBtn" class="red-button" onclick="addFolder(this)">
        Create folder
      </button>
      <p id="addFolderError">Folder name can't be empty</p>
      </div>
  </div>
</div>
`;

document.querySelector("ytd-page-manager.ytd-app").style.marginLeft = "0px";
document.querySelector(body).innerHTML = content;

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

var iconify_script = document.createElement("script");
iconify_script.src = "https://code.iconify.design/1/1.0.7/iconify.min.js";
var el = document.createElement("script");
el.innerHTML += `
      var API_KEY = "INSERT_KEY_HERE";
      function searchResults(e) {
        e.preventDefault();
        var search_text=encodeURIComponent(document.querySelector("#searchText").value);
        window.location.href ='https://www.youtube.com/results?search_query='+encodeURIComponent(search_text).replace('%2520', '+');
    
      }
      document
        .getElementById("my-search")
        .addEventListener("submit", searchResults);

        
      function addFolder(e) {
        folderName = e.parentNode.querySelector("input").value;
        if(folderName!="") {
          folderDetails = saveFolder(folderName);
          addNewFolder(folderDetails);
          addFolderModal.style.display = "none";
          e.parentNode.querySelector("input").value="";
          addFolderError.style.display = "none";
        }
        else {
          showError(addFolderError);
        }
      }

      function fetchFolders() {
        var folders = JSON.parse(localStorage.getItem("myFolders"));
        var folder_container = document.getElementById("folders-container");
        folders_HTML = "";
        for (const property in folders) {
          folder_thumbnail_template = \`
            <div id="\${property}" class="folder" onclick="openFolder('\${property}')">
              <span class="icon"><span class="iconify" data-icon="bx:bxs-folder" data-inline="false"></span></span>
              <span class="folder-name">\${folders[property].name}</span>
            </div>
          \`;
          folders_HTML += folder_thumbnail_template;
        }
        folder_container.innerHTML = folders_HTML + \`
        <div class="folder add-folder" onclick="openAddFolderModal(this)">
        <div class="icon"></div>
        <div class="folder-name">Create Folder</div>
      </div>
      \`;
      }

      function fetchFolderDetail(folderID) {
        var folder = JSON.parse(localStorage.getItem("myFolders"))[folderID];
        return folder;
      }

      fetchFolders();

      function showError(errorNode) {
        console.log("Hello");
        errorNode.style.display = "block";
      }

      function httpGet(theUrl) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", theUrl, false); // false for synchronous request
        xmlHttp.send(null);
        return JSON.parse(xmlHttp.responseText);
      }

      function getChannelDetails(channelId) {
        response = httpGet(
          \`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=\${channelId}&key=\${API_KEY}\`
        );
        no_of_results = response.pageInfo.totalResults;
        if (no_of_results > 0) {
          channel = {
            url: "https://www.youtube.com/channel/" + channelId,
            profile_pic: response.items[0].snippet.thumbnails.default.url,
            name: response.items[0].snippet.title,
          };
          addChannelModal.style.display = "none";
          console.log(channel);
          return channel;
        } else {
          showError(addChannelError);
        }
      }

      
      function getVideoDetails(videoId) {
        response = httpGet(
          \`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=\${videoId}&key=\${API_KEY}\`
        );
        no_of_results = response.pageInfo.totalResults;
        if (no_of_results > 0) {
          video = {
            url: "https://www.youtube.com/watch?v=" + videoId,
            thumbnail: response.items[0].snippet.thumbnails.high.url,
            name: response.items[0].snippet.title,
            uploadedBy: response.items[0].snippet.channelTitle,
          };
          addVideoModal.style.display = "none";
          console.log(video);
          return video;
        } else {
          showError(addVideoError);
        }
      }

      var current_folder_id = "";
      var current_folder_name = "";
      // Get the modal
      var modal = document.getElementById("myModal");
      var addChannelModal = document.getElementById("addChannelModal");
      var addVideoModal = document.getElementById("addVideoModal");
      var addFolderModal = document.getElementById("addFolderModal");

      // Get the button that opens the modal
      var btn = document.getElementById("myBtn");
      var openAddChannelBtn = document.getElementById("openAddChannelModal");
      var addChannelBtn = document.getElementById("addChannelBtn");

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];
      var span1 = document.getElementsByClassName("close")[1];
      var span2 = document.getElementsByClassName("close")[2];
      var span3 = document.getElementsByClassName("close")[3];

      // Error
      var addChannelError = document.getElementById("addChannelError");
      var addVideoError = document.getElementById("addVideoError");
      var addFolderError = document.getElementById("addFolderError");

      // When the user clicks on the button, open the modal
      // btn.onclick = function () {
      //   modal.style.display = "block";
      // };

      // openAddChannelBtn.onclick = function () {
      //   addChannelModal.style.display = "block";
      // };

      function openAddChannelModal(e) {
        addChannelModal.style.display = "block";
      }

      function openAddVideoModal(e) {
        addVideoModal.style.display = "block";
      }
      
      function openAddFolderModal(e) {
        addFolderModal.style.display = "block";
      }

      // addChannelBtn.onclick =
      function addChannel(e) {
        // Get input vale
        channelId = e.parentNode.querySelector(".channel-name").value;
        // get first channel result
        channelDetails=getChannelDetails(channelId);
        if(channelDetails) {
          // save in local storage
          saveChannel(channelDetails);
          // append to channels
          addNewChannel(channelDetails);
          e.parentNode.querySelector("input").value="";
          addChannelError.style.display = "none";
        }
      }

      function addVideo(e) {
        // Get input value
        videoId = e.parentNode.querySelector(".video-name").value;
        // get first video result
        videoDetails = getVideoDetails(videoId);
        if (videoDetails) {
          // save in local storage
          saveVideo(videoDetails);
          // append to videos
          addNewVideo(videoDetails);
          e.parentNode.querySelector("input").value="";
          addVideoError.style.display = "none";
        }
      }

      // When the user clicks on <span> (x), close the modal
      span.onclick = function () {
        modal.style.display = "none";
      };

      span1.onclick = function () {
        addChannelModal.style.display = "none";
      };

      span2.onclick = function () {
        addVideoModal.style.display = "none";
      };

      span3.onclick = function () {
        addFolderModal.style.display = "none";
      };

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
        if (event.target == addChannelModal) {
          addChannelModal.style.display = "none";
        }
        if (event.target == addVideoModal) {
          addVideoModal.style.display = "none";
        }
        if (event.target == addFolderModal) {
          addFolderModal.style.display = "none";
        }
      };

      function addNewChannel(channel) {
        var channels_container = document.getElementById("channels");
        channel_HTML = \`
          <a href="\${channel.url}">
            <div class="channel">
              <img
                class="img-circle"
                src="\${channel.profile_pic}"
                alt=""
              />
              <div class="channel-name">\${channel.name}</div>
            </div>
          </a>
          \`;
        channels_container.innerHTML =
          channel_HTML + channels_container.innerHTML;
      }

      function addNewVideo(video) {
        var videos_container = document.getElementById("videos");
        video_HTML = \`
          <a href="\${video.url}">
          <div
                class="my-video-card"
                style="
                  background: linear-gradient(
                      to bottom,
                      rgba(0, 0, 0, 0) 0%,
                      rgba(0, 0, 0, 0.75) 50%,
                      rgba(0, 0, 0, 0.95) 100%
                    ),
                    url('\${video.thumbnail}')
                      no-repeat;
                "
              >
                <div class="video-text">
                  <div class="video-name">
                    \${video.name}
                  </div>
                  <div class="channel-name">\${video.uploadedBy}</div>
                </div>
              </div>
          </a>
          \`;
        videos_container.innerHTML = video_HTML + videos_container.innerHTML;
      }

      function addNewFolder(folderDetails) {
        var folders_container = document.getElementById("folders-container");
        folder_HTML = \`
          <div id="\${folderDetails[0]}" class="folder" onclick="openFolder('\${folderDetails[0]}')">
          <span class="icon"><span class="iconify" data-icon="bx:bxs-folder" data-inline="false"></span></span>
          <span class="folder-name">\${folderDetails[1].name}</span>
        </div>
          \`;
        folders_container.innerHTML =
          folder_HTML + folders_container.innerHTML;
      }

      function saveChannel(channel) {
        var folders = JSON.parse(localStorage.getItem("myFolders"));
        console.log(folders, current_folder_id, channel)
        folders[current_folder_id].channels.push(channel);
        localStorage.setItem("myFolders", JSON.stringify(folders));
      }
      
      function saveVideo(video) {
        var folders = JSON.parse(localStorage.getItem("myFolders"));
        console.log(folders, current_folder_id, video);
        folders[current_folder_id].videos.push(video);
        localStorage.setItem("myFolders", JSON.stringify(folders));
      }

      function saveFolder(folderName) {
        folders = JSON.parse(localStorage.getItem("myFolders")) || {};
        var key = "folder-" + (Object.keys(folders).length + 1);
        folder = {
          name: folderName,
          channels: [],
          videos: [],
          playlists: [],
        };
        folders[key] = folder;
        localStorage.setItem("myFolders", JSON.stringify(folders));
        return [key, folder];
      }

      function addChannels(channels) {
        var channels_container = document.getElementById("channels");
        channels_HTML = "";
        for (let i = 0; i < channels.length; i++) {
          channel_thumbnail_template = \`
          <a href="\${channels[i].url}">
            <div class="channel">
              <img
                class="img-circle"
                src="\${channels[i].profile_pic}"
                alt=""
              />
              <div class="channel-name">\${channels[i].name}</div>
            </div>
          </a>
          \`;
          channels_HTML += channel_thumbnail_template;
        }
        
        channels_container.innerHTML =
          channels_HTML +
          \`
          <div class="channel" id="openAddChannelModal" onclick="openAddChannelModal(this)">
            <span
              class="iconify img-circle"
              data-icon="carbon:add-alt"
              data-inline="false"
              style="color: rgba(255, 255, 255, 0.192) !important; height: 30px;"
            ></span>
            <div
              class="channel-name"
              style="color: rgba(255, 255, 255, 0.431) !important"
            >
              Add Channel
            </div>
          </div>
        \`;
      }
  

      function addVideos(videos) {
        var videos_container = document.getElementById("videos");
        videos_HTML = "";
        for (let i = 0; i < videos.length; i++) {
          channel_thumbnail_template = \`
          <a href="\${videos[i].url}">
          <div
                class="my-video-card"
                style="
                  background: linear-gradient(
                      to bottom,
                      rgba(0, 0, 0, 0) 0%,
                      rgba(0, 0, 0, 0.75) 50%,
                      rgba(0, 0, 0, 0.95) 100%
                    ),
                    url('\${videos[i].thumbnail}')
                      no-repeat;
                "
              >
                <div class="video-text">
                  <div class="video-name">
                    \${videos[i].name}
                  </div>
                  <div class="channel-name">\${videos[i].uploadedBy}</div>
                </div>
              </div>
            </a>
          \`;
          videos_HTML += channel_thumbnail_template;
        }
        videos_container.innerHTML = videos_HTML;
      }

      function addVideos(videos) {
        var videos_container = document.getElementById("videos");
        videos_HTML = "";
        for (let i = 0; i < videos.length; i++) {
          channel_thumbnail_template = \`
          <a href="\${videos[i].url}">
          <div
                class="my-video-card"
                style="
                  background: linear-gradient(
                      to bottom,
                      rgba(0, 0, 0, 0) 0%,
                      rgba(0, 0, 0, 0.75) 50%,
                      rgba(0, 0, 0, 0.95) 100%
                    ),
                    url('\${videos[i].thumbnail}')
                      no-repeat;
                "
              >
                <div class="video-text">
                  <div class="video-name">
                    \${videos[i].name}
                  </div>
                  <div class="channel-name">\${videos[i].uploadedBy}</div>
                </div>
              </div>
            </a>
          \`;
          videos_HTML += channel_thumbnail_template;
        }
        videos_container.innerHTML = videos_HTML;
      }
      
      function addPlaylists(playlists) {
        var playlists_container = document.getElementById("playlists");
        playlists_HTML = "";
        for (let i = 0; i < playlists.length; i++) {
          channel_thumbnail_template = \`
          <a href="\${channels[i].url}">
            <div class="channel">
              <img
                class="img-circle"
                src="\${channels[i].profile_pic}"
                alt=""
              />
              <div class="channel-name">\${channels[i].name}</div>
            </div>
          </a>
          \`;
          playlists_HTML += channel_thumbnail_template;
        }
        playlists_container.innerHTML =
          playlists_HTML +
          \`
          <div class="channel" id="openAddChannelModal">
            <span
              class="iconify img-circle"
              data-icon="carbon:add-alt"
              data-inline="false"
              style="color: rgba(255, 255, 255, 0.192) !important"
            ></span>
            <div
              class="channel-name"
              style="color: rgba(255, 255, 255, 0.431) !important"
            >
              Add Channel
            </div>
          </div>
        \`;
      }

      function openFolder(folderId) {
        var folderDetails = fetchFolderDetail(folderId);
        console.log(folderDetails);
        current_folder_id = folderId;
        document.querySelector("#folder-name").innerHTML=folderDetails.name;
        modal.style.display = "block";
        addChannels(folderDetails.channels);
        addVideos(folderDetails.videos);
        // addPlaylists(folderDetails.playlists);
      }
      // addFolder("Test");
`;
insertAfter(document.querySelector("ytd-app"), el);
insertAfter(document.querySelector("ytd-app"), iconify_script);
