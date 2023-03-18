		// const selectMenu = document.querySelector("#major");  // 선택 목록을 가져와 selectMenu로 저장

		// function displaySelect() {
		// 	let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;		
		// 	alert(`[${selectedText}]를 선택했습니다.`);
		// }		

		// selectMenu.onchange = displaySelect;
		
		//option까지 가기 -> 출력함수 만들기 -> 함수실행

		const selectMenu = document.querySelector("#major");

		function displaySelect(){
			let selectedOption=selectMenu.options[selectMenu.selectedIndex].innerText;
			alert(`${selectedOption}이 선택되었습니다`);
		}

		selectMenu.onchange= displaySelect;