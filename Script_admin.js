document.addEventListener("DOMContentLoaded", () => {
  const ADMIN_USER = "ROHAN";
  const ADMIN_PASS = "1234567890";
  let currentStoryId = null;

  loginBtn.onclick = () => {
    if (authUser.value === ADMIN_USER && authPass.value === ADMIN_PASS) {
      loggedAs.textContent = "Logged in as ROHAN";
      adminPanel.classList.remove("hidden");
    } else {
      alert("Wrong login");
    }
  };

  addStoryBtn.onclick = () => {
    const newStory = {
      title: storyTitle.value,
      tags: storyTags.value.split(","),
      chapters: [{
        title: "Chapter 1",
        content: storyContentInput.value
      }]
    };
    _AS.addStory(newStory);
    alert("Story created");
  };

  // ✅ Chapter creator
  const chapInput = document.createElement("input");
  chapInput.placeholder = "New Chapter Title";
  const chapBtn = document.createElement("button");
  chapBtn.textContent = "Add Chapter";

  adminPanel.appendChild(chapInput);
  adminPanel.appendChild(chapBtn);

  chapBtn.onclick = () => {
    const all = _AS.getAll();
    const last = all[all.length - 1];
    if (!last) return alert("Create a story first!");

    _AS.addChapter(last.id, {
      title: chapInput.value,
      content: "<p>New chapter</p>"
    });

    alert("Chapter added!");
  };
});
