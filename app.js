class App {
    constructor(config) {
        this.container = config.container;
        this.elementVideo = this.container.querySelector('.camera');
        this.buttonOn = this.container.querySelector('.buttonOn');

        this.camera = null

        this.canvas = this.container.querySelector('.photo');
        this.buttonTakePhoto = this.container.querySelector('.takePhoto');
    }



    init() {

        this.camera = new Camera({
            element: this.elementVideo,
        })

        this.camera.init()

        this.buttonOn.addEventListener('click', async () => {
            await this.camera.toggleCamera()
        })

        this.buttonTakePhoto.addEventListener('click', () => {
            this.camera.takePhoto(this.canvas)
        })

    }
}