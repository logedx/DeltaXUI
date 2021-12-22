Component({
	properties: {
		src: { type: String, value: '' },
		value: { type: String, value: '' },
		url: { type: String, value: '' },
		readonly: { type: Boolean, value: false },
		handle: { type: Array, value: [{ text: '删除', color: 'error', event: 'cancel' }] },
	},

	data: {
		handle_: false,
		animation: null
	},

	methods: {
		onNavigateTo() {
			let { url } = this.data

			if (url) wx.navigateTo({ url })
		},

		onLongPress() {
			let { readonly } = this.data

			if (!readonly) this.setData({ handle_: true })
		},

		onCancelHandle() {
			this.setData({ handle_: false })
		},

		onHandleTap(e) {
			let { handle } = this.data
			let { index } = e.currentTarget.dataset

			let handle_ = handle[index]

			this.triggerEvent('handle', index)
			if (handle_.event) this.triggerEvent(handle_.event)
		}
	}
})