Component({
	options: {
		virtualHost: true
	},

	properties: {
		value: { type: String, value: '' },
		option: { type: Array, value: [] },
		size: { type: String, value: 'sm' },
		color: { type: String, value: '' },
	},

	data: {
		index_: -1
	},

	observers: {
		value() {
			let { value, option } = this.data

			let index_ = option.findIndex(
				v => {
					let value_ = v?.value ?? v

					return value_ === value

				}
			)

			this.setData({ index_ })
		}
	},

	methods: {
		onChecked(e) {
			let { option, index_ } = this.data
			let { index } = e.currentTarget.dataset

			let { disabled } = option[index]

			if (!disabled && index_ !== index) {
				this.setData({ index_: index })
				this.emit()

			}

		},

		emit() {
			let { index_, option } = this.data

			let value = option[index_]

			this.triggerEvent('input', { value })
		}
	},


	externalClasses: ['class'],
})