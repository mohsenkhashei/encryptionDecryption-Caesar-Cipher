const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

const createWindow = () => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });

  win.loadFile("./core/index.html");
  win.webContents.openDevTools();
  win.on("closed", () => {
    win = null;
  });
};

app.whenReady().then(() => {
  createWindow();
});

ipcMain.on("form-submission", (event, data) => {
  console.log("Form submitted:", data);
  let dataToSend = {
    text: data.text,
    language: data.language,
    processType: data.processType,
    shiftCount: data.shiftCount,
  };
  const startProcess = require("./encryptOrDecrypt")(dataToSend);
  console.log(startProcess);
  // Here you can handle the form submission data however you like
  // For this example, we'll just send back a message indicating success

  let processType = dataToSend.processType == 0 ? "Encrypt" : "Decrypt";
  let language = "";
  switch (dataToSend.language) {
    case 0:
      language = "English";
      break;
    case 1:
      language = "French";
      break;
    case 2:
      language = "Spanish";
      break;
    case 3:
      language = "Turkish";
      break;

    default:
      language = "English";
  }
  let template = `
  <div class="alert alert-info" ><p>input: ${dataToSend.shiftCount}:${dataToSend.processType}:${dataToSend.language}:${dataToSend.text}</p></div>
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Done!</h4>
  <p>${processType}ing the "<b>${dataToSend.text}</b>" text with shift count of <b>${dataToSend.shiftCount}</b> in <b>${language}</b> language</p>
  <hr>
  <p class="mb-0">${processType}ed text is: <b>${startProcess}</b></p>
</div>`;
  event.sender.send("form-submission-reply", { message: template });
  // event.reply("form-submission-reply", { message: template });
});
