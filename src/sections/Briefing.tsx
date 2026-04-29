import { useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { sistemi } from "@/data/sistemi";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { BriefingMap } from "@/components/BriefingMap";

type FormState = {
  nome: string;
  telefono: string;
  tipologia: string;
  descrizione: string;
};

const initialForm: FormState = {
  nome: "",
  telefono: "",
  tipologia: "",
  descrizione: "",
};

export function Briefing() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [sent, setSent] = useState(false);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((s) => ({ ...s, [key]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    // Sposta il focus sull'heading di conferma non appena la transizione è completata
    setTimeout(() => successHeadingRef.current?.focus(), 300);
  }

  function reset() {
    setForm(initialForm);
    setSent(false);
  }

  return (
    <section id="briefing" aria-labelledby="briefing-heading" className="bg-[var(--color-ink)] text-[var(--color-bg)]">
      <div className="container-x pt-24 lg:pt-36 pb-20">
        <div className="grid lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-14 lg:mb-20">
          <div className="lg:col-span-4">
            <SectionLabel index="07" label="Briefing" invert />
          </div>
          <div className="lg:col-span-8">
            <DisplayHeading id="briefing-heading" size="md" invert>
              Il primo passo è sempre <span className="text-[var(--color-accent)]">un sopralluogo</span>.
            </DisplayHeading>
            <p className="mt-5 max-w-2xl text-[16px] text-[var(--color-bg)]/80 leading-relaxed">
              Lascia il tuo numero, ti chiamiamo entro 24 ore lavorative.
              Oppure scrivici direttamente su WhatsApp.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-y-12 lg:gap-x-12">
          {/* Contatti */}
          <div className="lg:col-span-5">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-5">
              / contatti diretti
            </div>
            <address className="not-italic">
              <dl className="font-mono text-[14.5px] space-y-4">
                <ContactRow k="Tel">
                  <a
                    href={`tel:${site.phoneTel}`}
                    aria-label={`Chiama al numero ${site.phone}`}
                    className="hover:text-[var(--color-accent)] transition-colors"
                  >
                    {site.phone}
                  </a>
                </ContactRow>
                <ContactRow k="WhatsApp 1">
                  <a
                    href={site.whatsapp1Link}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`Apri WhatsApp con il numero ${site.whatsapp1}`}
                    className="hover:text-[var(--color-accent)] transition-colors"
                  >
                    {site.whatsapp1}
                  </a>
                </ContactRow>
                <ContactRow k="WhatsApp 2">
                  <a
                    href={site.whatsapp2Link}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`Apri WhatsApp con il numero ${site.whatsapp2}`}
                    className="hover:text-[var(--color-accent)] transition-colors"
                  >
                    {site.whatsapp2}
                  </a>
                </ContactRow>
                <ContactRow k="Email">
                  <a
                    href={`mailto:${site.email}`}
                    className="hover:text-[var(--color-accent)] transition-colors"
                  >
                    {site.email}
                  </a>
                </ContactRow>
                <ContactRow k="Showroom">{site.address.full}</ContactRow>
                <ContactRow k="Orari">
                  <div className="flex flex-col gap-0.5">
                    {site.hours.map((h) => (
                      <div key={h.days}>
                        <span className="text-[var(--color-bg)]/60 mr-2">{h.days}</span>
                        {h.time}
                      </div>
                    ))}
                  </div>
                </ContactRow>
              </dl>
            </address>

            <div className="mt-10 inline-flex items-center gap-2 px-3 py-2 bg-[var(--color-bg)]/8 border border-[var(--color-bg)]/15 rounded-[3px]">
              <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--color-bg)]/85">
                Risposta media in 24h
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            {/* aria-live avvisa gli screen reader quando il pannello cambia */}
            <div aria-live="polite" aria-atomic="true">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="ok"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-9 lg:p-12 bg-[var(--color-bg)]/5 border border-[var(--color-bg)]/15 rounded-[4px] flex flex-col items-start gap-5"
                  >
                    <div
                      aria-hidden="true"
                      className="w-12 h-12 inline-flex items-center justify-center bg-[var(--color-accent)] text-[var(--color-ink)] rounded-full"
                    >
                      <Check size={22} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3
                        ref={successHeadingRef}
                        tabIndex={-1}
                        className="font-display text-2xl lg:text-3xl text-[var(--color-bg)] outline-none"
                      >
                        Richiesta ricevuta.
                      </h3>
                      <p className="mt-3 text-[var(--color-bg)]/80 max-w-md">
                        Ti chiamiamo entro 24 ore lavorative al numero che hai lasciato.
                        Per cose urgenti, scrivici su WhatsApp.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={reset}
                      className="inline-flex items-center gap-2 mt-2 font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--color-accent)] hover:text-[var(--color-bg)] transition-colors"
                    >
                      Invia un'altra richiesta
                      <ArrowRight size={14} aria-hidden="true" />
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid sm:grid-cols-2 gap-5"
                    aria-label="Modulo richiesta sopralluogo"
                    noValidate
                  >
                    <Field
                      label="Nome e cognome"
                      fieldId="briefing-nome"
                      required
                    >
                      <input
                        id="briefing-nome"
                        type="text"
                        required
                        aria-required="true"
                        value={form.nome}
                        onChange={(e) => update("nome", e.target.value)}
                        placeholder="Mario Rossi"
                        autoComplete="name"
                        className={inputCls}
                      />
                    </Field>

                    <Field
                      label="Numero di telefono"
                      fieldId="briefing-telefono"
                      required
                    >
                      <input
                        id="briefing-telefono"
                        type="tel"
                        required
                        aria-required="true"
                        value={form.telefono}
                        onChange={(e) => update("telefono", e.target.value)}
                        placeholder="+39 ..."
                        autoComplete="tel"
                        className={inputCls}
                      />
                    </Field>

                    <Field
                      label="Tipologia di intervento"
                      fieldId="briefing-tipologia"
                      required
                      className="sm:col-span-2"
                    >
                      <select
                        id="briefing-tipologia"
                        required
                        aria-required="true"
                        value={form.tipologia}
                        onChange={(e) => update("tipologia", e.target.value)}
                        className={`${inputCls} appearance-none cursor-pointer`}
                      >
                        <option value="" disabled>
                          Seleziona una categoria
                        </option>
                        {sistemi.map((s) => (
                          <option key={s.id} value={s.tag}>
                            {s.tag} — {s.title}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field
                      label="Breve descrizione (opzionale)"
                      fieldId="briefing-descrizione"
                      className="sm:col-span-2"
                    >
                      <textarea
                        id="briefing-descrizione"
                        rows={4}
                        value={form.descrizione}
                        onChange={(e) => update("descrizione", e.target.value)}
                        placeholder="Quanti ambienti? Mq totali? Esiste già un impianto?"
                        className={`${inputCls} resize-none`}
                      />
                    </Field>

                    <div className="sm:col-span-2 mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <p id="briefing-privacy" className="font-mono text-[11px] text-[var(--color-bg)]/60 max-w-md">
                        Inviando accetti che ti contattiamo per organizzare il sopralluogo. I dati non sono condivisi con terzi.
                      </p>
                      <button
                        type="submit"
                        aria-describedby="briefing-privacy"
                        className="btn-fly inline-flex items-center gap-2 h-14 px-7 bg-[var(--color-accent)] text-white font-semibold tracking-tight rounded-[3px] shadow-[0_8px_24px_-8px_rgba(232,118,58,0.5)] hover:shadow-[0_12px_28px_-8px_rgba(232,118,58,0.65)] active:scale-[0.98] transition-shadow"
                      >
                        <span className="btn-icon">
                          <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
                        </span>
                        <span className="btn-text">Richiedi preventivo</span>
                        <span className="btn-icon-center" aria-hidden="true">
                          <span className="btn-icon-bob">
                            <ArrowRight size={18} strokeWidth={2.5} />
                          </span>
                        </span>
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Mappa fullwidth */}
      <BriefingMap />
    </section>
  );
}

const inputCls =
  "w-full bg-transparent border-b border-[var(--color-bg)]/25 focus:border-[var(--color-accent)] outline-none px-0 py-3 text-[15px] text-[var(--color-bg)] placeholder:text-[var(--color-bg)]/40 transition-colors font-body";

function Field({
  label,
  fieldId,
  required,
  children,
  className = "",
}: {
  label: string;
  fieldId: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label
        htmlFor={fieldId}
        className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-bg)]/70"
      >
        {label}
        {required && (
          <span className="text-[var(--color-accent)] ml-1" aria-hidden="true">*</span>
        )}
        {required && <span className="sr-only"> (obbligatorio)</span>}
      </label>
      {children}
    </div>
  );
}

function ContactRow({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-3 items-baseline border-b border-[var(--color-bg)]/8 pb-3">
      <dt className="text-[var(--color-bg)]/60 text-[12px] uppercase tracking-[0.12em]">{k}</dt>
      <dd className="text-[var(--color-bg)]">{children}</dd>
    </div>
  );
}
