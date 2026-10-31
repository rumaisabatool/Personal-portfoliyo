 const words = ["Frontend Developer", "UI Designer", "Web Developer"];
    let i = 0;

    function typingEffect() {
      let word = words[i];
      let j = 0;
      let currentWord = "";
      
      let typingInterval = setInterval(() => {
        if (j < word.length) {
          currentWord += word[j];
          document.getElementById("typing-text").textContent = currentWord;
          j++;
        } else {
          clearInterval(typingInterval);
          setTimeout(deletingEffect, 2000);
        }
      }, 100);
    }

    function deletingEffect() {
      let word = words[i];
      let j = word.length;
      
      let deletingInterval = setInterval(() => {
        if (j >= 0) {
          let currentWord = word.substring(0, j);
          document.getElementById("typing-text").textContent = currentWord;
          j--;
        } else {
          clearInterval(deletingInterval);
          i = (i + 1) % words.length;
          setTimeout(typingEffect, 500);
        }
      }, 50);
    }

    typingEffect();