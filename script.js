const mainMenu=document.querySelector(".mainMenu"),closeMenu=document.querySelector(".closeMenu"),openMenu=document.querySelector(".openMenu");function show(){mainMenu.style.display="flex",mainMenu.style.top="0"}function close(){mainMenu.style.top="-1000%"}openMenu.addEventListener("click",show),closeMenu.addEventListener("click",close),document.addEventListener("DOMContentLoaded",(()=>{let e=document.querySelectorAll(".testimonial"),t=0;setInterval((function(){e[t].classList.remove("active"),t=(t+1)%e.length,e[t].classList.add("active")}),5e3)})),document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("backToTop");window.addEventListener("scroll",(function(){window.scrollY>20?e.style.display="block":e.style.display="none"})),e.addEventListener("click",(function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("chat-icon"),t=document.getElementById("chat-interface"),n=document.getElementById("userInput"),o=document.getElementById("sendButton"),s=document.getElementById("messages");let a=!1;function c(){const e=n.value.trim();""!==e&&(l(e,"left"),n.value="",function(e){const t=e.toLowerCase();return t.includes("thank you")||t.includes("thankyou")}(e)?(d(),setTimeout((()=>{r(),l("You are welcome! If you have any other questions or need further assistance, feel free to reach out to us!","right")}),1500)):(d(),setTimeout((()=>{if(r(),a)i();else{let e;e=(new Date).getHours()<12?"Good Morning":"Good Afternoon",l(`${e},<br>How may I help you today?`,"right"),a=!0,n.addEventListener("keyup",handleNextMessageOnEnter),o.addEventListener("click",i)}}),5500)))}function i(){l("Thank you for choosing InvodTech! For more information about your request reach out to us on WhatsApp  via the link below👇","right"),setTimeout((()=>{!function(){const e=document.createElement("div");e.className="message-container right";const t=document.createElement("div");t.className="message right whatsapp-icon";const n=document.createElement("a");n.href="https://wa.me/254785052408",n.target="Whatsapp";const o=document.createElement("img");o.src="assets/services/whatsapp.jfif",o.alt="WhatsApp",o.style.width="40px",o.style.height="40px",n.appendChild(o),t.appendChild(n),e.appendChild(t),s.appendChild(e),s.scrollTop=s.scrollHeight,o.style.animation="zoomInOut 2s infinite alternate";const a=document.createElement("style");a.textContent="\n      @keyframes zoomInOut {\n        from { transform: scale(1); }\n        to { transform: scale(1.2); }\n      }\n    ",document.head.appendChild(a)}()}),2300),n.removeEventListener("keyup",handleNextMessageOnEnter),o.removeEventListener("click",i)}function l(e,t,n=!1){const o=document.createElement("div");o.className=`message-container ${t}`;const a=document.createElement("div");if(a.className=`message ${t}`,a.innerHTML=e,n)a.classList.add("typing");else{const e=document.createElement("div");e.className="message-time",e.textContent=(new Date).toLocaleTimeString(),a.appendChild(e)}o.appendChild(a),s.appendChild(o),s.scrollTop=s.scrollHeight}function d(){l("Typing...","right",!0)}function r(){const e=document.querySelector(".message.typing");e&&e.parentElement.remove()}e.addEventListener("click",(function(){t.style.display="block",e.style.display="none",n.focus()})),n.addEventListener("keyup",(function(e){"Enter"===e.key&&c()})),o.addEventListener("click",c),document.addEventListener("click",(function(n){t.contains(n.target)||e.contains(n.target)||(t.style.display="none",e.style.display="block",s.innerHTML="",a=!1)})),t.addEventListener("click",(function(e){e.stopPropagation()}))})),function(e,t,n,o,s){e[o]=e[o]||[],e[o].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var a=t.getElementsByTagName(n)[0],c=t.createElement(n);c.async=!0,c.src="https://www.googletagmanager.com/gtm.js?id=GTM-MV9QQJHV",a.parentNode.insertBefore(c,a)}(window,document,"script","dataLayer");