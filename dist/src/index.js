"use strict";

var obj = { a: 1 };

function func() {
	var _this = this;

	setTimeout(function () {
		console.log(_this);
	}, 2000);
}

func.call(obj);
//# sourceMappingURL=index.js.map