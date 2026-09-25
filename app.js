"use strict";
/**
 * Sousza Consultoria Inteligente — Interactive Application Script (TypeScript)
 * Lógica do Frontend: Tema Dark/Light, Calculadora Dinâmica, Máscara de Telefone e Supabase RLS
 */
// Configuração soberana da API pública do Supabase
const SUPABASE_URL = "https://oczxcuehntfdgneonehc.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jenhjdWVobnRmZGduZW9uZWhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkwMDc4MDIsImV4cCI6MjEwNDU4MzgwMn0.EbIkdWjF4_6PbBtBDi5dOfIqG5EbsnWnrx7_ANburoA";
let supabaseClient = null;
if (typeof window !== 'undefined' && window.supabase) {
    try {
        supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log("[Sousza Tech] Cliente Supabase inicializado com sucesso.");
    }
    catch (err) {
        console.warn("[Sousza Tech] Aviso ao instanciar Supabase:", err);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initCalculator();
    initFaqAccordion();
    initContactForm();
    initActiveNavSpy();
});
/* ==========================================================================
   1. Theme Toggle (Dark / Light Mode)
   ========================================================================== */
function initThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    const savedTheme = (localStorage.getItem('sousza_theme') || localStorage.getItem('asza_theme') || 'dark');
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(toggleBtn, savedTheme);
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const activeTheme = (document.documentElement.getAttribute('data-theme') || 'dark');
            const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('sousza_theme', newTheme);
            updateThemeIcon(toggleBtn, newTheme);
        });
    }
}
function updateThemeIcon(btn, theme) {
    if (!btn)
        return;
    btn.innerHTML = theme === 'dark'
        ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'
        : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
}
/* ==========================================================================
   2. Simulador Estratégico de Escopo e Prazos (Sob Consulta no Diagnóstico)
   ========================================================================== */
function initCalculator() {
    const options = document.querySelectorAll('.calc-option-item');
    const totalValElement = document.getElementById('calc-total-val');
    const deadlineElement = document.getElementById('calc-deadline-val');
    const selectedCountElement = document.getElementById('calc-selected-count');
    const btnWhatsappScope = document.getElementById('btn-whatsapp-scope');
    function recalculate() {
        let maxDays = 0;
        let hasRetainer = false;
        let hasSprint = false;
        const selectedNames = [];
        options.forEach(opt => {
            const checkbox = opt.querySelector('input[type="checkbox"]');
            if (checkbox && checkbox.checked) {
                opt.classList.add('selected');
                const days = parseInt(opt.getAttribute('data-days') || '0', 10);
                const name = opt.getAttribute('data-name') || '';
                if (days > 0) {
                    hasSprint = true;
                    if (days > maxDays)
                        maxDays = days;
                }
                else {
                    hasRetainer = true;
                }
                selectedNames.push(name);
            }
            else {
                opt.classList.remove('selected');
            }
        });
        if (totalValElement) {
            totalValElement.textContent = selectedNames.length > 0
                ? 'Sob Consulta no Diagnóstico'
                : 'Selecione os módulos';
        }
        let deadlineText = '';
        if (selectedNames.length === 0) {
            deadlineText = 'Selecione ao menos um módulo';
        }
        else if (hasSprint && hasRetainer) {
            deadlineText = `${maxDays} a ${maxDays + 5} dias úteis + Retainer Mensal`;
        }
        else if (hasSprint) {
            deadlineText = `${maxDays} a ${maxDays + 5} dias úteis`;
        }
        else {
            deadlineText = 'Mensal contínuo (Retainer)';
        }
        if (deadlineElement) {
            deadlineElement.textContent = deadlineText;
        }
        if (selectedCountElement) {
            selectedCountElement.textContent = String(selectedNames.length);
        }
        if (btnWhatsappScope) {
            if (selectedNames.length === 0) {
                btnWhatsappScope.href = "https://wa.me/5581996680373?text=Ol%C3%A1%20Alex%2C%20gostaria%20de%20um%20diagn%C3%B3stico%20com%20a%20Sousza%20Consultoria%20Inteligente%20para%20minha%20empresa.";
            }
            else {
                const message = `Olá Alex, montei uma simulação de escopo no site da *Sousza Consultoria Inteligente*:\n\n*Módulos Selecionados:*\n- ${selectedNames.join('\n- ')}\n\n*Prazo Estimado de Implantação:* ${deadlineText}\n*Investimento:* A alinhar no Diagnóstico Executivo de 48h (Orçamento sob Medida).\n\nGostaria de agendar o diagnóstico gratuito para alinharmos esse projeto.`;
                btnWhatsappScope.href = `https://wa.me/5581996680373?text=${encodeURIComponent(message)}`;
            }
        }
    }
    options.forEach(opt => {
        opt.addEventListener('click', (e) => {
            const checkbox = opt.querySelector('input[type="checkbox"]');
            if (checkbox && e.target !== checkbox) {
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
    const phoneInput = document.getElementById('form-phone');
    // Máscara dinâmica em tempo real para o WhatsApp
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            const target = e.target;
            let v = target.value.replace(/\D/g, '');
            if (v.length > 11)
                v = v.slice(0, 11);
            if (v.length > 6) {
                target.value = `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
            }
            else if (v.length > 2) {
                target.value = `(${v.slice(0, 2)}) ${v.slice(2)}`;
            }
            else if (v.length > 0) {
                target.value = `(${v}`;
            }
        });
    }
    if (!form)
        return;
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('form-name');
        const emailInput = document.getElementById('form-email');
        const companyInput = document.getElementById('form-company');
        const interestInput = document.getElementById('form-interest');
        const messageInput = document.getElementById('form-message');
        const nome = nameInput ? nameInput.value.trim() : '';
        const email = emailInput ? emailInput.value.trim() : '';
        const empresa = companyInput ? companyInput.value.trim() : '';
        const whatsapp = phoneInput ? phoneInput.value.trim() : '';
        const interesse = interestInput ? interestInput.value : '';
        const gargalo = messageInput ? messageInput.value.trim() : '';
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = `Processando e salvando...`;
        }
        if (statusMsg) {
            statusMsg.style.display = 'block';
            statusMsg.style.background = 'rgba(205, 140, 56, 0.15)';
            statusMsg.style.color = 'var(--accent-gold)';
            statusMsg.style.border = '1px solid var(--border-gold)';
            statusMsg.textContent = 'Registrando sua solicitação com segurança no banco de dados Supabase...';
        }
        // 1. Gravar dados no Supabase
        let dbSuccess = false;
        if (supabaseClient) {
            try {
                const payload = {
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
                };
                const { data, error } = await supabaseClient
                    .from('site_contatos_leads')
                    .insert([payload]);
                if (error) {
                    console.warn("[Supabase] Erro ao gravar lead:", error.message);
                }
                else {
                    dbSuccess = true;
                    console.log("[Supabase] Lead gravado com sucesso no PostgreSQL:", data);
                }
            }
            catch (err) {
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
/* ==========================================================================
   5. Active Navigation Spy (Destaque do Menu por Seção Ativa)
   ========================================================================== */
function initActiveNavSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
        let currentId = '';
        const scrollY = window.pageYOffset;
        sections.forEach(sec => {
            const secTop = sec.offsetTop - 120;
            const secHeight = sec.offsetHeight;
            if (scrollY >= secTop && scrollY < secTop + secHeight) {
                currentId = sec.getAttribute('id') || '';
            }
        });
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
                link.style.color = 'var(--accent-gold)';
                link.style.fontWeight = '700';
            }
            else {
                link.style.color = '';
                link.style.fontWeight = '';
            }
        });
    });
}
