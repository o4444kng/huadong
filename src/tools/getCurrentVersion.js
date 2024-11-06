let lastResult = [];
function compare(result) {
  console.log(result, lastResult);
  if (lastResult.length === 0) {
    lastResult = [...result];
    return true;
  }
  if (JSON.stringify(lastResult) === JSON.stringify(result)) {
    return true;
  } else {
    lastResult = [...result];
    return false;
  }
}

function showConfirmationDialog() {
  console.log("showConfirmationDialog");
  // 显示一个确认对话框，返回值为true表示用户点击了"允许"
  if (confirm("您允许执行这段代码吗？")) {
    // 用户点击了"允许"，执行下面的代码
    // 在这里添加你要执行的代码
    window.location.reload();
    // 例如，改变页面背景颜色
  } else {
    // 用户点击了"取消"
    alert("用户取消了操作。");
  }
}

async function getCurrentVersion() {
  try {
    let response = await fetch("/");
    let htmlString = await response.text();
    const versionRegex = /<version>(.*?)<\/version>/;
    let match = htmlString.match(versionRegex);
    if (match) {
      const result = compare([...match]);
      console.log("result = ", result);
      if (!result) {
        // window.location.reload()
        showConfirmationDialog();
      }
    }
  } catch (error) {
    console.error("Error fetching the current page:", error);
  }
}

export default function startGetCurrentVersion() {
  setInterval(getCurrentVersion, 5000); // 每5秒检查一次
}

// requestIdleCallback()
// requestAnimationFrame()