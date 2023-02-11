let button = document.getElementById('btn');
let input = document.querySelector('.URL-input');
let select = document.querySelector('.opt');
let serverURL = 'http://localhost:4000';

button.addEventListener('click', () => {
	const url = input.value.trim();
	if (!url) return alert('Please enter a YouTube video URL!');
	
	download(url, select.value);
});

async function download(query, format) {
	const res = await fetch(`${serverURL}/download${format}?url=${query}`);
	if(res.status !== 200) return alert("Invalid url!");
	
	const a = document.createElement('a');
  	a.href = `${serverURL}/download${format}?url=${query}`;
  	a.setAttribute('download', '');
	a.click();
}
