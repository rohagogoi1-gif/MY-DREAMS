document.addEventListener("DOMContentLoaded", () => {
  const ADMIN_USER = "ROHAN";
  const ADMIN_PASS = "1234567890";

  loginBtn.onclick = () => {
    if (authUser.value === ADMIN_USER && authPass.value === ADMIN_PASS) {
      loggedAs.textContent = "Logged in as ROHAN";
      adminPanel.classList.remove("hidden");
    } else {
      alert("Wrong login");
    }
  };

  // Better Editor buttons
  boldBtn.onclick = () => insertText("**bold text**");
  italicBtn.onclick = () => insertText("*italic text*");
  clearBtn.onclick = () => editorBox.value = "";

  function insertText(txt) {
    const pos = editorBox.selectionStart;
    const val = editorBox.value;
    editorBox.value = val.slice(0, pos) + txt + val.slice(pos);
    editorBox.focus();
  }

  // ✅ Live preview
  editorBox.oninput = () => {
    livePreview.innerHTML = parseText(editorBox.value);
  };

  function parseText(text) {
    return text
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
      .replace(/\n/g, "<br>");
  }

  // Save Story
  addStoryBtn.onclick = () => {
    const story = {
      title: storyTitle.value,
      tags: storyTags.value.split(","),
      chapters: [{
        title: "Chapter 1",
        content: parseText(editorBox.value)
      }]
    };
    _AS.addStory(story);
    alert("Story saved");
  };
});
