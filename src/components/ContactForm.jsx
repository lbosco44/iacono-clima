import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "../data/site";
import { Reveal } from "./ui/Reveal";
import { Icon } from "./ui/Icon";

const INITIAL = {
  nome: "",
  telefono: "",
  email: "",
  tipo: "",
  messaggio: "",
};

const TYPES = [
  { value: "residenziale", label: "Installazione residenziale" },
  { value: "commerciale", label: "Installazione commerciale" },
  { value: "manutenzione", label: "Manutenzione / Assistenza" },
  { value: "altro", label: "Altro" },
];

export function ContactForm() {
  const [form, setForm] = useState(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate() {
    const next = {};
    if (!form.nome.trim()) next.nome = "Campo richiesto";
    if (!form.telefono.trim()) next.telefono = "Campo richiesto";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  function reset() {
    setForm(INITIAL);
    setErrors({});
    setSubmitted(false);
  }

  const infoRows = [
    {
      icon: "pin",
      label: "Sede & Showroom",
      value: site.address.full,
      href: "https://maps.google.com/?q=Via+Filisto+71,+Siracusa",
    },
    { icon: "phone", label: "Telefono", value: site.phone, href: `tel:${site.phoneTel}` },
    { icon: "whatsapp", label: "WhatsApp", value: site.whatsapp, href: site.whatsappLink },
    { icon: "mail", label: "Email", value: site.email, href: `mailto:${site.email}` },
  ];

  return (
    <section id="contatti" className="section-cinematic bg-[var(--color-bg-light)]">
      <div className="container-narrow">
        <Reveal className="grid md:grid-cols-[1fr_auto] md:items-end gap-6 md:gap-12 mb-10 md:mb-14">
          <div>
            <span className="eyebrow">Contatti</span>
            <h2
              className="h-display max-w-3xl"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Parliamo del<br />
              tuo progetto.
            </h2>
          </div>
          <p className="text-[var(--color-text-muted)] max-w-sm text-sm md:text-base leading-relaxed">
            Sopralluogo gratuito, preventivo chiaro, zero pressione. Ti ricontattiamo entro poche ore.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-[1fr_1.1fr] gap-6 md:gap-10 items-start">
          <Reveal className="min-w-0">
            <div className="bg-white rounded-3xl p-6 md:p-8 ring-1 ring-[var(--color-border)]">
              <h3 className="text-[var(--color-dark)] font-bold text-lg md:text-xl mb-5">
                Scrivici subito
              </h3>
              <ul className="space-y-3">
                {infoRows.map((row) => (
                  <li key={row.label}>
                    <a
                      href={row.href}
                      target={row.href.startsWith("http") ? "_blank" : undefined}
                      rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-start gap-3 p-3 -mx-3 rounded-xl hover:bg-[var(--color-bg-light)] transition-colors"
                    >
                      <div className="shrink-0 grid place-items-center w-10 h-10 rounded-lg bg-[var(--color-accent)] text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                        <Icon name={row.icon} size={18} stroke={2} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                          {row.label}
                        </div>
                        <div className="text-[var(--color-dark)] font-semibold truncate">
                          {row.value}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
                <div className="flex items-center gap-2 text-[var(--color-text-muted)] text-sm font-semibold mb-2">
                  <Icon name="clock" size={16} stroke={2} />
                  Orari
                </div>
                <ul className="space-y-1 text-sm">
                  {site.hours.map((h) => (
                    <li key={h.days} className="flex justify-between">
                      <span className="text-[var(--color-text-muted)]">{h.days}</span>
                      <span className="font-semibold text-[var(--color-dark)]">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="min-w-0">
            <div className="bg-[var(--color-dark)] text-white rounded-3xl p-6 md:p-8 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                    className="text-center py-8 md:py-12"
                    role="status"
                    aria-live="polite"
                  >
                    <div
                      className="mx-auto w-16 h-16 rounded-full bg-[var(--color-primary)] grid place-items-center text-white mb-5"
                      aria-hidden="true"
                    >
                      <Icon name="check" size={32} stroke={2.5} />
                    </div>
                    <h3 className="text-white text-xl md:text-2xl font-extrabold">Grazie!</h3>
                    <p className="mt-2 text-white/70">Ti ricontattiamo entro poche ore.</p>
                    <button
                      type="button"
                      onClick={reset}
                      className="mt-6 text-[var(--color-primary-soft)] font-semibold text-sm hover:text-white hover:underline"
                    >
                      Invia un'altra richiesta
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    onSubmit={onSubmit}
                    noValidate
                    className="space-y-4"
                  >
                    <h3 className="text-white font-bold text-lg md:text-xl mb-2">
                      Richiedi un preventivo
                    </h3>

                    <Field
                      id="f-nome"
                      label="Nome e cognome"
                      error={errors.nome}
                      required
                      render={(p) => (
                        <input
                          {...p}
                          type="text"
                          value={form.nome}
                          onChange={(e) => update("nome", e.target.value)}
                          autoComplete="name"
                          placeholder="Mario Rossi"
                        />
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-4">
                      <Field
                        id="f-tel"
                        label="Telefono"
                        error={errors.telefono}
                        required
                        render={(p) => (
                          <input
                            {...p}
                            type="tel"
                            value={form.telefono}
                            onChange={(e) => update("telefono", e.target.value)}
                            autoComplete="tel"
                            placeholder="335 1234567"
                          />
                        )}
                      />
                      <Field
                        id="f-email"
                        label="Email"
                        render={(p) => (
                          <input
                            {...p}
                            type="email"
                            value={form.email}
                            onChange={(e) => update("email", e.target.value)}
                            autoComplete="email"
                            placeholder="tuo@email.it"
                          />
                        )}
                      />
                    </div>

                    <Field
                      id="f-tipo"
                      label="Tipo di intervento"
                      render={(p) => (
                        <select
                          {...p}
                          value={form.tipo}
                          onChange={(e) => update("tipo", e.target.value)}
                          className={`${p.className} appearance-none`}
                        >
                          <option value="">Scegli un'opzione</option>
                          {TYPES.map((t) => (
                            <option key={t.value} value={t.value}>
                              {t.label}
                            </option>
                          ))}
                        </select>
                      )}
                    />

                    <Field
                      id="f-msg"
                      label="Messaggio"
                      render={(p) => (
                        <textarea
                          {...p}
                          value={form.messaggio}
                          onChange={(e) => update("messaggio", e.target.value)}
                          rows={4}
                          className={`${p.className} resize-none`}
                          placeholder="Descrivi brevemente cosa ti serve…"
                        />
                      )}
                    />

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-full bg-white text-[var(--color-dark)] font-bold hover:bg-[var(--color-primary-soft)] transition-colors"
                    >
                      Invia Richiesta
                      <Icon name="arrowRight" size={18} stroke={2.4} />
                    </button>

                    <p className="text-xs text-white/50 text-center pt-1">
                      Inviando il modulo accetti di essere ricontattato.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .field-input {
          width: 100%;
          padding: 0.85rem 1rem;
          border-radius: 12px;
          border: 1.5px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.06);
          color: white;
          font-size: 0.9375rem;
          font-family: inherit;
          transition: border-color 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
        }
        .field-input::placeholder {
          color: rgba(255,255,255,0.4);
        }
        .field-input:focus {
          outline: none;
          border-color: var(--color-primary-soft);
          background: rgba(255,255,255,0.1);
          box-shadow: 0 0 0 3px rgba(180,212,250,0.18);
        }
        .field-input option {
          color: var(--color-dark);
          background: white;
        }
      `}</style>
    </section>
  );
}

function Field({ id, label, required, error, render }) {
  const autoId = useId();
  const fieldId = id || autoId;
  const errorId = `${fieldId}-error`;
  const inputProps = {
    id: fieldId,
    className: "field-input",
    "aria-required": required || undefined,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
  };

  return (
    <div className="block">
      <label htmlFor={fieldId} className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wider">
        {label}
        {required && (
          <>
            <span className="text-[var(--color-primary-soft)] ml-0.5" aria-hidden="true">*</span>
            <span className="sr-only"> (richiesto)</span>
          </>
        )}
      </label>
      {render(inputProps)}
      {error && (
        <span id={errorId} role="alert" className="block text-xs text-red-300 mt-1 font-semibold">
          {error}
        </span>
      )}
    </div>
  );
}
