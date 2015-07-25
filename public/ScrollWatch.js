var sw = new ScrollWatch({
	onElementInView: function(data) {
		console.log(data.el, '...is now in view');
	}
});