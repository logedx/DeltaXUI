import * as request from '../../utils/request.js'

Component({
	options: {
		virtualHost: true
	},

	properties: {
		value: { type: Array, value: [] },
		size: { type: String, value: 'md' },
		color: { type: String, value: '' },
	},

	methods: {
		onHandleDeleteTap(e) {
			let { value } = this.data
			let { index } = e.currentTarget.dataset

			value.splice(index, 1)

			this.triggerEvent('input', { value })
		},

		async onHandleInsertTap(e) {
			let { value } = this.data
			let { index } = e.currentTarget.dataset

			let value_ = await request.upload(10)

			value.splice(index, 0, ...value_)

			this.triggerEvent('input', { value })
		},

		async onUpload() {
			let { value } = this.data

			let value_ = await request.upload(10)

			value = value.concat(value_)

			this.triggerEvent('input', { value })
		},
	},
})