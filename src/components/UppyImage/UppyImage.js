// import CustomResize from "./plugins/CustomResize.js";
// import UppyImageCompressor from "./plugins/UppyImageCompressor.js";
function UppyImage(cropperOptions, actions, cb) {
  var uppy = window.Uppy.Core({
    restrictions: { maxNumberOfFiles: 1 },
    browserBackButtonClose: true,
    onBeforeFileAdded: (currentFile, files) => {
      console.log(files);
      const modifiedFile = {
        ...currentFile,
        name: currentFile.name.replace(/ +/g, "-").trim(),
      };
      return modifiedFile;
    }
  })
    .use(window.Uppy.Dashboard, {
      target: "#drag-drop-area",
      autoOpenFileEditor: true,
      proudlyDisplayPoweredByUppy: false,
    })
    .use(window.Uppy.ImageEditor, {
      target: window.Uppy.Dashboard,
      quality: 0.8,
      cropperOptions: {
        viewMode: 1,
        background: false,
        // autoCropArea: 1,
        // responsive: true,
        // initialAspectRatio: 1.33,
        // aspectRatio: 1.33,
        initialAspectRatio: 1.33,
        aspectRatio: 1.33,
        ...cropperOptions,
      },
      actions: {
        revert: true,
        rotate: true,
        flip: true,
        zoomIn: true,
        zoomOut: true,
        cropSquare: false,
        cropWidescreen: false,
        cropWidescreenVertical: false,
        ...actions,
      },
    })
    // CustomResize implemented in Jimp
    // .use(CustomResize,{
    //   target: window.Uppy.Dashboard
    // })
    // .use(window.Uppy.Webcam, { target: window.Uppy.Dashboard,
    //     countdown: false,
    //     mirror: false,
    //     showVideoSourceDropdown: true,
    //     videoConstraints: {
    //         facingMode: { exact: "environment" },
    //         width: { min: 720, ideal: 1280, max: 1920 },
    //         height: { min: 480, ideal: 800, max: 1080 },
    //       },
    //        showRecordingLength: true,
    //  })
    // .use(UppyImageCompressor, {
    //   convertSize: '300',
    //   target: window.Uppy.Dashboard
    // })
    // .use(window.Uppy.XHRUpload, {
    //   endpoint: process.env.REACT_APP_API_BASE_URL + "/assets?folder=test",
    //   method: "post",
    //   fieldName: "file",
    //   responseUrlFieldName: "data",
    //   withCredentials: true,
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Headers": "Access-Control-Allow-Origin",
    //   },
    // });
  //   .use(Uppy.Tus, {endpoint: 'http://mindfulautomations.com/chat_bot_test/api/v1/expense/insert_expense_document',
  //  fieldName: 'files'
  // })
  // uppy.on('file-added', (file) => {
  //   uppy.setFileMeta(file.id, {
  //     size: file.size
  //   })
  // })
  // onBeforeFileAdded: (currentFile, files) => {
  //   const modifiedFile = {
  //     ...currentFile,
  //     name: currentFile.name + '__' + Date.now()
  //   }
  //   return modifiedFile
  // }
  uppy.on("complete", (result) => {
    console.log(result);
    console.log(
      "Upload complete! We’ve uploaded these files:",
      result.successful
    );
    cb(result);
  });

  uppy.getPlugin("Dashboard").openModal();
}

export default UppyImage;