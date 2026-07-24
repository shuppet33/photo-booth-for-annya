class App {
    constructor(config) {
        this.container = config.container;
        this.elementVideo = this.container.querySelector('.camera');
        this.buttonOn = this.container.querySelector('.buttonOn');

        this.camera = null

        this.canvas = this.container.querySelector('.photo');
        this.buttonTakePhoto = this.container.querySelector('.takePhoto');

        this.countdownElement = this.container.querySelector('.countdown')
        this.countdown = null

        this.isFilming = false
    }


    init() {

        this.camera = new Camera({
            element: this.elementVideo,
        })
        this.camera.init()

        this.countdown = new Countdown({
            element: this.countdownElement
        })

        this.buttonOn.addEventListener('click', async () => {
            await this.camera.toggleCamera()
        })

        this.buttonTakePhoto.addEventListener('click', async () => {
            if (this.isFilming || !this.camera.isOn) return

            this.isFilming = true

            try {
                await this.countdown.start()
                this.camera.takePhoto(this.canvas)

            } finally {

                this.isFilming = false

            }
        })

    }
}