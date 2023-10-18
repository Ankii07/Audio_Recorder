const mediaSelector = document.getElementById("media");

let t = document.querySelector('textarea');

let selectedMedia = null;
mediaSelector.addEventListener("change", (e) => {

	
	selectedMedia = e.target.value;
	console.log(selectedMedia);
	console.log(typeof (selectedMedia));


	let t1 = Math.floor(Math.random() * 10) + 1;
	console.log(selectedMedia === "English");
	if (selectedMedia == "English") {
		switch (t1) {
			case 0:
				t.innerText = "Sunday";
				break;
			case 1:
				t.innerText = "Monday";
				break;
			case 2:
				t.innerText = "Tuesday";
				break;
			case 3:
				t.innerText = "Wednesday";
				break;
			case 4:
				t.innerText = "Thursday";
				break;
			case 5:
				t.innerText = "Friday";
				break;
			case 6:
				t.innerText = "Saturday";
			case 7:
				t.innerText = "jack";
				break;
			case 8:
				t.innerText = "daniel";
				break;
			case 9:
				t.innerText = "harry";
				break;
			case 10:
				t.innerText = "katty";
		}
	}
	else {
		switch (t1) {
			case 0:
				t.innerText = "Somarr";
				break;
			case 1:
				t.innerText = "Moabj";
				break;
			case 2:
				t.innerText = "budhwar";
				break;
			case 3:
				t.innerText = "saniwar";
				break;
			case 4:
				t.innerText = "behspatiwar";
				break;
			case 5:
				t.innerText = "narayan";
				break;
			case 6:
				t.innerText = "harendr";
			case 7:
				t.innerText = "maneswr";
				break;
			case 8:
				t.innerText = "raju";
				break;
			case 9:
				t.innerText = "hari";
				break;
			case 10:
				t.innerText = "bhism";
		}
	}
});

const audioMediaConstraints = {
	audio: true,
	video: false,
};

let chunks = [];


function startRecording(
	thisButton, otherButton) {

	document.getElementById('start-aud-recording').innerText="recording....";
	navigator.mediaDevices.getUserMedia(audioMediaConstraints)
		.then((mediaStream) => {


			const mediaRecorder = new MediaRecorder(mediaStream);


			window.MediaStream = mediaStream;

			window.MediaRecorder = mediaRecorder;

			mediaRecorder.start();


			mediaRecorder.ondataavailable = (e) => {
                chunks.push(e.data);
			};


			mediaRecorder.onstop = () => {


				const blob = new Blob(chunks, { type: "audio/mpeg" });
				console.log(chunks[0]);
				chunks = [];


				const recordedMedia = document.createElement("audio");
				recordedMedia.style.display = "none";
				recordedMedia.controls = true;


				const recordedMediaURL = URL.createObjectURL(blob);




				recordedMedia.src = recordedMediaURL;


				let downloadButton = document.getElementById("download")
				downloadButton = document.createElement("a");


				downloadButton.download = "Recorded-Media";

				downloadButton.href = recordedMediaURL;
				downloadButton.innerText ="download";

				downloadButton.onclick = () => {


					URL.revokeObjectURL(recordedMedia);
				};

				document.getElementById(
					`start-aud-recording`).append(
						recordedMedia, downloadButton);
			};


			thisButton.disabled = true;
			otherButton.disabled = false;
		});
}

function stopRecording(thisButton, otherButton) {

	document.getElementById('start-aud-recording').innerText="Start recording";
	window.MediaRecorder.stop();


	window.MediaStream.getTracks()
		.forEach((track) => {
			track.stop();
		});


	thisButton.disabled = true;
	otherButton.disabled = false;
} 