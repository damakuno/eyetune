const Tone = require("tone")
//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();
//play a middle 'C' for the duration of an 8th note

window.onload = function () {
    document.querySelectorAll(".key").forEach(function(elem, i){
        elem.addEventListener('click', function (e) {
            if (Tone.context.state !== 'running') {
                Tone.context.resume();
            }
            let data = e.currentTarget.dataset;
            synth.triggerAttackRelease(data.note, data.duration);            
        });
    });

};