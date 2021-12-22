Component({
	options: {
		virtualHost: true
	},

	properties: {
		value: { type: Array, value: [] },
		option: { type: Array, value: [] },
		size: { type: String, value: 'sm' },
		color: { type: String, value: 'primary' },
	},

	data: {
		value_: {}
	},

	observers: {
		value() {
			let { value } = this.data

			let value_ = value.reduce((a, b) => (a[b] = true, a), {})

			this.setData({ value_ })
		}
	},

	methods: {
		onChecked(e) {
			let { value_ } = this.data
			let { value } = e.currentTarget.dataset

			value_[value] = !value_[value]

			this.setData({ value_ })
			this.emit()
		},

		emit() {
			let { value_, option } = this.data

			let value = []

			for (let item of option) {
				if (value_[item.value]) value.push(item.value)
			}

			this.triggerEvent('input', { value })
		}
	}
})