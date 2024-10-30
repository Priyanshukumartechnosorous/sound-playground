// Define unique sounds for specific keys using Howler.js
const soundMap = {
    "A": new Howl({ src: ["downfall-3-208028.mp3"],volume: 1.0  }),
    "S": new Howl({ src: ["ascent-braam-magma-brass-d-cinematic-trailer-sound-effect-222269.mp3"] }),
    "D": new Howl({ src: ["biodynamic-impact-braam-tonal-dark-176441.mp3"] }),
    "F": new Howl({ src: ["elemental-magic-spell-impact-outgoing-228342.mp3"] }),
    "G": new Howl({ src: ["stab-f-01-brvhrtz-224599.mp3"] }),
    "H": new Howl({ src: ["keyboard-typing-5997.mp3"] }),
    "J": new Howl({ src: ["stab-f-01-brvhrtz-224599.mp3"] }),
    "K": new Howl({ src: ["traimory-mega-horn-angry-siren-f-cinematic-trailer-sound-effects-193408.mp3"] }),
    "L": new Howl({ src: ["mixkit-fast-rocket-whoosh-1714.wav"] }),
    "M": new Howl({ src: ["free-dj-audio-stream-dance-party-enjoyquot-no-copyrigh-240684.mp3"] }),
    "N": new Howl({ src: ["dj-airhorn-sound-39405.mp3"] }),
    "V": new Howl({ src: ["dark-future-logo-196217.mp3"] }),
    

    // Add more key-sound mappings as needed
  };
  
  // Function to create bubble animation at a random position
  function createBubble() {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
  
    // Set a random position for the bubble within the viewport
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
  
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;
  
    document.getElementById("bubble-container").appendChild(bubble);
  
    // Remove the bubble after the animation ends
    bubble.addEventListener("animationend", () => {
      bubble.remove();
    });
  }
  
  // Detect keypress, play sound, and create bubble
  document.addEventListener("keydown", (event) => {
    const key = event.key.toUpperCase();
    
    // Check if the key has a corresponding sound
    if (soundMap[key]) {
      soundMap[key].play();
      createBubble();
    }
  });
  