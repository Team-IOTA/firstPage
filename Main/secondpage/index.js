const videoInput = document.getElementById('video-uploaded');
const videoPlayer = document.getElementById('video');

videoInput.addEventListener('change', () => {
	const file = videoInput.files[0];
	const fileURL = URL.createObjectURL(file);
	videoPlayer.current.src = fileURL;
});
