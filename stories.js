const STORAGE = "anime_stories";

function uid() {
  return "id_" + Math.random().toString(36).slice(2,9);
}

function loadStories() {
  return JSON.parse(localStorage.getItem(STORAGE)) || [];
}

function saveStories(data) {
  localStorage.setItem(STORAGE, JSON.stringify(data));
}

window._AS = {
  getAll: loadStories,
  getById: id => loadStories().find(s => s.id === id),

  addStory: story => {
    const data = loadStories();
    story.id = uid();
    story.chapters = story.chapters || [];
    data.push(story);
    saveStories(data);
  },

  addChapter: (storyId, chapter) => {
    const data = loadStories();
    const s = data.find(x => x.id === storyId);
    if (!s) return;
    s.chapters.push(chapter);
    saveStories(data);
  }
};
