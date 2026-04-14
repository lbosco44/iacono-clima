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
  { value: "industriale", label: "Impianto industriale" },
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
    <section
      id="contatti"
      className="section-y bg-[var(--color-dark)] text-white relative overflow-hidden"
    >
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-x relative">
        <div className="grid md:grid-cols-[1fr_1.1fr] gap-10 md:gap-14">
          <Reveal>
            <span className="eyebrow !text-[var(--color-accent)]">Contatti</span>
            <h2
              className="text-white font-black leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Richiedi il tuo <br />
              <span className="text-[var(--color-primary)]">preventivo gratuito.</span>
            </h2>
            <p className="mt-5 text-white/70 text-[15px] md:text-base leading-relaxed">
              Sopralluogo gratuito e senza impegno. Ti ricontattiamo entro poche ore
              con un preventivo chiaro.
            </p>

            <div className="mt-8 space-y-4">
              {infoRows.map((row) => (
                <a
                  key={row.label}
                  href={row.href}
                  target={row.href.startsWith("http") ? "_blank" : undefined}
                  rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-start gap-4 p-3 -mx-3 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="shrink-0 grid place-items-center w-10 h-10 rounded-lg bg-[var(--color-primary)]/15 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                    <Icon name={row.icon} size={18} stroke={2} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-white/50 font-semibold">
                      {row.label}
                    </div>
                    <div className="text-white font-semibold truncate">{row.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Icon name="clock" size={16} stroke={2} />
                <span className="font-semibold">Orari:</span>
              </div>
              <ul className="mt-2 space-y-1 text-white/75 text-sm">
                {site.hours.map((h) => (
                  <li key={h.days} className="flex justify-between max-w-xs">
                    <span>{h.days}</span>
                    <span className="font-semibold text-white">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
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
                    <div className="mx-auto w-16 h-16 rounded-full bg-[var(--color-accent)] grid place-items-center text-[var(--color-primary)] mb-5" aria-hidden="true">
                      <Icon name="check" size={32} stroke={2.5} />
                    </div>
                    <h3 className="text-[var(--color-dark)] text-xl md:text-2xl font-extrabold">
                      Grazie!
                    </h3>
                    <p className="mt-2 text-[var(--color-text-muted)]">
                      Ti ricontattiamo entro poche ore.
                    </p>
                    <button
                      type="button"
                      onClick={reset}
                      className="mt-6 text-[var(--color-primary)] font-semibold text-sm hover:underline"
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
                          className={`${p.className} appearance-none bg-white`}
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

                    <button type="submit" className="btn-primary !w-full !justify-center">
                      Invia Richiesta
                      <Icon name="arrowRight" size={18} />
                    </button>

                    <p className="text-xs text-[var(--color-text-muted)] text-center pt-2">
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
          padding: 0.75rem 1rem;
          border-radius: 10px;
          border: 1.5px solid var(--color-border);
          background: white;
          color: var(--color-text);
          font-size: 0.9375rem;
          font-family: inherit;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }
        .field-input:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(26,115,232,0.15);
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
      <label htmlFor={fieldId} className="block text-sm font-semibold text-[var(--color-dark)] mb-1.5">
        {label}
        {required && (
          <>
            <span className="text-[var(--color-primary)] ml-0.5" aria-hidden="true">*</span>
            <span className="sr-only"> (richiesto)</span>
          </>
        )}
      </label>
      {render(inputProps)}
      {error && (
        <span id={errorId} role="alert" className="block text-xs text-red-600 mt-1 font-semibold">
          {error}
        </span>
      )}
    </div>
  );
}
