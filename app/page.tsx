import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { ContactForm } from '@/components/ContactForm';
import { ImageSlot } from '@/components/ImageSlot';
import { site } from '@/content/site';

import {
  BadgeCheck,
  Camera,
  Mail,
  Send,
  StickyNote,
  Workflow,
} from 'lucide-react';
import { SVGDisplay } from '@/components/icons/display';
import { SVGStore } from '@/components/icons/store';

const COMO_FUNCIONA_ICONS = [Camera, Send, Workflow, BadgeCheck] as const;

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-bg">
        <Section
          title={site.brand.hero.title}
          subtitle={site.brand.hero.subtitle}
          image={{
            src: site.brand.hero.image,
            alt: 'Hero image',
            containerClassName: 'h-full min-h-[250px]',
            placement: 'left',
          }}
          className="grid md:grid-cols-[450px_1fr] md:gap-10 items-center bg-brand-card"
        >
          <div className="pb-4 flex justify-center items-center">
            <div className="mt-6 flex gap-3">
              <Button href="#demo">{site.brand.hero.ctaPrimary}</Button>
              <Button href="#como-funciona" variant="ghost">
                {site.brand.hero.ctaSecondary}
              </Button>
            </div>
          </div>
        </Section>
      </section>

      {/* DESAFIO */}
      <Section
        id="desafio"
        title={site.sections.desafio.title}
        subtitle={site.sections.desafio.intro}
        className="grid md:grid-cols-[450px_1fr] md:gap-10 bg-brand-card"
        image={{
          src: site.images.desafio,
          alt: 'Desafio',
          placement: 'left',
          containerClassName: 'h-full min-h-[250px]',
        }}
      >
        <div className=" grid md:grid-cols-1 lg:grid-cols-2 min-w-[150px] gap-6 max-w-3xl mt-10 md:mt-4 text-brand-text">
          {site.sections.desafio.bullets.map((b, i) => {
            const splitPhrase = b.split('—');

            const phrase1 = splitPhrase[0];
            const phrase2 = splitPhrase[1];

            return (
              <div className="border-b-2 pb-4 lg:border-0 lg:pb-0" key={i}>
                <p className="font-serif text-2xl">{phrase1}</p>
                <p className="font-sans text-lg mt-1">{phrase2}</p>
              </div>
            );
          })}
        </div>
        <div className="bg-brand-quote flex flex-col items-center md:items-start md:flex-row gap-4 p-4 mt-8 md:mt-6">
          <StickyNote color="#70BCFB" strokeWidth={3} size={32} />
          <p className="text-brand-text text-lg">
            <b>Exemplo real:</b> {site.sections.desafio.example}
          </p>
        </div>
      </Section>

      {/* SOLUÇÃO */}
      <Section
        id="solucao"
        title={site.sections.solucao.title}
        subtitle={site.sections.solucao.intro}
        className="grid md:grid-cols-[450px_1fr]  md:gap-10 items-center bg-brand-card"
        image={{
          src: site.images.solucao,
          alt: 'Solução',
          ratio: '16/21',
          containerClassName: 'h-full min-h-[250px]',
          placement: 'left',
        }}
      >
        <div className="w-full flex flex-col  gap-6 h-full mt-4">
          {site.sections.solucao.items.map((it, index) => (
            <div
              key={it.title}
              className="flex flex-col  md:flex-row gap-6 items-center justify-center mt-6 md:mt-4"
            >
              <div className="flex justify-center items-center px-6 h-[60px] md:h-[250px] lg:h-[150px] bg-[#3F4652]">
                {index === 0 && <SVGStore />}
                {index === 1 && <SVGDisplay />}
              </div>
              <div className="block text-brand-text py-4">
                <h3 className="font-semibold font-serif text-2xl">
                  {it.title}
                </h3>
                <p className="text-lg mt-2">{it.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* BENEFÍCIOS */}
      <Section
        id="beneficios"
        title={site.sections.beneficios.title}
        className="bg-brand-card px-3 md:px-10"
      >
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div>
            <h4 className="text-[27px] text-primary">Para o cidadão</h4>
            <ul className="mt-2 space-y-2 list-disc list-inside text-brand-text text-left text-lg mb-6">
              {site.sections.beneficios.citizens.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <ImageSlot
              src={site.images.beneficios1}
              alt="cidadao"
              ratio="4/4"
              containerClassName="rounded-[4px]"
            />
          </div>

          <div className="mt-8 md:mt-0">
            <h4 className="text-[27px] text-primary">Para o município</h4>
            <ul className="mt-2 space-y-2 list-disc list-inside text-brand-text text-left text-lg mb-6">
              {site.sections.beneficios.municipality.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            <ImageSlot
              src={site.images.beneficios2}
              alt="cidadao"
              ratio="4/4"
              containerClassName="rounded-[4px]"
            />
          </div>
        </div>
        <p className="w-full text-center mt-6  text-brand-text text-lg italic">
          {site.sections.beneficios.quote}
        </p>
      </Section>

      {/* COMO FUNCIONA */}
      <Section
        id="como-funciona"
        title={site.sections.comoFunciona.title}
        subtitle={site.sections.comoFunciona.intro}
        className="grid md:grid-cols-[450px_1fr] gap-10 items-center bg-brand-card"
        image={{
          src: site.images.comoFunciona,
          alt: 'Plano',
          containerClassName: 'h-full min-h-[250px]',
          placement: 'left',
        }}
      >
        <div className="mt-10 space-y-8 ">
          {site.sections.comoFunciona.steps.map((step, index) => {
            const Icon = COMO_FUNCIONA_ICONS[index] ?? BadgeCheck;

            return (
              <div
                key={step.title}
                className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8"
              >
                <div className="flex items-center justify-center">
                  <div
                    className="flex h-28 w-24 items-center justify-center bg-[#3F4652] border border-white/10 shadow-[0_18px_45px_rgba(0,0,0,0.25)]"
                    style={{
                      clipPath:
                        'polygon(0% 0%, 50% 12%, 100% 0%, 100% 82%, 50% 100%, 0% 82%)',
                    }}
                  >
                    <Icon
                      className="h-8 w-8 text-primary-200"
                      aria-hidden
                      strokeWidth={1.8}
                    />
                  </div>
                </div>

                <div className="sm:flex-1">
                  <h4 className="font-serif text-xl sm:text-2xl">
                    {`${index + 1}. ${step.title}`}
                  </h4>
                  <p className="mt-2 text-base sm:text-lg text-brand-text/80">
                    {step.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* MERCADO */}
      <Section
        id="mercado"
        title={site.sections.mercado.title}
        className="grid md:grid-cols-[1fr_450px] md:gap-10 items-center bg-brand-card"
        image={{
          src: site.images.mercado,
          alt: 'Mercado',
          containerClassName: 'h-full',
          placement: 'right',
        }}
      >
        <div className="grid lg:grid-cols-2 xl:grid-cols-3  gap-6 mt-10 md:mt-6">
          {site.sections.mercado.stats.map((s) => (
            <div
              key={s.label}
              className="text-center border-b-2 pb-4 md:border-0 md:pb-0"
            >
              <p className="text-6xl font-serif font-bold">{s.value}</p>
              <p className="text-brand-text font-serif text-2xl mt-3">
                {s.label}
              </p>
              <p className="text-brand-text text-lg mt-2">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-6 grid lg:grid-cols-2 gap-10 lg:gap-6">
          <div className="">
            <h4 className="text-primary font-serif text-[27px]">
              Tendências Favoráveis
            </h4>
            <ul className="mt-2 text-lg text-brand-text space-y-2 list-disc list-inside text-left ml-3">
              {site.sections.mercado.trends.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>

          <div className="">
            <h4 className="text-primary font-serif text-[27px]">
              Vantagem Competitiva
            </h4>
            <ul className="mt-2 text-lg text-brand-text space-y-2 list-disc list-inside text-left ml-3">
              {site.sections.mercado.edge.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* TECNOLOGIA */}
      <Section
        id="tecnologia"
        title={site.sections.tecnologia.title}
        className="bg-brand-card px-3 md:px-10"
      >
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="">
            <h4 className="text-primary font-serif text-[27px]">
              Stack Tecnológico
            </h4>
            <ul className="mt-6 md:mt-4 space-y-2 list-disc list-inside text-left text-brand-text">
              {site.sections.tecnologia.stack.map((t, i) => {
                const phrase = t.split(':');
                const phrase1 = phrase[0];
                const phrase2 = phrase[1];

                return (
                  <li key={i}>
                    <b>{phrase1}</b>:{phrase2}
                  </li>
                );
              })}
            </ul>
            <h4 className="mt-6 text-primary font-serif text-[27px]">
              Segurança
            </h4>
            <ul className="mt-6 md:mt-4 space-y-2 list-disc list-inside text-left text-brand-text mb-2">
              {site.sections.tecnologia.security.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>

          <div>
            <ImageSlot
              src={site.images.tecnologia}
              alt="Tecnologia"
              containerClassName="h-[550px] rounded-[4px]"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 mt-6">
          <div>
            <p className="font-serif text-brand-text text-2xl">Multi-Tenant</p>
            <p className="mt-4 text-brand-text text-lg">
              {site.sections.tecnologia.multiTenant}
            </p>
          </div>

          <div>
            <p className="font-serif text-brand-text text-2xl ">Integrações</p>

            <p className="text-brand-text text-lg mt-4">
              {site.sections.tecnologia.integrations}
            </p>
          </div>
        </div>
      </Section>

      {/* EQUIPA */}
      <Section
        id="equipa"
        title={site.sections.equipa.title}
        className="bg-brand-card px-3 md:px-10"
      >
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {site.sections.equipa.founders.map((f) => (
            <div key={f.name}>
              <ImageSlot
                src={f.image}
                alt="Image"
                containerClassName="rounded-sm"
              />
              <h3 className="text-[27px] text-primary text-left font-serif font-bold mt-6">
                {f.name} — {f.role}
              </h3>
              <p className="mt-6 md:mt-2 text-brand-text  text-lg">{f.bio}</p>
              <p className="mt-6 italic text-brand-text text-lg md:px-8 text-left">
                {f.quote}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CONVITE */}
      <Section
        id="convite"
        title={site.sections.convite.title}
        subtitle={site.sections.convite.intro}
        className="grid md:grid-cols-[1fr_450px] md:gap-10 items-center bg-brand-card"
        image={{
          placement: 'right',
          src: site.images.convite,
          alt: 'Convite',
          containerClassName: 'h-full min-h-[250px]',
        }}
      >
        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          <div className="text-brand-text text-lg bg-[#3F4652] p-4 rounded-tl-4xl rounded-br-4xl">
            <p className="text-2xl font-serif">Modelo de Aquisição</p>
            <p className="mt-4">{site.sections.convite.acquisition}</p>
          </div>
          <div className="text-brand-text text-lg bg-[#3F4652] p-4 rounded-tl-4xl rounded-br-4xl">
            <p className="text-2xl font-serif">Objetivo 2026</p>
            <p className="mt-4">{site.sections.convite.goal}</p>
          </div>
        </div>
      </Section>

      {/* CONTACTO */}
      <Section
        id="contacto"
        title="Fale connosco"
        subtitle="Agende uma demonstração ou peça uma proposta."
        className="bg-brand-card px-3 md:px-10"
      >
        <div className="grid md:grid-cols-2 gap-10 mt-4">
          <div className="prose">
            <p className="text-lg text-brand-text">
              <b>Município em Linha</b> {site.sections.contacto.closing}
            </p>

            <p className="mt-6 inline-flex items-center gap-2 text-primary">
              <Mail size={20} color="#d6e5ef" />{' '}
              <a href={`mailto:${site.sections.contacto.email}`}>
                {site.sections.contacto.email}
              </a>
            </p>
          </div>
          <ContactForm />
        </div>
      </Section>

      {/* CTA */}
      <Section
        id="demo"
        title="Pronto para lançar no seu município?"
        className="px-3 md:px-10 bg-brand-card"
      >
        <div className="rounded-3xl mt-10 bg-primary-600 text-white px-4 p-8 md:p-12 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-semibold">
              Vamos pôr o Município em Linha
            </h3>
            <p className="mt-1 text-primary-100">
              Implementação em poucas semanas com formação e migração.
            </p>
          </div>
          <div className="text-center">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-2xl bg-white text-primary-700 px-5 py-3 font-medium w-full md:w-fit"
            >
              Agendar demo
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
