Component({
	data: {
		style: '',
	},

	externalClasses: ['dx-class'],

	lifetimes: {
		ready() {
			wx.onKeyboardHeightChange(res => {
				if (res.height > 0) {
					this.setData({ style: `transition: bottom 0.35s;bottom: ${res.height}px;` })
				} else {
					this.setData({ style: `transition: bottom 0.15s;bottom: 0;` })
				}
			})

		},
	},

	methods: {
		onCatchTap() { },
		onCatchTouchMove() { },

		onOverlayTap() {
			this.triggerEvent('close')
		},
	}
})