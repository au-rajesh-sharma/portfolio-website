// Add custom JavaScript here
//script/function for text typing effect
function runTypingEffect() {
    // hard code text
    const text = 'I am Rajesh Sharma.';
    //get the element to put text in html
    const typingElement = document.getElementById('typing-text');
    //typing effect delay in ms
    const typingDelay = 110;
  
    //call function typeText
    typeText(text, typingElement, typingDelay);
  }
  
  function typeText(text, typingElement, delay) {
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        typingElement.textContent += text.charAt(i);
      }, delay * i);
    }
  }
  
  document.addEventListener('DOMContentLoaded', 
    runTypingEffect);