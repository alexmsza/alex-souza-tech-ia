/**
 * Alex Souza Tech & IA — Interactive Application Script
 * Gerencia Theme Toggle, Calculadora Dinâmica de Investimento, FAQ e Integração Supabase
 */

// Configuração do Supabase Client para persistência soberana de leads do site institucional
const SUPABASE_URL = "https://oczxcuehntfdgneonehc.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jenhjdWVobnRmZGduZW9uZWhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkwMDc4MDIsImV4cCI6MjEwNDU4MzgwMn0.EbIkdWjF4_6PbBtBDi5dOfIqG5EbsnWnrx7_ANburoA";

let supabaseClient = null;
if (window.supabase) {
  try {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log("[Supabase] Cliente inicializado com sucesso para o site institucional.");
  } catch (err) {
    console.warn("[Supabase] Aviso ao instanciar cliente:", err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initCalculator();
  initFaqAccordion();
  initContactForm();
});

/* ==========================================================================
   1. Theme Toggle (Dark / Light Mode)
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('asza_theme') || 'dark';

  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(toggleBtn, currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('asza_theme', newTheme);
      updateThemeIcon(toggleBtn, newTheme);
    });
  }
}

function updateThemeIcon(btn, theme) {
  if (!btn) return;
  btn.innerHTML = theme === 'dark'
    ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'
    : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
}

/* ==========================================================================
   2. Calculadora Interativa de Investimento e Pacotes
   ========================================================================== */
function initCalculator() {
  const options = document.querySelectorAll('.calc-option-item');
  const totalValElement = document.getElementById('calc-total-val');
  const deadlineElement = document.getElementById('calc-deadline-val');
  const selectedCountElement = document.getElementById('calc-selected-count');
  const btnWhatsappScope = document.getElementById('btn-whatsapp-scope');

  function recalculate() {
    let total = 0;
    let maxDays = 0;
    let selectedNames = [];

    options.forEach(opt => {
      const checkbox = opt.querySelector('input[type="checkbox"]');
      if (checkbox && checkbox.checked) {
        opt.classList.add('selected');
        const price = parseFloat(opt.getAttribute('data-price') || '0');
        const days = parseInt(opt.getAttribute('data-days') || '0', 10);
        const name = opt.getAttribute('data-name') || '';

        total += price;
        if (days > maxDays) maxDays = days;
        selectedNames.push(name);
      } else {
        opt.classList.remove('selected');
      }
    });

    if (totalValElement) {
      totalValElement.textContent = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    if (deadlineElement) {
      if (selectedNames.length === 0) {
        deadlineElement.textContent = 'Selecione um serviço';
      } else if (maxDays > 0) {
        deadlineElement.textContent = `${maxDays} a ${maxDays + 5} dias úteis`;
      } else {
        deadlineElement.textContent = 'Mensal contínuo (Retainer)';
      }
    }

    if (selectedCountElement) {
      selectedCountElement.textContent = selectedNames.length;
    }

    if (btnWhatsappScope) {
      if (selectedNames.length === 0) {
        btnWhatsappScope.href = "https://wa.me/5581996680373?text=Ol%C3%A1%20Alex%2C%20gostaria%20de%20um%20diagn%C3%B3stico%20com%20a%20Sousza%20Consultoria%20Inteligente%20para%20minha%20empresa.";
      } else {
        const message = `Olá Alex, simulei um escopo no site da *Sousza Consultoria Inteligente*:\n\n*Serviços Selecionados:*\n- ${selectedNames.join('\n- ')}\n\n*Investimento Estimado:* ${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\n*Prazo Estimado:* ${maxDays > 0 ? maxDays + ' dias úteis' : 'Mensal contínuo'}\n\nGostaria de agendar uma reunião de diagnóstico de 30 minutos para alinharmos esse projeto.`;
        btnWhatsappScope.href = `https://wa.me/5581996680373?text=${encodeURIComponent(message)}`;
      }
    }
  }

  options.forEach(opt => {
    opt.addEventListener('click', (e) => {
      const checkbox = opt.querySelector('input[type="checkbox"]');
      if (e.target !== checkbox) {
        checkbox.checked = !checkbox.checked;
      }
      recalculate();
    });
  });

  recalculate();
}

/* ==========================================================================
   3. FAQ Acordeão Suave
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(other => other.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

/* ==========================================================================
   4. Formulário de Diagnóstico & Persistência no Supabase
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('diagnostic-form');
  const statusMsg = document.getElementById('form-status-msg');
  const submitBtn = document.getElementById('btn-submit-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email') ? document.getElementById('form-email').value.trim() : '';
    const empresa = document.getElementById('form-company').value.trim();
    const whatsapp = document.getElementById('form-phone').value.trim();
    const interesse = document.getElementById('form-interest').value;
    const gargalo = document.getElementById('form-message').value.trim();

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `Processando e salvando...`;
    }

    if (statusMsg) {
      statusMsg.style.display = 'block';
      statusMsg.style.background = 'rgba(6, 182, 212, 0.15)';
      statusMsg.style.color = 'var(--accent-cyan)';
      statusMsg.style.border = '1px solid var(--border-highlight)';
      statusMsg.textContent = 'Registrando sua solicitação com segurança no banco de dados Supabase...';
    }

    // 1. Gravar dados no Supabase (Tabela public.site_contatos_leads)
    let dbSuccess = false;
    if (supabaseClient) {
      try {
        const { data, error } = await supabaseClient
          .from('site_contatos_leads')
          .insert([
            {
              nome,
              email,
              empresa,
              whatsapp,
              interesse,
              gargalo,
              origem: 'sousza_consultoria_inteligente_web',
              status: 'NOVO',
              metadata: {
                user_agent: navigator.userAgent,
                timestamp: new Date().toISOString(),
                pagina: window.location.href,
                marca: 'Sousza Consultoria Inteligente'
              }
            }
          ]);

        if (error) {
          console.warn("[Supabase] Erro ao gravar lead no banco:", error.message);
        } else {
          dbSuccess = true;
          console.log("[Supabase] Lead gravado com sucesso no PostgreSQL:", data);
        }
      } catch (err) {
        console.warn("[Supabase] Exceção na inserção:", err);
      }
    }

    // 2. Feedback visual
    if (statusMsg) {
      statusMsg.style.background = 'rgba(16, 185, 129, 0.15)';
      statusMsg.style.color = 'var(--accent-emerald)';
      statusMsg.style.border = '1px solid rgba(16, 185, 129, 0.4)';
      statusMsg.innerHTML = dbSuccess
        ? `✅ <strong>Solicitação gravada com sucesso no Supabase!</strong> Abrindo o WhatsApp de Alex Souza na Sousza Consultoria Inteligente...`
        : `✅ <strong>Solicitação processada com sucesso!</strong> Abrindo o WhatsApp da Sousza Consultoria Inteligente...`;
    }

    // 3. Montar mensagem formatada e abrir WhatsApp
    const msg = `*Novo Pedido de Diagnóstico — Sousza Consultoria Inteligente*\n\n` +
      `*Nome:* ${nome}\n` +
      `*E-mail:* ${email}\n` +
      `*Empresa:* ${empresa}\n` +
      `*WhatsApp:* ${whatsapp}\n` +
      `*Interesse Principal:* ${interesse}\n` +
      `*Principal Gargalo:* ${gargalo}\n\n` +
      `Solicito o agendamento do diagnóstico operacional gratuito de 48h.`;

    const waUrl = `https://wa.me/5581996680373?text=${encodeURIComponent(msg)}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `Enviar Solicitação e Abrir no WhatsApp <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
      }
    }, 1000);
  });
}
