Component({
	properties: {
		url: { type: String, value: '' },
		handle: { type: Array, value: [{ text: '删除', color: 'error', event: 'cancel' }] }
	},

	externalClasses: ['dx-class'],

	methods: {
		onViewTap() {
			let { url } = this.data

			this.triggerEvent('tap')

			if (url) wx.navigateTo({ url })
		},

		onHandleTap(e) {
			let { handle } = this.data
			let { index } = e.currentTarget.dataset

			let handle_ = handle[index]

			this.triggerEvent('handle', index)
			if (handle_.event) this.triggerEvent(handle_.event)
		},

	}
})