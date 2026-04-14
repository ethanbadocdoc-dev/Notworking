const chestScene = document.getElementById("chest-screen");
const options = document.getElementById("options-screen");
const lockchestScreen = document.getElementById("Lockedchest-screen");
const lockscreen = document.getElementById("lock-screen");

const SonnetScene = document.getElementById("Sonnet-screen");
const LetterScene = document.getElementById("Letter-screen");
const ScienceScene = document.getElementById("Science-screen");
const ReasonScene = document.getElementById("Reasons-screen");

const sonnetbtn = document.querySelector(".clickable-icon[alt='Sonnet']");
const letterbtn = document.querySelector(".clickable-icon[alt='Letter']");
const sciencebtn = document.querySelector(".clickable-icon[alt='Science']");
const reasonbtn = document.querySelector(".clickable-icon[alt='Reasons']");
const returnbtn = document.querySelectorAll(".clickable-icon[alt='Return']");

const chestAudio = document.getElementById("chest-audio");
const optionAudio = document.getElementById("option-audio");


chestScene.addEventListener("click", () => {
    console.log("Chest Clicked");
    chestScene.style.display = "none";
    options.style.display = "flex";
    chestAudio.pause();
    optionAudio.play();
});

lockchestScreen.addEventListener("click", () => {
    console.log("LockChest Clicked");
    lockchestScreen.style.display = "none";
    lockscreen.style.display = "flex";
    
});

sonnetbtn.addEventListener("click", () => {
    console.log("Sonnet Clicked");
    options.style.display = "none";
    SonnetScene.style.display = "flex";
})

letterbtn.addEventListener("click", () => {
    console.log("Letter Clicked");
    options.style.display = "none";
    LetterScene.style.display = "flex";
})

sciencebtn.addEventListener("click", () => {
    console.log("Science Clicked");
    options.style.display = "none";
    ScienceScene.style.display = "flex";
})

reasonbtn.addEventListener("click", () => {
    console.log("Reasons Clicked");
    options.style.display = "none";
    ReasonScene.style.display = "flex";
})

returnbtn.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("Return Clicked");
        SonnetScene.style.display = "none";
        LetterScene.style.display = "none";
        ScienceScene.style.display = "none";
        ReasonScene.style.display = "none";
        options.style.display = "flex";
    })})


const loginForm = document.querySelector('form');
const wrapper = document.querySelector('.wrapper');
const chestScreen = document.getElementById('chest-screen');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

   
    const usernameInput = document.querySelector('input[type="text"]').value;
    const passwordInput = document.querySelector('input[type="password"]').value;
    const correctEmail = "Niyana"; 
    const correctPassword = "041525";      

    if (usernameInput === correctEmail && passwordInput === correctPassword) {
        wrapper.style.display = "none";
        chestScreen.style.display = "flex";
        chestAudio.play();
        console.log("Login Successful!");
    } else {
        alert("Incorrect Email or Password. Please try again.");
    }
})

// --- EASTER EGG: type "<3" anywhere to trigger ---
const easterModal = document.getElementById("easter-modal");
const easterError = document.getElementById("easter-error");
const easterCloseBtn = document.getElementById("easter-close-btn");
const secretScreen = document.getElementById("Secret-screen");
const pinDigits = document.querySelectorAll(".easter-pin-digit");

// Auto-advance pin digits
pinDigits.forEach((digit, i) => {
  digit.addEventListener("input", () => {
    digit.value = digit.value.replace(/[^0-9]/g, "");
    if (digit.value && i < pinDigits.length - 1) {
      pinDigits[i + 1].focus();
    }
    // Check if all filled
    const code = [...pinDigits].map(d => d.value).join("");
    if (code.length === 6) checkEasterCode(code);
  });

  digit.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && !digit.value && i > 0) {
      pinDigits[i - 1].focus();
    }
  });
});

function checkEasterCode(code) {
  if (code === "791219") {
    easterModal.classList.remove("active");
    easterError.textContent = "";
    // Hide all screens, show secret
    document.getElementById("options-screen").style.display = "none";
    document.getElementById("Sonnet-screen").style.display = "none";
    document.getElementById("Letter-screen").style.display = "none";
    document.getElementById("Science-screen").style.display = "none";
    document.getElementById("Reasons-screen").style.display = "none";
    secretScreen.style.display = "flex";
  } else {
    easterError.textContent = "Wrong code. Try again 💔";
    pinDigits.forEach(d => d.value = "");
    pinDigits[0].focus();
  }
}

// Close modal on X button
easterCloseBtn.addEventListener("click", () => {
  easterModal.classList.remove("active");
  easterError.textContent = "";
});

// Secret screen return button
secretScreen.querySelector(".clickable-icon[alt='Return']").addEventListener("click", () => {
  secretScreen.style.display = "none";
  document.getElementById("options-screen").style.display = "flex";
});

let lastKey = "";

document.addEventListener("keydown", (e) => {
  if (["Shift", "Control", "Meta", "Alt", "CapsLock", "Unidentified"].includes(e.key)) return;

  console.log("lastKey:", lastKey, "| current:", e.key);

  if (lastKey === "<" && (e.key === "3" || e.key === "#")) {
    lastKey = "";
    easterModal.classList.add("active");
    pinDigits.forEach(d => d.value = "");
    easterError.textContent = "";
    pinDigits[0].focus();
  } else {
    lastKey = e.key;
  }
}, true);

// SONNET POPUP
const sonnetPopup = document.getElementById("sonnet-popup");
const sonnetPopupBody = document.getElementById("sonnet-popup-body");
const sonnetPopupTitle = document.querySelector(".sonnet-popup-title");
const sonnetPopupClose = document.getElementById("sonnet-popup-close");

const sonnets = {
  "Sonnet1": {
    title: "Sonnet 1",
    content: `
      <p>When I first laid eyes on your gentle face,<br>
      I saw a star that cannot be contained,<br>
      You took replete of this niche with your grace,<br>
      A loving truth this barren heart sustained.<br><br>

      Though time so cruel attempts to bring the night,<br>
      Your radiance holds continuous and whole,<br>
      Your presence guides my crumbling road to light,<br>
      A love where no universe can control.<br><br>

      For earthly beauty suffers decay,<br>
      Your inner beauty shows a spirit true,<br>
      And I shall love you till my dying day,<br>
      And hold this image constant in my view.<br><br>

      As long as there are eyes that wake to see,<br>
      So long this loving verse shall be with thee.</p>`
  },
  
  "Sonnet2": {
    title: "Sonnet 2",
    content: `<p>When my perception was a muted,<br>
As I walk through this melancholic tomb,<br>
As I had wish that time would turn to stone,<br>
Consumed by deep and existential gloom,<br><br>

My selfhood lacked the axis of,<br>
As for your passing beauty proved but,<br>
My soul searched a telos, I can call mine,<br>
For fractured was the pneuma’s greatest grain,<br><br>

But love grants the soul to finally rest,<br>
binds the scattered pieces of my essence,<br>
Love gives and puts the heart to test,<br>
By your noumenal and certain presence,<br><br>

That bond remains the universal decree<br>
The only perfect truth felt real to me.</p>`
  },
 
  "Sonnet3": {
    title: "Sonnet 3",
    content: `<p>If something is defined by what its,<br>
And ev’ry form demand a framing lack,<br>
Then my existence is a dispersed formless blot,<br>
A potential waiting for the void to crack,<br><br>

You grasp the key to the selves I forgot,<br>
The phantom lives that passed beyond my ken,<br>
As you’re the guardian of the thing I sought,<br>
The perfect truth that shows my own ren,<br><br>

Yet by this perfect frame, my love is bound,<br>
I yield this chaos for your gentle grace,<br>
The lost path that my exodus has found,<br>
The zenith domain for this mortal space,<br><br>

My soul avowed this sapience deep and true,<br>
The only vital thing I found is you.</p>`
  },
  "Sonnet4": {
    title: "Sonnet 4",
    content: `<p>Thou may compare thee to the mains breeze,<br>
That grants the heavy chest its crucial air,<br>
Allaying weary heat and granting please,<br>
The one breath of life that expels despair,<br><br>

Thee’s immense light like dawns shine did ascend,<br>
When from the strand my course was all forsaken,<br>
My truest compass ever points to you tend,<br>
And all my latent purpose has awakened,<br><br>

Though dusk plunders summers golden radiance,<br>
The constant light in your heart stays true,<br>
Claiming eternal, loving dominance,<br>
It remains the clearest scene in my view,<br><br>

Against the decay of the world and turning tide,<br>
My anchored soul shall forever abide.</p>`
  },
 
  "Sonnet5": {
    title: "Sonnet 5",
    content: `<p>Facing the shifting sands of,<br>
Where ev’ry halcyon comes to an end,<br>
I searched a logic in the vacancy,<br>
A divine law one cannot merely bend,<br><br>

For Gaia seeks the cold and chaos state,<br>
A slow melting of the ones ordered mind,<br>
I feared the cross of accidental fate,<br>
And all the empty joy it leaves behind,<br><br>

But you arise, a symmetry sublime,<br>
A path fixed against the compelling night,<br>
The sole exception to the toll of time,<br>
A holy display of a easing light,<br><br>

May all the systems fall and worlds begone,<br>
The only truth I obey leads to you.</p>`
  },
  "Sonnet6": {
    title: "Sonnet 6",
    content: `<p>The screen emanating a gleaming blue,<br>
As data streams across the quiet night,<br>
,I scour the code to find a glimpse of you,<br>
Below the glow of this electric light,<br><br>

Your photos grant an acute emotion,<br>
That echoes loud within my empty mind,<br>
A siren song that keeps me from motion,<br>
Where memory and metal intertwine,<br><br>

A line of code blinks upon the vast void,<br>
A rhythmic pulse that mimics every beat,<br>
I reach for you so i'd be overjoyed,<br>
As loving you is my most greatest feat,<br><br>

No logic can explain the way I feel,<br>
For only my heat is love made real..</p>`
  },
  "Sonnet7": {
    title: "Sonnet 7",
    content: `<p>Write your seventh sonnet here.</p>`
  },
  "Sonnet8": {
    title: "Sonnet 8",
    content: `<p>Write your eighth sonnet here.</p>`
  },
};

document.querySelectorAll(".Sonnetbtns .clickable-icon").forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.alt;
    const sonnet = sonnets[key];
    if (sonnet) {
      sonnetPopupTitle.textContent = sonnet.title;
      sonnetPopupBody.innerHTML = sonnet.content;
      sonnetPopup.classList.add("active");
    }
  });
});

sonnetPopupClose.addEventListener("click", () => {
  sonnetPopup.classList.remove("active");
});