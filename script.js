

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

