Component({
	letter: [],
	letter_: -1,

	properties: {
		value: { type: String, value: '' },
		color: { type: String, value: '' },
		more: { type: Boolean, value: false },
	},

	data: {
		letter: -1,
		letter_: [
			'A', 'B', 'C', 'D', 'E', 'F', 'G',
			'H', 'I', 'J', 'K', 'L', 'M', 'N',
			'O', 'P', 'Q', 'R', 'S', 'T', 'U',
			'V', 'W', 'X', 'Y', 'Z', '#'
		],

		index_: false,
	},

	observers: {
		value() {
			let { value, letter_ } = this.data

			let letter = letter_.indexOf(value)

			this.setData({ letter })
		}
	},

	lifetimes: {
		ready() {
			let { letter_ } = this.data
			let query = this.createSelectorQuery()

			this.letter = []

			query.select('.letter').boundingClientRect(res => {
				let height_ = res.height / letter_.length

				for (let i = 0; i < letter_.length; i++) {
					let early = Math.ceil(i * height_ + res.top + 1)
					let last = Math.ceil(i * height_ + height_ + res.top)

					this.letter.push([early, last])
				}
			}).exec()
		}
	},

	methods: {
		onCatchTouchMove() { },

		onMoreTap(e) {
			this.triggerEvent('more', e)
		},

		onLetterTouchStart(e) {
			let [touch] = e.touches
			let { letter } = this.data

			this.letter_ = letter
			this.findIndex(touch.clientY)
		},

		onLetterTouchEnd() {
			let { letter, letter_ } = this.data

			if (letter === this.letter_) {
				this.setData({ index_: false, letter: -1 })
				this.triggerEvent('change', { value: '' })

			} else {
				this.setData({ index_: false })
				this.triggerEvent('change', { value: letter_[letter] })
			}

		},

		onLetterTouchMove(e) {
			let [touch] = e.touches

			this.findIndex(touch.clientY)
		},

		findIndex(y) {
			let letter = 0

			for (let [early, last] of this.letter) {
				if (early < y && last < y) {
					letter = letter + 1
				} else {
					break
				}
			}

			letter = Math.min(letter, this.letter.length - 1)

			this.setData({ letter, index_: true })
		}

	}
})