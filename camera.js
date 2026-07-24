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

    async turnOn() {

        this.stream = await navigator.mediaDevices.getUserMedia(this.constraints)

        this.element.srcObject  = this.stream
        this.element.play()

        this.isOn = true;

        console.log('LOOOG', 'on', this.stream)

        return;


    }

    init() {
        this.element.width = this.width
        this.element.height = this.height
    }
}