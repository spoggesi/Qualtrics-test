
/* Change 1: Adding the image hosting site */
// define the site that hosts stimuli images
// usually https://<your-github-username>.github.io/<your-experiment-name>/
var repo_site = "https://spoggesi.github.io/Qualtrics-test/"; 

/* create timeline */
var timeline = [];

/* define welcome message trial */
var welcome_block = {
    type: "html-keyboard-response",
    stimulus: "Welcome to the experiment. Press any key to begin."
};
timeline.push(welcome_block);

/* define instructions trial */
var instructions = {
    type: "html-keyboard-response",
    stimulus: "<p>In this experiment, a circle will appear in the center " +
        "of the screen.</p><p>If the circle is <strong>blue</strong>, " +
        "press the letter F on the keyboard as fast as you can.</p>" +
        "<p>If the circle is <strong>orange</strong>, press the letter J " +
        "as fast as you can.</p>" +
        "<div style='width: 700px;'>" +
        "<div style='float: left;'><img src='" + repo_site + "img/blue.png'></img>" + // Change 2: Adding `repo_site` in `instructions`
        "<p class='small'><strong>Press the F key</strong></p></div>" +
        "<div class='float: right;'><img src='" + repo_site + "img/orange.png'></img>" + // Change 2: Adding `repo_site` in `instructions`
        "<p class='small'><strong>Press the J key</strong></p></div>" +
        "</div>" +
        "<p>Press any key to begin.</p>",
    post_trial_gap: 2000
};
timeline.push(instructions);

/* test trials */

var test_stimuli = [{
        stimulus: '<div style="font-size:60px;">energetic</div>',
        data: {test_part: 'energetic', correct_response: 'j'}
    },
    {
        stimulus: '<div style="font-size:60px;">indulgent</div>',
        data: {test_part: 'indulgent', correct_response: 'j'}
    },
    {
        stimulus: '<div style="font-size:60px;">nervous</div>',
        data: {test_part: 'nervous', correct_response: 'j'}
    },
    {
        stimulus: '<div style="font-size:60px;">relaxed</div>',
        data: {test_part: 'relaxed', correct_response: 'j'}
    },
    {
        stimulus: '<div style="font-size:60px;">active</div>',
        data: {test_part: 'active', correct_response: 'j'}
    },
    {
        stimulus: '<div style="font-size:60px;">happy</div>',
        data: {test_part: 'happy', correct_response: 'j'}
    },
    {
        stimulus: '<div style="font-size:60px;">uninspired</div>',
        data: {test_part: 'uninspired', correct_response: 'j'}
    },
    {
        stimulus: '<div style="font-size:60px;">classic</div>',
        data: {test_part: 'classic', correct_response: 'j'}
    },
    {
        stimulus: '<div style="font-size:60px;">impressed</div>',
        data: {test_part: 'impressed', correct_response: 'j'}
    },
    {
        stimulus: '<div style="font-size:60px;">sour</div>',
        data: {test_part: 'sour', correct_response: 'j'}
    },
    {
        stimulus: '<div style="font-size:60px;">sweet</div>',
        data: {test_part: 'sweet', correct_response: 'j'}
    },
    {
        stimulus: '<div style="font-size:60px;">thick</div>',
        data: {test_part: 'thick', correct_response: 'j'}
    },
    {
        stimulus: '<div style="font-size:60px;">creamy</div>',
        data: {test_part: 'creamy', correct_response: 'j'}
    },
    {
        stimulus: '<div style="font-size:60px;">healthy</div>',
        data: {test_part: 'healthy', correct_response: 'j'}
    },
    {
        stimulus: '<div style="font-size:60px;">tasty</div>',
        data: {test_part: 'tasty', correct_response: 'j'}
    }
];

var fixation = {
    type: 'html-keyboard-response',
    stimulus: '<div style="font-size:60px;">+</div>',
    choices: jsPsych.NO_KEYS,
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
    prompt: '<div class = leftBoxes>NO-F</div> <div class = rightBoxes>YES-J</div>',
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

        var energetic = jsPsych.data.get().filter({
            test_part: 'energetic'
        });
        var indulgent = jsPsych.data.get().filter({
            test_part: 'indulgent'
        });
        var nervous = jsPsych.data.get().filter({
            test_part: 'nervous'
        });
        var relaxed = jsPsych.data.get().filter({
            test_part: 'relaxed'
        });
        var active = jsPsych.data.get().filter({
            test_part: 'active'
        });
        var happy = jsPsych.data.get().filter({
            test_part: 'happy'
        });
        var uninspired = jsPsych.data.get().filter({
            test_part: 'uninspired'
        });
        var classic = jsPsych.data.get().filter({
            test_part: 'classic'
        });
        var impressed= jsPsych.data.get().filter({
            test_part: 'impressed'
        });
        var sour = jsPsych.data.get().filter({
            test_part: 'sour'
        });
        var sweet = jsPsych.data.get().filter({
            test_part: 'sweet'
        });
        var thick = jsPsych.data.get().filter({
            test_part: 'thick'
        });
        var creamy = jsPsych.data.get().filter({
            test_part: 'creamy'
        });
var healthy = jsPsych.data.get().filter({
            test_part: 'healthy'
        });
var tasty = jsPsych.data.get().filter({
            test_part: 'tasty'
        });



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













return "<p>energetic " + rt_energetic + "ms.</p>" +
            "<p>indulgent " + rt_indulgent + "ms.</p>" +
            "<p>Press any key to complete the experiment. Thank you!</p>";

    }
};
