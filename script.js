

// === Smooth Scroll for Nav Links ===
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute('href'));
    section?.scrollIntoView({ behavior: 'smooth' });
  });
});

// === Scroll-to-Top Button (Optional) ===
const topBtn = document.getElementById('scroll-top');
window.onscroll = () => {
  if (window.scrollY > 300) {
    topBtn?.classList.add('show');
  } else {
    topBtn?.classList.remove('show');
  }
};
topBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



// === Chatbot Logic with Typing Effect ===
function addMessage(msg, sender = 'bot') {
  const container = document.getElementById('chat');
  const msgDiv = document.createElement('div');
  msgDiv.className = `message ${sender}`;
  msgDiv.textContent = '';
  container.appendChild(msgDiv);

  // Typing effect
  let i = 0;
  const type = setInterval(() => {
    msgDiv.textContent += msg.charAt(i);
    i++;
    if (i === msg.length) clearInterval(type);
  }, 30);

  container.scrollTop = container.scrollHeight;
}

// === Chatbot Response Handler ===
function botReply(userMsg) {
  const lower = userMsg.toLowerCase();
  if (["hi", "hello", "hey"].some(g => lower.includes(g))) return "Hi! How can I help you explore my portfolio?";
  if (lower.includes("about")) return "Check the About Me section to learn about Jaganarul.";
  if (lower.includes("skills")) return "Scroll to Skills section for tech and tools I know.";
  if (lower.includes("project")) return "Scroll to Projects to view my work and GitHub links.";
  if (lower.includes("resume")) return "You can download my resume from the top-right corner.";
  return "I'm here to guide you through the site. Try typing 'skills', 'projects', or 'resume'.";
}



// === User Message Input Handling ===
document.getElementById('send-btn')?.addEventListener('click', () => {
  const input = document.getElementById('user-input');
  const msg = input.value.trim();
  if (!msg) return;

  addMessage(msg, 'user');
  setTimeout(() => {
    const reply = botReply(msg);
    addMessage(reply, 'bot');
  }, 600);
  input.value = '';
});

// === Chat Auto-Welcome Message ===
window.addEventListener('load', () => {
  setTimeout(() => {
    addMessage("Hi there! I'm your AI assistant. Type 'help' to get started. 🤖", 'bot');
  }, 1000);
});

// ...Greeting on Open...
chatbotToggle.onclick = () => {
    chatbotBox.style.display = 'block';
    if (!chatbotMessages.hasChildNodes()) {
        addMessage("👋 Hi! I'm your portfolio assistant. Ask me about projects, skills, or how to contact Jaganarul.", 'bot');
    }
};
// ...Greeting on Open..

// ...Typing Indicator...
chatbotForm.onsubmit = e => {
    e.preventDefault();
    const msg = chatbotInput.value.trim();
    if (!msg) return;
    addMessage(msg, 'user');
    const typingDiv = document.createElement('div');
    typingDiv.id = 'typing-indicator';
    typingDiv.style.textAlign = 'left';
    typingDiv.innerHTML = `<span style="background:#222;color:#adf0d4;padding:6px 12px;border-radius:16px;display:inline-block;">Bot is typing...</span>`;
    chatbotMessages.appendChild(typingDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    setTimeout(() => {
        typingDiv.remove();
        addMessage(botReply(msg), 'bot');
    }, 700);
    chatbotInput.value = '';
};
// ...Typing Indicator...

// ...Quick Suggestion Buttons...
document.querySelectorAll('.chatbot-suggestion').forEach(btn => {
    btn.onclick = () => {
        chatbotInput.value = btn.textContent;
        chatbotForm.dispatchEvent(new Event('submit'));
    };
});
// ...Quick Suggestion Buttons...

// ...Scroll to Section on Request...
function botReply(msg) {
    const lower = msg.toLowerCase();
    if (lower.includes("project")) {
        setTimeout(() => {
            document.getElementById('projects').scrollIntoView({behavior: 'smooth'});
        }, 800);
        return "Scrolling to Latest Projects section...";
    }
    if (lower.includes("skills")) {
        setTimeout(() => {
            document.getElementById('skills').scrollIntoView({behavior: 'smooth'});
        }, 800);
        return "Here are my skills!";
    }
    if (lower.includes("contact")) {
        setTimeout(() => {
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }, 800);
        return "Let's get in touch! Here's the contact section.";
    }
    // ...Scroll to Section on Request...
}
// ...existing code...