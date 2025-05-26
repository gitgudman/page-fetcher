const fs = require('fs');
const needle = require('needle');

const url = process.argv[2];
const filePath = process.argv[3];

if (!url || !filePath) {
  console.log("Usage: node fetcher.js <URL> and <local file path>");
  process.exit();
}

needle.get(url, (error, response, body) => {
  if (error) {
    console.error("Request failed:", error.message);
    return;
  }

  fs.writeFile(filePath, body, (err) => {
    if (err) {
      console.error("File write failed:", err.message);
      return;
    }

    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
  });
});
