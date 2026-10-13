async function clearHistory() {
  try {
    await chrome.history.deleteAll();
  } catch (e) {
    console.error("It wasn't possible to delete your navigator history:", e);
  }
}

chrome.runtime.onStartup.addListener(clearHistory);
