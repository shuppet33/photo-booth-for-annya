class Camera {
    constructor(config) {
        this.element = config.element

        this.width = config.width || 358
        this.height = config.height || 179

        this.isOn = false
        this.isStarting = false

        this.stream = null

        this.constraints = {
            video: true,
            audio: false
        }
    }

    takePhoto(canvas) {
        if (!this.isOn) return

        canvas.width = this.element.videoWidth
        canvas.height = this.element.videoHeight

        const context = canvas.getContext('2d')
        context.drawImage(this.element, 0, 0, canvas.width, canvas.height)

    }

    async toggleCamera() {
        if (this.isOn) {
            this.turnOff()
        } else {
            await this.turnOn()
        }
    }

    async turnOn() {
        if (this.isStarting || this.isOn) return

        this.isStarting = true

        try {
            this.stream = await navigator.mediaDevices.getUserMedia(this.constraints)

            this.element.srcObject = this.stream

            this.isOn = true;

        } finally {
            this.isStarting = false
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