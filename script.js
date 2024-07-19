//------------ Hamburger menu --------------------//
const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}

function close() {
  mainMenu.style.top = "-1000%";
  //mainMenu.style.top = '0'
}

//------------Testimonials-------------------//
document.addEventListener("DOMContentLoaded", () => {
  let testimonials = document.querySelectorAll(".testimonial");
  let index = 0;

  function showNextTestimonial() {
    testimonials[index].classList.remove("active");
    index = (index + 1) % testimonials.length;
    testimonials[index].classList.add("active");
  }

  setInterval(showNextTestimonial, 5000);
});
//----------- Back-To-Top --------------//
document.addEventListener("DOMContentLoaded", function () {
  var backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", function (e) {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

//===================  Chatbox Js ==========================//
document.addEventListener("DOMContentLoaded", function () {
  const chatIcon = document.getElementById("chat-icon");
  const chatInterface = document.getElementById("chat-interface");
  const userInput = document.getElementById("userInput");
  const sendButton = document.getElementById("sendButton");
  const messages = document.getElementById("messages");

  let isGreetingDisplayed = false;

  chatIcon.addEventListener("click", function () {
    chatInterface.style.display = "block";
    chatIcon.style.display = "none";
    userInput.focus();
  });

  function sendMessage() {
    const message = userInput.value.trim();

    if (message === "") {
      return;
    }

    displayMessage(message, "left");
    userInput.value = "";

    if (checkThankYouMessage(message)) {
      displayTypingAnimation();
      setTimeout(() => {
        removeTypingAnimation();
        displayThankYouResponse();
        updateMessageStatus();
      }, 1500);
    } else {
      displayTypingAnimation();

      setTimeout(() => {
        removeTypingAnimation();

        if (!isGreetingDisplayed) {
          const currentTime = new Date().getHours();
          let greeting;
          if (currentTime < 12) {
            greeting = "Good Morning";
          } else {
            greeting = "Good Afternoon";
          }
          const initialResponse = `${greeting},<br>How may I help you today?`;
          displayMessage(initialResponse, "right");

          isGreetingDisplayed = true;

          userInput.addEventListener("keyup", handleNextMessageOnEnter);
          sendButton.addEventListener("click", handleNextMessage);
        } else {
          handleNextMessage();
        }
        updateMessageStatus();
      }, 5500);
    }
  }

  function checkThankYouMessage(message) {
    const lowerCaseMessage = message.toLowerCase();
    return (
      lowerCaseMessage.includes("thank you") ||
      lowerCaseMessage.includes("thankyou") ||
      lowerCaseMessage.includes("thanks") ||
      lowerCaseMessage.includes("thank thank you") ||
      lowerCaseMessage.includes("thank you") ||
      lowerCaseMessage.includes("thank you") ||
      lowerCaseMessage.includes("thank you")
    );
  }

  function displayThankYouResponse() {
    const response =
      "You're welcome! If you have any other questions or need further assistance, feel free to reach out to us!";
    displayMessage(response, "right");
  }

  function handleNextMessage() {
    const finalResponse =
      "Thank you for choosing InvodTech! For more information about your request reach out to us on WhatsApp via the link below👇";
    displayMessage(finalResponse, "right");

    setTimeout(() => {
      displayWhatsAppIcon();
    }, 2300);

    userInput.removeEventListener("keyup", handleNextMessageOnEnter);
    sendButton.removeEventListener("click", handleNextMessage);
  }

  userInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

  sendButton.addEventListener("click", sendMessage);

  function resetConversation() {
    messages.innerHTML = "";
    isGreetingDisplayed = false;
  }

  document.addEventListener("click", function (event) {
    if (
      !chatInterface.contains(event.target) &&
      !chatIcon.contains(event.target)
    ) {
      chatInterface.style.display = "none";
      chatIcon.style.display = "block";
      resetConversation();
    }
  });

  chatInterface.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  function displayMessage(text, alignment, isTyping = false) {
    const messageContainer = document.createElement("div");
    messageContainer.className = `message-container ${alignment}`;
    const message = document.createElement("div");
    message.className = `message ${alignment}`;
    message.innerHTML = text;
    if (!isTyping) {
      const time = document.createElement("div");
      time.className = "message-time";
      time.textContent = new Date().toLocaleTimeString();

      const tick = document.createElement("span");
      tick.className = "message-tick";
      tick.innerHTML = "&#10003;";
      time.appendChild(tick);

      message.appendChild(time);
    } else {
      message.classList.add("typing");
    }
    messageContainer.appendChild(message);
    messages.appendChild(messageContainer);
    messages.scrollTop = messages.scrollHeight;
  }

  function updateMessageStatus() {
    const ticks = document.querySelectorAll(".message-tick");
    ticks.forEach((tick) => {
      tick.style.color = "#4f42b5";
    });
  }

  function displayTypingAnimation() {
    displayMessage("Typing...", "right", true);
  }

  function removeTypingAnimation() {
    const typingMessage = document.querySelector(".message.typing");
    if (typingMessage) {
      typingMessage.parentElement.remove();
    }
  }

  function displayWhatsAppIcon() {
    const messageContainer = document.createElement("div");
    messageContainer.className = "message-container right";
    const message = document.createElement("div");
    message.className = "message right whatsapp-icon";
    const whatsappLink = document.createElement("a");
    whatsappLink.href =
      "https://api.whatsapp.com/send/?phone=254112916863&text=Dear+InvodTech+Ltd,+I+would+like+to+inquire+about+your+services.+Please+provide+me+with+the+necessary+information.+Thank+you.";

    // whatsappLink.href = "https://wa.me/254785052408";
    whatsappLink.target = "Whatsapp";
    const whatsappIcon = document.createElement("img");
    whatsappIcon.src = "assets/services/whatsapp.jfif";
    whatsappIcon.alt = "WhatsApp";
    whatsappIcon.style.width = "40px";
    whatsappIcon.style.height = "40px";
    whatsappLink.appendChild(whatsappIcon);
    message.appendChild(whatsappLink);
    messageContainer.appendChild(message);
    messages.appendChild(messageContainer);
    messages.scrollTop = messages.scrollHeight;

    whatsappIcon.style.animation = "zoomInOut 2s infinite alternate";

    const style = document.createElement("style");
    style.textContent = `
      @keyframes zoomInOut {
        from { transform: scale(1); }
        to { transform: scale(1.2); }
      }
    `;
    document.head.appendChild(style);
  }
});

// Google Tag Manager
(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-MV9QQJHV");
