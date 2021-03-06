/*
 * Phonk Example: Linear Acceleration
 */

ui.addTitle(app.name)

var plotX = ui.addPlot(0.1, 0.15, 0.8, 0.1).name('x').range(-10, 10)
var plotY = ui.addPlot(0.1, 0.30, 0.8, 0.1).name('y').range(-10, 10)
var plotZ = ui.addPlot(0.1, 0.45, 0.8, 0.1).name('z').range(-10, 10)

sensors.linearAcceleration.onChange(function (data) {
  plotX.update(data.x)
  plotY.update(data.y)
  plotZ.update(data.z)
})

// start / stop linear acceleration
ui.addToggle(['ON', 'OFF'], 0.1, 0.6, 0.2, 0.1).onChange(function (o) {
  if (o.checked) sensors.linearAcceleration.start()
  else sensors.linearAcceleration.stop()
})
