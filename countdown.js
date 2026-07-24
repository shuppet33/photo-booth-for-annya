class Countdown {
    constructor(config) {
        this.element = config.element

        this.startCurrent = config.end || 3
        this.interval = null
    }

    async start() {
        this.element.innerText = this.startCurrent

        await this.counter(1000)

        this.element.innerText = ''
    }

    counter(ms) {
        let current = this.startCurrent

        return new Promise((resolve) => this.interval = setInterval(() => {
            current -= 1

            if (current === 0) {
                clearInterval(this.interval)
                this.interval = null
                this.element.innerText = ''
                resolve()
                return
            }

            this.element.innerText = current
        }, ms))
    }
}