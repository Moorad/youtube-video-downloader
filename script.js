let Btn = document.getElementById('btn');
let URLinput = document.querySelector('.URL-input');
let select = document.querySelector('.opt');
let serverURL = 'http://localhost:4000';

Btn.addEventListener('click', () => {
	if (!URLinput.value) {
		alert('Enter YouTube URL');
	} else {
		if (select.value == 'mp3') {
			downloadMp3(URLinput.value);
		} else if (select.value == 'mp4') {
			downloadMp4(URLinput.value);
		}
	}
});

async function downloadMp3(query) {
	const res = await fetch(`${serverURL}/downloadmp3?url=${query}`);
	if(res.status == 200) {
		var a = document.createElement('a');
  		a.href = `${serverURL}/downloadmp3?url=${query}`;
  		a.setAttribute('download', '');
		a.click();
	} else if(res.status == 400) {
		alert("Invalid url");
	}
}

async function downloadMp4(query) {
	const res = await fetch(`${serverURL}/downloadmp4?url=${query}`);
	if(res.status == 200) {
		var a = document.createElement('a');
  		a.href = `${serverURL}/downloadmp4?url=${query}`;
  		a.setAttribute('download', '');
		a.click();
	} else if(res.status == 400) {
		alert('Invalid url');
	}
}