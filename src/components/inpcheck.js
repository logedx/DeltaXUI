Component({
	properties: {
		value: { type: String, optionalTypes: [Number], value: '' },
		type: { type: String, value: 'text' },
		min: { type: Number, optionalTypes: [Infinity], value: -Infinity },
		max: { type: Number, optionalTypes: [Infinity], value: Infinity },
		icon: { type: String, value: 'write' },
		name: { type: String, value: '' },
		placeholder: { type: String, value: '' },
		loading: { type: Boolean, value: false },
		required: { type: Boolean, value: false },
		focus: { type: Boolean, value: false },
		handle: { type: Array, value: [] },
	},

	data: {
		focus_: false,
	},

	observers: {
		value() {
			let { focus } = this.data

			if (focus) {
				setTimeout(() => {
					this.setData({ focus_: true })
				}, 150)
			}
		}
	},

	lifetimes: {
		ready() {
			let { focus } = this.data

			if (focus) {
				setTimeout(() => {
					this.setData({ focus_: true })
				}, 150)
			}
		}

	},

	methods: {
		onInput(e) {
			let { value } = e.detail

			this.setData({ value })
		},

		onCheck() {
			let { value, type, min, max, name, loading, required } = this.data

			if (!loading) {
				switch (type) {
					case 'text': {
						if (value || !required) {
							this.triggerEvent('input', { value })
						} else {
							wx.showToast({ title: `${name}不能为空`, icon: 'none' })
						}

						break
					}

					case 'digit':
					case 'number':
						value = parseFloat(value) || 0
						value = Math.max(value, min)
						value = Math.min(value, max)

						this.triggerEvent('input', { value })

						break


				}

			}

		},

		onHandle(e) {
			let { loading, handle } = this.data
			let { index } = e.currentTarget.dataset

			if (!loading) this.triggerEvent(handle[index])
		},

	}
})