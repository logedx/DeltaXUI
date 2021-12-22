import * as request from '../../utils/request.js'

Component({
	options: {
		virtualHost: true
	},

	properties: {
		value: { type: String, value: '' },
		size: { type: String, value: 'md' },
		color: { type: String, value: '' },
	},

	data: {
		value_: ''
	},

	observers: {
		value() {
			let value_ = this.data.value

			this.setData({ value_ })
		}
	},

	methods: {
		onBindTap() {
			this.setData({ value_: '' })
			this.triggerEvent('input', { value: '' })
		},

		async onUpload() {
			let value_ = await request.upload()

			this.setData({ value_ })
			this.triggerEvent('input', { value: value_ })
		},
	},
})