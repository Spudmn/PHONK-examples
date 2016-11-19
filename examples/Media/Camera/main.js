/*
 * \\\ Example: Camera
 *
 * Show camera view and capture and image when button is clicked
 * if you are in the WebIDE an image will be shown in the console
 */

// add camera
var camera = ui.addCameraView('back', 0, 0, 1, 1)

ui.addTitle(app.name)

// take a picture and save it
ui.addButton('Take pic', 0.2, 0.8, 0.2, 0.1).onClick(function () {
    camera.takePicture('picture.png', function () {
        console.log('<img src="" + app.servingUrl() + "picture.png"/>')
    })
})

// toggle flash on and off
ui.addToggle('Flash', 0.6, 0.8, 0.2, 0.1).onChange(function (e) {
  camera.turnOnFlash(e.checked)
})
