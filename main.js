const video = document.querySelector('video');
console.log(video);
const slider = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');
let startY, rate;

function changeRate(e) {
    let coords = slider.getBoundingClientRect();
    //  Get mouse position on slider
    startY = e.clientY - coords.y;
    // console.log(startY, slider.clientHeight);
    
    // Update video speed
    /*
        The max range of playback is to 4, so we find the ratio of the starting position to the slider's height relative to 4
    */
    rate = (startY / slider.clientHeight) * 4;
    console.log(rate);

    /* 
        Since the playback range is between 0.5 and 4, we have to make sure that once rate is less,
        0.5 is shown
    */
    video.playbackRate = rate > 0.5 ? rate : 0.5;

    // update the slider UI
    speedBar.textContent = `${rate.toFixed(2)}×`;
    speedBar.style.setProperty('height', `${(startY / slider.clientHeight) * 100}%`);
}

// On every little movement - 'mousemove' we run changeRate
slider.addEventListener('mousemove', changeRate);