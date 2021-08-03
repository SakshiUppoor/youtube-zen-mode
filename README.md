
# Youtube Zen Mode

Chrome extension for YouTube that removes distractions so you can focus on learning



## Features

- **Simplified home page design**
    
    The recommended videos on the home page are a major source of distraction. This extensions strips down the entire page to just the basics.
    ![App Screenshot](https://raw.githubusercontent.com/SakshiUppoor/youtube-zen-mode/master/media/Screenshot_1.png?token=ALCSI2WAUTR2RE6NOQ7ZFXTBCFH7W)
- **Folders that help you organize better**

    Bookmark channels & videos for easy reference. 
    - **Channels:** You can view & bookmark channels related to the topic of the folder. (Bookmarking channels currently works by providing the channel ID)
    - **Videos:** You can view & bookmark videos you wish to come back to later to a folder. (Bookmarking videos currently works by providing the video ID)
    ![App Screenshot](https://raw.githubusercontent.com/SakshiUppoor/youtube-zen-mode/master/media/Screenshot_2.png?token=ALCSI2WPE3BDZ2UODPUIXFLBCFIBO)
- **Hides recommended videos & comments**
    ![App Screenshot](https://raw.githubusercontent.com/SakshiUppoor/youtube-zen-mode/master/media/Screenshot_3.png?token=ALCSI2RCHSKFJ73M7XMZEE3BCFIC6)

## How it's currently working

- Hiding of unneccessary components such as recommendations & comments is done by using DOM manipulation to turn off their visibility.
- Folders & bookmarking makes use of local storage to save the details of all the folders.

## Run Locally

- Clone the project
    ```bash
    git clone https://github.com/SakshiUppoor/youtube-zen-mode.git
    ```

- Go to the project directory

    ```bash
    cd youtube-zen-mode
    ```
- Generate an API Key for [Youtube Data API](https://console.cloud.google.com/apis/library/youtube.googleapis.com?project=midyear-spot-321704)
- Replace `INSERT_KEY_HERE` in `Content.js` with your API Key 
- Go to Chrome Settings > Chrome Extensions
- Turn on Developer Mode
- Click on the 'Load Unpacked' button
- Select the project folder

The Chrome extenion is now activated! Head on over to [YouTube](https://www.youtube.com/) to check it out!
## Contributing

Contributions are always welcome!
If you have any suggestions or want to make any optimizations in the code, feel free to go ahead!

  
## References

 - [Youtube API Reference](https://developers.google.com/youtube/v3)
 - [Chrome Extension Reference](https://developer.chrome.com/docs/extensions/mv3/getstarted/)
 - [Coding a Chrome Extension Tutorial](https://www.youtube.com/watch?v=zHIryKuhYA4&t=245s)

  
