class Camera {
    constructor(config) {
        this.element = config.element

        this.width = config.width || 358
        this.height = config.height || 179

        this.isOn = false

        this.stream = null

        this.constraints = {
            video: true,
            audio: false
        }
    }

    toggleCamera() {
        if (this.isOn) {
            this.turnOff()
        } else {
            this.turnOn()
        }
    }

    async turnOn() {

        if (!this.isOn) {
            this.stream = await navigator.mediaDevices.getUserMedia(this.constraints)

            this.element.srcObject  = this.stream

            this.isOn = true;
        }
    }

    turnOff() {
        if (this.isOn) {
            this.stream.getTracks().forEach(track => {
                track.stop()
            })

            this.element.srcObject = null
            this.stream = null
            this.isOn = false
        }
    }

    init() {
        this.element.width = this.width
        this.element.height = this.height
    }
}