/* Change 1: Adding the image hosting site */
// define the site that hosts stimuli images
// usually https://<your-github-username>.github.io/<your-experiment-name>/
var repo_site = "https://spoggesi.github.io/Qualtrics-test/"; 

/* create timeline */
var timeline = [];

/* define instructions trial */
var instructions = {
    type: "html-keyboard-response",
    stimulus: "<p>You will now carry out the same task.</p>" +
                "<p>This time, please respond to whether you associate the word shown with the yoghurt you have just eaten or your experience of eating this yoghurt.</p>" +
                "<p>There are no incorrect answers, just your opinion.</p>" +
                "<p>Please place your fingers over the F and J keys ready to make your choices.</p>" +
                "<p>Press any key to begin.</p>",
    post_trial_gap: 2000
};
timeline.push(instructions);

/* test trials */

var test_stimuli = [{
        stimulus: '<div style="font-size:60px;">energetic</div>',
        data: {test_part: 'energeticKap', correct_response: 'j'}
    },
    {
        stimulus: '<div style="font-size:60px;">indulgent</div>',
        data: {test_part: 'indulgentKap', correct_response: 'j'}
    },
    {
        stimulus: '<div style="font-size:60px;">nervous</div>',
        data: {test_part: 'nervousKap', correct_response: 'j'}
    },
    {
        stimulus: '<div style="font-size:60px;">relaxed</div>',
        data: {test_part: 'relaxedKap', correct_response: 'j'}
    },
    {
        stimulus: '<div style="font-size:60px;">active</div>',
        data: {test_part: 'activeKap', correct_response: 'j'}
    },
    {
        stimulus: '<div style="font-size:60px;">happy</div>',
        data: {test_part: 'happyKap', correct_response: 'j'}
    },
    {
        stimulus: '<div style="font-size:60px;">uninspired</div>',
        data: {test_part: 'uninspiredKap', correct_response: 'j'}
    },
    {
        stimulus: '<div style="font-size:60px;">classic</div>',
        data: {test_part: 'classicKap', correct_response: 'j'}
    },
    {
        stimulus: '<div style="font-size:60px;">impressed</div>',
        data: {test_part: 'impressedKap', correct_response: 'j'}
    },
    {
        stimulus: '<div style="font-size:60px;">sour</div>',
        data: {test_part: 'sourKap', correct_response: 'j'}
    },
    {
        stimulus: '<div style="font-size:60px;">sweet</div>',
        data: {test_part: 'sweetKap', correct_response: 'j'}
    },
    {
        stimulus: '<div style="font-size:60px;">thick</div>',
        data: {test_part: 'thickKap', correct_response: 'j'}
    },
    {
        stimulus: '<div style="font-size:60px;">creamy</div>',
        data: {test_part: 'creamyKap', correct_response: 'j'}
    },
    {
        stimulus: '<div style="font-size:60px;">healthy</div>',
        data: {test_part: 'healthyKap', correct_response: 'j'}
    },
    {
        stimulus: '<div style="font-size:60px;">tasty</div>',
        data: {test_part: 'tastyKap', correct_response: 'j'}
    }
];

var fixation = {
    type: 'html-keyboard-response',
    stimulus: '<div style="font-size:60px;">+</div>',
    choices: jsPsych.NO_KEYS,
    prompt: '<div class = leftBoxes>press "F" for NO</div> <div class = rightBoxes>press "J" for YES</div>',
    trial_duration: function () {
        return jsPsych.randomization.sampleWithoutReplacement([1000], 1)[0];
    },
    data: {
        test_part: 'fixation'
    }
}

var test = {
    type: "html-keyboard-response",
    stimulus: jsPsych.timelineVariable('stimulus'),
    choices: ['f', 'j'],
    data: jsPsych.timelineVariable('data'),
    prompt: '<div class = leftBoxes>press "F" for NO</div> <div class = rightBoxes>press "J" for YES</div>',
    on_finish: function (data) {
        data.correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
    },
}

var test_procedure = {
    timeline: [fixation, test],
    timeline_variables: test_stimuli,
    repetitions: 3,
    randomize_order: true
}
timeline.push(test_procedure);

/* define debrief */

var debrief_block = {
    type: "html-keyboard-response",
    stimulus: function () {
        var energetic = jsPsych.data.get().filter({test_part: 'energetic'});
        var indulgent = jsPsych.data.get().filter({test_part: 'indulgent'});
        var nervous = jsPsych.data.get().filter({test_part: 'nervous'});
        var relaxed = jsPsych.data.get().filter({test_part: 'relaxed'});
        var active = jsPsych.data.get().filter({test_part: 'active'});
        var happy = jsPsych.data.get().filter({test_part: 'happy'});
        var uninspired = jsPsych.data.get().filter({test_part: 'uninspired'});
        var classic = jsPsych.data.get().filter({test_part: 'classic'});
        var impressed= jsPsych.data.get().filter({test_part: 'impressed'});
        var sour = jsPsych.data.get().filter({test_part: 'sour'});
        var sweet = jsPsych.data.get().filter({test_part: 'sweet'});
        var thick = jsPsych.data.get().filter({test_part: 'thick'});
        var creamy = jsPsych.data.get().filter({test_part: 'creamy'});
        var healthy = jsPsych.data.get().filter({test_part: 'healthy'});
        var tasty = jsPsych.data.get().filter({test_part: 'tasty'});

        var rt_energetic = Math.round(energetic.select('rt').mean());
        var rt_indulgent = Math.round(indulgent.select('rt').mean());
        var rt_nervous = Math.round(nervous.select('rt').mean());
        var rt_relaxed = Math.round(relaxed.select('rt').mean());
        var rt_active = Math.round(active.select('rt').mean());
        var rt_happy = Math.round(happy.select('rt').mean());
        var rt_uninspired = Math.round(uninspired.select('rt').mean());
        var rt_classic = Math.round(classic.select('rt').mean());
        var rt_impressed = Math.round(impressed.select('rt').mean());
        var rt_sour= Math.round(indulgent.select('rt').mean());
        var rt_sweet= Math.round(sweet.select('rt').mean());
        var rt_thick= Math.round(thick.select('rt').mean());
        var rt_creamy= Math.round(creamy.select('rt').mean());
        var rt_healthy= Math.round(healthy.select('rt').mean());
        var rt_tasty= Math.round(tasty.select('rt').mean());
    }
};
