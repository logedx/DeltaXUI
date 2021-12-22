Component({
	options: {
		virtualHost: true
	},

	properties: {
		src: { type: String, value: '' },
		size: { type: Number, value: 128 },
		color: { type: String, value: '' },
		mode: { type: String, value: 'widthFix' },
	},

	data: {
		style: ''
	},

	observers: {
		size() {
			let { size } = this.data

			let style = `height: ${size}rpx; width: ${size}rpx;`

			this.setData({ style })
		}
	},

	externalClasses: ['class'],
})