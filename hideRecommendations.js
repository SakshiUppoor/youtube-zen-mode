setTimeout(function () {
    let search_bar = "#center.ytd-masthead";
    let body = "ytd-browse"; // Recommended videos feed
  
    let elements_to_hide = [
      "ytd-mini-guide-renderer.ytd-app", // Sidebar
      search_bar, // Seachbar in nav
      "#end", // Other buttons in nav
      "#related", // Recommended videos
      "ytd-item-section-renderer" //Comments
    ];
  
    function hasSomeParentTheClass(element, id) {
      console.log(element);
      if (element.id && element.id.indexOf(id) >= 0) return true;
      children = element.childNodes;
      for (let i = 0; i < children.length; i++) {
        if (hasSomeParentTheClass(children[i], id) == true) return true;
      }
      return false;
    }
      
    elements_to_hide.forEach(
      (ele) => (document.querySelector(ele).style.display = "none")
    );

  }, 3000);