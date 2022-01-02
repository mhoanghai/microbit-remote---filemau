bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
    ketnoi = 1
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
    ketnoi = 0
})
let ketnoi = 0
bluetooth.startUartService()
basic.showIcon(IconNames.Square)
ketnoi = 0
let dulieuGui = ""
let dulieuNhan = ""
basic.forever(function () {
    if (ketnoi == 1) {
        dulieuNhan = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
        if (dulieuNhan == "up#") {
            basic.showArrow(ArrowNames.North)
        } else if (dulieuNhan == "down#") {
            basic.showArrow(ArrowNames.South)
        } else if (dulieuNhan == "left#") {
            basic.showArrow(ArrowNames.East)
        } else if (dulieuNhan == "right#") {
            basic.showArrow(ArrowNames.West)
        } else if (dulieuNhan == "heart#") {
            basic.showIcon(IconNames.Heart)
        }
    }
})
basic.forever(function () {
    if (ketnoi == 1) {
        dulieuGui = convertToText(input.compassHeading())
        bluetooth.uartWriteString(dulieuGui)
    }
})
