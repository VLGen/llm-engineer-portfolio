import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BrainCircuit,
  Database,
  FileSearch,
  Gauge,
  Github,
  Mail,
  Phone,
  Plug,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";

function TelegramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0Zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.697.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.346-.479.33-.913.489-1.302.481-.428-.008-1.252-.241-1.66-.44-.668-.34-.96-.596-.96-1.079 0-.333.258-.682.793-.994 3.1-1.898 5.173-3.151 6.218-3.76C14.91 7.9 16.49 7.13 16.907 7.224Z" />
    </svg>
  );
}
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Сергей Жигалко — AI/LLM инженер | RAG, LLM, автоматизация" },
      {
        name: "description",
        content:
          "AI/LLM инженер: RAG-ассистенты по базе знаний, обработка документов, интеграции LLM через API, оценка качества и оптимизация промптов.",
      },
      { property: "og:title", content: "Сергей Жигалко — AI/LLM инженер" },
      {
        property: "og:description",
        content:
          "Автоматизирую бизнес-процессы с помощью RAG, LLM и API-интеграций: ассистенты, поиск по базе знаний, обработка документов, отчёты.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const values = [
  {
    icon: BrainCircuit,
    title: "RAG-ассистенты",
    text: "Ассистенты по внутренней базе знаний: точные ответы со ссылками на источники.",
  },
  {
    icon: FileSearch,
    title: "Обработка документов",
    text: "Извлечение данных из договоров, актов и отчётов без ручного разбора.",
  },
  {
    icon: Plug,
    title: "Интеграции через API",
    text: "Подключение LLM к внутренним системам компании: CRM, хранилища, сервисы.",
  },
  {
    icon: Gauge,
    title: "Оценка и промпты",
    text: "Метрики качества ответов, A/B-тесты промптов и оптимизация стоимости.",
  },
];

const experience = [
  "Разработал RAG-пайплайн на 500+ внутренних документах: время поиска ответов сокращено с 15–20 минут до 30 секунд.",
  "Внедрил слой кэширования в Redis: ускорение обработки частых вопросов в 10 раз, нагрузка на поддержку снижена на 20%.",
  "Провёл тестирование AI-агента на 600 вопросах: recall релевантных ответов повышен с 78% до 89%.",
  "Спроектировал и вывел в продакшен RAG-пайплайн: LlamaIndex, LangChain, Qdrant, Qwen-72B.",
];

const projects = [
  {
    title: "AI-наставник по ML",
    text: "AI-агент на RAG-системе из 300+ статей по машинному обучению. Полный цикл: сбор и обработка данных, чанкинг, векторный индекс, генерация ответов, контейнеризация.",
    stack: ["Python", "LlamaIndex", "Qwen", "Qdrant", "Docker"],
    link: "https://github.com/VLGen/AI-mentor",
  },
  {
    title: "Голосовой помощник-повар",
    text: "Голосовой ассистент для приготовления блюд: подбор рецептов и сопровождение на этапах готовки с использованием ASR и LLM.",
    stack: ["Python", "Vosk", "Transformers", "Qwen", "Sounddevice"],
    link: "https://github.com/VLGen/AI-Voice-controlled-cooking-assistant",
  },
];

const skills = [
  "Python",
  "OOP",
  "FastAPI",
  "LlamaIndex",
  "LangChain",
  "RAG",
  "LLM",
  "Qdrant",
  "Redis",
  "PostgreSQL",
  "Docker",
  "API",
  "Git",
  "Qwen",
  "TTS",
  "ASR",
];

const process = [
  { title: "Discovery", text: "Разбираю процесс и нахожу точки автоматизации." },
  { title: "MVP", text: "Собираю быстрый прототип." },
  { title: "Интеграция", text: "Подключаю к внутренним системам через API." },
  { title: "Оценка", text: "Измеряю качество и эффективность." },
  { title: "Масштабирование", text: "Передаю команде и обучаю сотрудников." },
];

const nav = [
  { href: "#value", label: "Ценность" },
  { href: "#experience", label: "Опыт" },
  { href: "#projects", label: "Проекты" },
  { href: "#skills", label: "Навыки" },
  { href: "#process", label: "Процесс" },
  { href: "#contacts", label: "Контакты" },
];

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {kicker}
      </span>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
    </div>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#hero" className="font-display text-sm font-bold tracking-tight sm:text-base">
            С. Жигалко<span className="text-primary">.</span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Button asChild size="sm" className="rounded-full">
            <a href="#contacts">Связаться</a>
          </Button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="hero" className="relative overflow-hidden">
          <div className="grid-backdrop pointer-events-none absolute inset-0" />
          <div
            className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-25 blur-[120px] bg-gradient-accent"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
            <Reveal>
              <Badge
                variant="outline"
                className="rounded-full border-primary/40 bg-primary/10 px-4 py-1.5 text-primary"
              >
                AI Automation / LLM Engineer
              </Badge>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.08] sm:text-6xl lg:text-7xl">
                Сергей Жигалко — <span className="text-gradient">AI/LLM инженер</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Автоматизирую бизнес-процессы с помощью RAG, LLM и API-интеграций. Превращаю ИИ из
                чата в рабочие инструменты: ассистенты, поиск по базе знаний, обработка документов,
                отчёты.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full">
                  <a href="https://github.com/VLGen" target="_blank" rel="noreferrer">
                    <Github className="size-4" /> GitHub
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <a href="#contacts">Связаться</a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ЦЕННОСТЬ */}
        <section id="value" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <Reveal>
            <SectionTitle kicker="Ключевая ценность" title="Что я делаю для бизнеса" />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <Card className="card-hover h-full border-border/70 bg-card/60">
                  <CardContent className="p-6">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <item.icon className="size-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ОПЫТ */}
        <section id="experience" className="border-y border-border/60 bg-secondary/20">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
            <Reveal>
              <SectionTitle kicker="Опыт" title="Опыт работы в компании" />
            </Reveal>
            <Reveal delay={80}>
              <Card className="border-border/70 bg-card/70">
                <CardContent className="p-6 sm:p-9">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Database className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">SimbirSoft</h3>
                      <p className="text-sm text-primary">ML engineer</p>
                    </div>
                  </div>
                  <ul className="mt-7 space-y-4">
                    {experience.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed sm:text-base">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gradient-accent" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </section>

        {/* ПРОЕКТЫ */}
        <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <Reveal>
            <SectionTitle kicker="Проекты" title="Что уже работает" />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <Card className="card-hover group h-full border-border/70 bg-card/60">
                  <CardContent className="flex h-full flex-col p-6 sm:p-8">
                    <h3 className="text-xl font-semibold sm:text-2xl">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <Badge key={s} variant="secondary" className="rounded-full font-normal">
                          {s}
                        </Badge>
                      ))}
                    </div>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary transition-transform group-hover:translate-x-1"
                    >
                      Смотреть на GitHub <ArrowUpRight className="size-4" />
                    </a>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        {/* НАВЫКИ */}
        <section id="skills" className="border-y border-border/60 bg-secondary/20">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
            <Reveal>
              <SectionTitle kicker="Навыки" title="Стек и инструменты" />
            </Reveal>
            <div className="flex flex-wrap gap-3">
              {skills.map((s, i) => (
                <Reveal key={s} delay={i * 30}>
                  <span className="card-hover inline-flex rounded-full border border-border/70 bg-card/60 px-4 py-2 text-sm text-foreground">
                    {s}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ПРОЦЕСС */}
        <section id="process" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <Reveal>
            <SectionTitle kicker="Процесс" title="Как я работаю" />
          </Reveal>
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 90}>
                <Card className="card-hover h-full border-border/70 bg-card/60">
                  <CardContent className="p-6">
                    <span className="font-display text-3xl font-bold text-gradient">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 text-base font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* КОНТАКТЫ */}
        <section id="contacts" className="border-t border-border/60 bg-secondary/20">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
            <Reveal>
              <SectionTitle kicker="Контакты" title="По предложениям звоните или пишите:" />
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Phone,
                  label: "Телефон",
                  value: "+7 (995) 675-53-63",
                  href: "tel:+79956755363",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "s.zhigalko@internet.ru",
                  href: "mailto:s.zhigalko@internet.ru",
                },
                {
                  icon: Github,
                  label: "GitHub",
                  value: "github.com/VLGen",
                  href: "https://github.com/VLGen",
                },
                {
                  icon: TelegramIcon,
                  label: "Telegram",
                  value: "@SZh1gal",
                  href: "https://t.me/SZh1gal",
                },
              ].map((c, i) => (
                <Reveal key={c.label} delay={i * 90}>
                  <a href={c.href} target="_blank" rel="noreferrer" className="block h-full">
                    <Card className="card-hover h-full border-border/70 bg-card/60">
                      <CardContent className="flex items-center gap-4 p-6">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <c.icon className="size-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs uppercase tracking-widest text-muted-foreground">
                            {c.label}
                          </p>
                          <p className="truncate text-base font-medium">{c.value}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </Reveal>
              ))}
            </div>
            <Reveal delay={280}>
              <div className="mt-10">
                <Button asChild size="lg" className="rounded-full">
                  <a href="mailto:s.zhigalko@internet.ru">
                    <Mail className="size-4" /> Написать
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground sm:px-6">
          © 2025 Сергей Жигалко. AI Automation / LLM Engineer.
        </div>
      </footer>
    </div>
  );
}
