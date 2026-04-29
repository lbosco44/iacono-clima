import { useState, type FormEvent } from "react";
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

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((s) => ({ ...s, [key]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  function reset() {
    setForm(initialForm);
    setSent(false);
  }

  return (
    <section id="briefing" className="bg-[var(--color-ink)] text-[var(--color-bg)]">
      <div className="container-x pt-24 lg:pt-36 pb-20">
        <div className="grid lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-14 lg:mb-20">
          <div className="lg:col-span-4">
            <SectionLabel index="07" label="Briefing" invert />
          </div>
          <div className="lg:col-span-8">
            <DisplayHeading size="md" invert>
              Il primo passo è sempre <span className="text-[var(--color-accent)]">un sopralluogo</span>.
            </DisplayHeading>
            <p className="mt-5 max-w-2xl text-[16px] text-[var(--color-bg)]/70 leading-relaxed">
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
            <dl className="font-mono text-[14.5px] space-y-4">
              <ContactRow k="tel">
                <a href={`tel:${site.phoneTel}`} className="hover:text-[var(--color-accent)] transition-colors">
                  {site.phone}
                </a>
              </ContactRow>
              <ContactRow k="whatsapp/1">
                <a href={site.whatsapp1Link} target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent)] transition-colors">
                  {site.whatsapp1}
                </a>
              </ContactRow>
              <ContactRow k="whatsapp/2">
                <a href={site.whatsapp2Link} target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent)] transition-colors">
                  {site.whatsapp2}
                </a>
              </ContactRow>
              <ContactRow k="email">
                <a href={`mailto:${site.email}`} className="hover:text-[var(--color-accent)] transition-colors">
                  {site.email}
                </a>
              </ContactRow>
              <ContactRow k="showroom">{site.address.full}</ContactRow>
              <ContactRow k="orari">
                <div className="flex flex-col gap-0.5">
                  {site.hours.map((h) => (
                    <div key={h.days}>
                      <span className="text-[var(--color-bg)]/45 mr-2">{h.days}</span>
                      {h.time}
                    </div>
                  ))}
                </div>
              </ContactRow>
            </dl>

            <div className="mt-10 inline-flex items-center gap-2 px-3 py-2 bg-[var(--color-bg)]/8 border border-[var(--color-bg)]/15 rounded-[3px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--color-bg)]/85">
                Risposta media in 24h
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-9 lg:p-12 bg-[var(--color-bg)]/5 border border-[var(--color-bg)]/15 rounded-[4px] flex flex-col items-start gap-5"
                >
                  <div className="w-12 h-12 inline-flex items-center justify-center bg-[var(--color-accent)] text-[var(--color-ink)] rounded-full">
                    <Check size={22} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl lg:text-3xl text-[var(--color-bg)]">
                      Richiesta ricevuta.
                    </h3>
                    <p className="mt-3 text-[var(--color-bg)]/70 max-w-md">
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
                    <ArrowRight size={14} />
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
                >
                  <Field label="/ nome" required>
                    <input
                      type="text"
                      required
                      value={form.nome}
                      onChange={(e) => update("nome", e.target.value)}
                      placeholder="Mario Rossi"
                      className={inputCls}
                    />
                  </Field>

                  <Field label="/ telefono" required>
                    <input
                      type="tel"
                      required
                      value={form.telefono}
                      onChange={(e) => update("telefono", e.target.value)}
                      placeholder="+39 ..."
                      className={inputCls}
                    />
                  </Field>

                  <Field label="/ tipologia intervento" required className="sm:col-span-2">
                    <select
                      required
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

                  <Field label="/ breve descrizione" className="sm:col-span-2">
                    <textarea
                      rows={4}
                      value={form.descrizione}
                      onChange={(e) => update("descrizione", e.target.value)}
                      placeholder="Quanti ambienti? Mq totali? Esiste già un impianto?"
                      className={`${inputCls} resize-none`}
                    />
                  </Field>

                  <div className="sm:col-span-2 mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="font-mono text-[11px] text-[var(--color-bg)]/45 max-w-md">
                      Inviando accetti che ti contattiamo per organizzare il sopralluogo. I dati non sono condivisi con terzi.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 h-14 px-7 bg-[var(--color-accent)] text-white font-semibold tracking-tight rounded-[3px] hover:bg-[var(--color-accent-deep)] transition-colors"
                    >
                      Richiedi preventivo
                      <ArrowRight size={16} strokeWidth={2.5} />
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mappa fullwidth */}
      <BriefingMap />
    </section>
  );
}

const inputCls =
  "w-full bg-transparent border-b border-[var(--color-bg)]/25 focus:border-[var(--color-accent)] outline-none px-0 py-3 text-[15px] text-[var(--color-bg)] placeholder:text-[var(--color-bg)]/35 transition-colors font-body";

function Field({
  label,
  required,
  children,
  className = "",
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${className}`}>
      <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-bg)]/55">
        {label}
        {required && <span className="text-[var(--color-accent)] ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}

function ContactRow({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-3 items-baseline border-b border-[var(--color-bg)]/8 pb-3">
      <dt className="text-[var(--color-bg)]/45 text-[12px] uppercase tracking-[0.12em]">{k}</dt>
      <dd className="text-[var(--color-bg)]">{children}</dd>
    </div>
  );
}
