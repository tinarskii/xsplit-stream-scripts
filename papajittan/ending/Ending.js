/* Javascript knowledge is required when using the blank template of the custom script.
You will need to call SetText(string) in order to change the text in XSplit Broadcaster Mixer. */

let text = "Ending";
let count = 0;

SetText(text);

setInterval(() => {
    if (count < 3) {
        SetText(text + ".".repeat(count + 1));
        count += 1;
    } else {
        SetText(text);
        count = 0;
    }
}, 1000);