Component({
	properties: {
		size: { type: String, value: 'md' },
		color: { type: String, value: '' },
		label: { type: String, value: '' },
		tail: { type: Boolean, value: false },
		more: { type: Boolean, value: false },
		filter: { type: Array, value: [] }
	},

	methods: {
		onMore(e) {
			this.triggerEvent('more', e)
		},

		onFilter(e) {
			this.triggerEvent('filter', e.detail)
		}
	}
})