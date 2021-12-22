Component({
	options: {
		virtualHost: true
	},

	properties: {
		value: { type: String, value: '' },
		size: { type: Number, value: 24 },
		color: { type: String, value: '' },
		loading: { type: Boolean, value: false },
		after: { type: Boolean, value: false },
	},

	data: {
		style: ''
	},

	observers: {
		size() {
			let { size } = this.data

			let style = `font-size: ${size}rpx;`

			this.setData({ style })
		}
	},

	externalClasses: ['class', 'icon-class', 'label-class'],
})