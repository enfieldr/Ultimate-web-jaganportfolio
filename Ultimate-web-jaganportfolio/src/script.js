// filepath: /Ultimate-web-jaganportfolio/Ultimate-web-jaganportfolio/src/script.js

// === Smooth Scroll for Nav Links ===
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute('href'));
    section?.scrollIntoView({ behavior: 'smooth' });
  });
});

// === Dark Mode and Light Mode Toggle ===
const toggleBtn = document.getElementById('theme-toggle');
const html = document.documentElement;

// Load saved theme from localStorage
if (localStorage.getItem('theme') === 'light') {
  html.classList.add('light-mode');
  toggleBtn.textContent = "☀️ Light";
}

toggleBtn.addEventListener('click', () => {
  html.classList.toggle('light-mode');
  const isLight = html.classList.contains('light-mode');
  toggleBtn.textContent = isLight ? "☀️ Light" : "🌙 Dark";
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// === Scroll-to-Top Button ===
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
  const container = document.getElementById('chatbot-messages');
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
document.getElementById('chatbot-form')?.addEventListener('submit', e => {
  e.preventDefault();
  const input = document.getElementById('chatbot-input');
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

// === Chatbot Toggle ===
const chatbotToggle = document.getElementById('open-chatbot');
const chatbotBox = document.getElementById('chatbot-box');
const chatbotClose = document.getElementById('close-chatbot');

chatbotToggle.onclick = () => {
  chatbotBox.style.display = 'block';
  addMessage("👋 Hi! I'm your portfolio assistant. Ask me about projects, skills, or how to contact Jaganarul.", 'bot');
};

chatbotClose.onclick = () => {
  chatbotBox.style.display = 'none';
};