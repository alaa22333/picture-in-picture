//variables
const video = document.querySelector(".video");
const play = document.querySelector(".play");

//promot the user to show media amd dispaly it

async function PromptMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    console.log(mediaStream);
    video.srcObject = mediaStream;
    video.onloadedmetadata = () => {
      video.play();
    };
  } catch {
    console.error();
  }
}
play.addEventListener("click", async () => {
  if (document.pictureInPictureElement) {
    await document.exitPictureInPicture();
    console.log(document.exitPictureInPicture());
  } else {
    await video.requestPictureInPicture();
  }
});

PromptMediaStream();
