Component({
	options: {
		virtualHost: true
	},

	properties: {
		src: { type: Array, value: [] },
		size: { type: Number, value: 128 },
		color: { type: String, value: '' },
		reverse: { type: Boolean, value: false },
		mode: { type: String, value: 'widthFix' },
	},

	externalClasses: ['class'],
})