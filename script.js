const videoElement = document.getElementById('video');
const button = document.getElementById('button');
// const refreshBut = document.getElementById('refresh-but');

// Prompt user to select a media stream, pass to video element, and play it
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch error here
        console.log('Whoops! An error occur:', error);
        button.disabled = true;
    }
}

// Event listener for button
button.addEventListener('click', async () => {
    // Disable the button when we click on it
    button.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset button
    button.disabled = false;
});

// On load
selectMediaStream();