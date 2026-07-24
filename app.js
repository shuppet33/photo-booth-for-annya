class App {
    constructor(config) {
        this.container = config.container;

        this.camera = null
        this.countdown = null

        this.isFilming = false
    }


    init() {
        const canvas = this.container.querySelector('.photo');
        const elementVideo = this.container.querySelector('.camera');
        const elementCountdown = this.container.querySelector('.countdown')
        const buttonOn = this.container.querySelector('.buttonOn');
        const buttonTakePhoto = this.container.querySelector('.takePhoto')

        this.camera = new Camera({
            element: elementVideo,
        })
        this.camera.init()

        this.countdown = new Countdown({
            element: elementCountdown
        })

        buttonOn.addEventListener('click', async () => {
            if (this.camera.isStarting) return

            await this.camera.toggleCamera()
        })

        buttonTakePhoto.addEventListener('click', async () => {
            if (this.isFilming || !this.camera.isOn) return

            this.isFilming = true

            try {
                await this.countdown.start()
                this.camera.takePhoto(canvas)

            } finally {

                this.isFilming = false

            }
        })

    }
}