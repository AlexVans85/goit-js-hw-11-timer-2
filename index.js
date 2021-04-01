// const days = Math.floor(time / (1000 * 60 * 60 * 24))
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
// const secs = Math.floor((time % (1000 * 60)) / 1000)

// new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Jul 17, 2021"),
// })

// const refs = {
//   daysTimer: document.querySelector('[data-value ="days"]'),
//   hoursTimer: document.querySelector('[data-value="hours"]'),
//   minsTimer: document.querySelector('[data-value="mins"]'),
//   secsTimer: document.querySelector('[data-value="secs"]'),
//   targetDate: new Date("Jul 17, 2021"),
// }

// setInterval(
//   () => {
//     // const targetDate = new Date("Jul 17, 2021")
//     const z = new Date()
//     const time = refs.targetDate - z

//     // console.log(time)
//     const days = Math.floor(time / (1000 * 60 * 60 * 24))
//     const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//     const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
//     const secs = Math.floor((time % (1000 * 60)) / 1000)

//     refs.daysTimer.textContent = days
//     refs.hoursTimer.textContent = hours
//     refs.minsTimer.textContent = mins
//     refs.secsTimer.textContent = secs
//   },

//   1000
// )

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate
    const container = document.querySelector(selector)
    this.daysTimer = container.querySelector('[data-value ="days"]')
    this.hoursTimer = container.querySelector('[data-value="hours"]')
    this.minsTimer = container.querySelector('[data-value="mins"]')
    this.secsTimer = container.querySelector('[data-value="secs"]')
  }

  start() {
    this.timerId = setInterval(
      () => {
        // const targetDate = new Date("Jul 17, 2021")
        const z = new Date()
        const time = this.targetDate - z

        // console.log(time)
        const days = Math.floor(time / (1000 * 60 * 60 * 24))
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
        const secs = Math.floor((time % (1000 * 60)) / 1000)

        this.daysTimer.textContent = days
        this.hoursTimer.textContent = hours
        this.minsTimer.textContent = mins
        this.secsTimer.textContent = secs

        if (!time) {
          clearInterval(this.timerId)
        }
      },

      1000
    )
  }
}

const x = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("March 27, 2022"),
})
x.start()
