socialNetwork.noty = (function () {
	var notifications = {
		error: function (text) {
			$('#notyContainer').noty({ text: text, timeout: 5000, type: 'error', killer: true, maxVisible: 1, layout:'top' });
		},
		success: function (text) {
			$('#notyContainer').noty({ text: text, timeout: 2000, type: 'success', killer: true, maxVisible: 1, layout:'top'  });
		}
	}

	return notifications;
})();