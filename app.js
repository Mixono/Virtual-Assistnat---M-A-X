const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Sir");
    }

    else if(hr == 12) {
        speak("Good noon Sir");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Sir");
    }

    else {
        speak("Good Evening Sir");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating System");
    speak("Starting daily protocols");
    speak("Going online");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "Please repeat what you said";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello Sir";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine sir please what may I help you with?";
        speech.text = finalText;
    }

    else if(message.includes('open gmail')) {
        window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
        const finalText = "Opening email";
        speech.text = finalText;
    }

    else if(message.includes('what is your name')) {
        const finalText = "My name is max";
        speech.text = finalText;
    }

    else if(message.includes('open youtube')) {
        window.open("https://youtube.com", "_blank");
        const finalText = "Opening Youtube";
        speech.text = finalText;
    }

    else if(message.includes('open discord')) {
        window.open("https://discord.com/channels/@me", "_blank");
        const finalText = "Opening discord";
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('open github')) {
        window.open("https://github.com/", "_blank");
        const finalText = "Opening github";
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}