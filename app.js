const pages = document.querySelector(".pages");
let totalPages = 2
let pageData;

function pagenetion(totalPages, page){
	pageData = page;
	let dataTrim = '';
	let active = '';
	let beforePage = page - 1;
	let afterPage = page + 1;

	if(page === 1) {
		afterPage = afterPage + 2;
	}else if(page === 2){
		afterPage = afterPage + 1;
	}
	if(page === totalPages && totalPages > 2) {
		beforePage = beforePage - 2;
	}else if(page === totalPages - 1 && totalPages > 2){
		beforePage = beforePage - 1;
	}



	if(page > 1) {
		dataTrim += `<li class="pages__li prev">
                    		<button type="button" class="pages__btn" onclick='pagenetion(totalPages, ${page - 1})'>
                    		Prev
                    		</button>
                		</li>`;
	}

	if(page > 2 && totalPages > 4) {
		dataTrim += `<li class="pages__li" onclick='pagenetion(totalPages, 1)'>
                    		<button type="button" class="pages__btn">
                    		1
                    		</button>
                		</li>`;
        if(page > 3) {
        	dataTrim += `<li class="pages__li">
                    <button type="button" class="pages__btn dots">
                    ...
                    </button>
                	</li>`
        }
	}

	for (let pagePath = beforePage; pagePath <= afterPage; pagePath++){
		console.log(pagePath)
		if(pagePath > totalPages){
			continue;
		}
		if(pagePath === 0){
			pagePath = pagePath + 1;
		}
		if(page == pagePath) {
			active = "active";
		}else {
			active = '';
		}

		dataTrim += `<li class="pages__li">
                    	<button type="button" class="pages__btn ${active}" onclick='pagenetion(totalPages, ${pagePath})'>
                    	${pagePath}
                    	</button>
                	</li>`;
	}
	if(page < totalPages - 1 && totalPages > 4) {
		
        if(page < totalPages - 2) {
        	dataTrim += `<li class="pages__li">
                    <button type="button" class="pages__btn dots">
                    ...
                    </button>
                	</li>`
        }
        dataTrim += `<li class="pages__li" onclick='pagenetion(totalPages, ${totalPages})'>
                    		<button type="button" class="pages__btn">
                    		${totalPages}
                    		</button>
                		</li>`;
	}
	if(page < totalPages){
			dataTrim += `<li class="pages__li next">
                    		<button type="button" class="pages__btn" onclick='pagenetion(totalPages, ${page + 1})'>
                    		Next
                    		</button>
                		</li>`;
	}

	pages.innerHTML = dataTrim;
	// console.log(pageData)
}

pagenetion(totalPages, 1);

