Component({
	properties: {
		value: { type: Array, value: [] },
	},

	data: {
		value_: []
	},

	observers: {
		value() {
			let value_ = this.data.value

			this.setData({ value_ })
		}
	},


	methods: {
		onTagTap(e) {
			let { value_ } = this.data
			let [index, index_] = e.currentTarget.dataset.index

			value_[index]['value'].splice(index_, 1)

			if (value_[index]['value']['length'] < 1) {
				value_.splice(index, 1)
			}

			this.setData({ value_ })
			this.triggerEvent('filter', { value: value_ })
		},
	}
})