export const playAudio = (audioRef,isPlay)=>{
    if (isPlay) {
        const playPromise = audioRef.current.play();
        // console.log(typeof playPromise)
        if (playPromise !== undefined) {
          playPromise.then((audio) => audioRef.current.play());
          console.log('I am run')
        }
      }
}