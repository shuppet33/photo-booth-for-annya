class App {
    constructor(config) {
        this.container = config.container;
        this.elementVideo = this.container.querySelector('.camera');
        this.buttonOn = this.container.querySelector('.buttonOn');

        this.camera = null
    }

    init() {

        this.camera = new Camera({
            element: this.elementVideo,
        })

        this.camera.init()

        this.buttonOn.addEventListener('click', async () => {
            await this.camera.turnOn()
        })

    }
}