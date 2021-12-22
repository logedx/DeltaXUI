Component({
	properties: {
		value: { type: String, value: '' },
		placeholder: { type: String, value: '' },
		handle: { type: Array, value: [] },
	},

	methods: {
		onInput(e) {
			let { value } = e.detail

			this.triggerEvent('input', { value })
		},

		onHandle(e) {
			let { index } = e.currentTarget.dataset

			this.triggerEvent('handle', { value: index })
		},
	}
})