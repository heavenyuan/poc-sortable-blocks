document.addEventListener("DOMContentLoaded", function () {
	var $body = document.querySelector(".content");
	var $rt = document.querySelector(".roll-top");
	var $rb = document.querySelector(".roll-bottom");
	var pu = false,
		pd = false,
		pplus = 10;

	var moveBlock = null;
	var cy; // clientY (視口座標)
	var lastTargetBlock = null; // 記錄上次移動的目標區塊

	// 用於儲存元素資料的 WeakMap
	var elementData = new WeakMap();

	function mousedown(e) {
		cy = e.clientY;
		moveBlock = e.target.parentElement;
		moveBlock.classList.add("block-press");

		$body.classList.add("disable-select");
		window.addEventListener("mousemove", mousemove);
		window.addEventListener("mouseup", mouseup);
		$rt.style.display = "block";
		$rb.style.display = "block";
	}

	function mousemove(e) {
		cy = e.clientY;
		var targetBlock = getTargetBlock(e.pageY);

		// 當滑鼠離開上次目標區塊時，重置 lastTargetBlock
		if (targetBlock !== lastTargetBlock) {
			lastTargetBlock = null;
		}

		moveToPosition(targetBlock);
	}

	function mouseup(e) {
		$body.classList.remove("disable-select");
		window.removeEventListener("mousemove", mousemove);
		window.removeEventListener("mouseup", mouseup);
		$rt.style.display = "none";
		$rb.style.display = "none";
		pu = pd = false;

		if (moveBlock) {
			moveBlock.classList.remove("block-press");
			moveBlock = null;
		}
		lastTargetBlock = null;
	}

	function getTargetBlock(pageY) {
		var blocks = Array.from(document.querySelectorAll(".block-base"));

		for (var i = 0; i < blocks.length; i++) {
			var block = blocks[i];
			if (block === moveBlock) continue; // 跳過自己

			var rect = block.getBoundingClientRect();
			var top = rect.top + (window.pageYOffset || document.documentElement.scrollTop);
			var bottom = top + rect.height;

			// 只要滑鼠在這個區塊範圍內就返回
			if (pageY >= top && pageY <= bottom) {
				return block;
			}
		}

		return null; // 不在任何區塊內
	}

	function moveToPosition(targetBlock) {
		if (!targetBlock) return;

		// 如果目標區塊與上次相同，不再移動
		if (targetBlock === lastTargetBlock) return;

		var blocks = Array.from(document.querySelectorAll(".block-base"));
		var currentIndex = blocks.indexOf(moveBlock);
		var targetIndex = blocks.indexOf(targetBlock);

		if (currentIndex === targetIndex) {
			return; // 已經在目標位置
		}

		// 直接移動到目標區塊的位置
		if (currentIndex < targetIndex) {
			// 往下移動：插入到目標區塊後面
			targetBlock.insertAdjacentElement("afterend", moveBlock);
		} else {
			// 往上移動：插入到目標區塊前面
			targetBlock.insertAdjacentElement("beforebegin", moveBlock);
		}

		lastTargetBlock = targetBlock;
	}

	function update() {
		if (pu || pd) {
			var top = window.pageYOffset || document.documentElement.scrollTop;
			if (pu) {
				top -= pplus;
			} else if (pd) {
				top += pplus;
			}
			window.scrollTo(0, top);
		}
		requestAnimationFrame(update);
	}

	function pageup(e) {
		pd = false;
		pu = true;
	}

	function pagedown(e) {
		pu = false;
		pd = true;
	}

	function pagenormal(e) {
		pu = pd = false;
	}

	function scroll(e) {
		if (!moveBlock) return;

		var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
		var pageY = cy + currentScroll;
		var targetBlock = getTargetBlock(pageY);

		// 當滑鼠離開上次目標區塊時，重置 lastTargetBlock
		if (targetBlock !== lastTargetBlock) {
			lastTargetBlock = null;
		}

		moveToPosition(targetBlock);
	}

	function Block(options) {
		var div = document.createElement("div");
		div.className = "block-base";
		var height = Math.floor(Math.random() * 100) + 200;
		// div.style.height = height + "px";
		div.innerHTML = '<div class="touch-zone"></div>' + options.id;
		elementData.set(div, { h: height, id: options.id });
		return div;
	}

	// 初始化：建立 10 個區塊
	for (var i = 0; i < 10; i++) {
		$body.appendChild(new Block({ id: i }));
	}

	// 事件綁定
	document.addEventListener("mousedown", function (e) {
		if (e.target.classList.contains("touch-zone")) {
			mousedown(e);
		}
	});
	document.addEventListener("scroll", scroll);
	$rt.addEventListener("mouseenter", pageup);
	$rb.addEventListener("mouseenter", pagedown);
	$rt.addEventListener("mouseleave", pagenormal);
	$rb.addEventListener("mouseleave", pagenormal);

	update();
});
