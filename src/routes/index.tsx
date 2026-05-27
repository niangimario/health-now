import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "A receita natural que mudou a minha vida — Saúde Masculina" },
      {
        name: "description",
        content:
          "Descobre a receita 100% natural que ajuda a retardar a ejaculação e a recuperar a confiança na cama. Guia completo do urologista.",
      },
      { property: "og:title", content: "A receita natural que mudou a minha vida" },
      {
        property: "og:description",
        content:
          "Receita natural simples para durar mais tempo na cama. Aprende o método e adquire o livro completo.",
      },
      { property: "og:type", content: "article" },
    ],
  }),
});

const CTA_URL = "https://pay.hotmart.com/Q105935995H?checkoutMode=10";

function BuyButton({ className = "" }: { className?: string }) {
  const handleClick = () => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "InitiateCheckout");
    }
  };

  return (
    <a
      href={CTA_URL}
      onClick={handleClick}
      className={
        "inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all hover:bg-emerald-700 hover:shadow-xl hover:-translate-y-0.5 sm:text-lg " +
        className
      }
    >
      Adquirir o livro agora →
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Header */}
      <header className="border-b border-slate-100">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-emerald-600" />
            <span className="text-lg font-semibold tracking-tight text-slate-900">
              Saúde Masculina
            </span>
          </div>
          <span className="hidden text-sm text-slate-500 sm:block">Blog • Urologia</span>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        <article>
          {/* Category */}
          <div className="mb-4 flex items-center gap-3 text-sm">
            <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700">
              Saúde Sexual
            </span>
            <span className="text-slate-400">Leitura de 6 min</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            A receita natural que mudou a minha vida — <span className="text-emerald-600">e pode mudar a tua.</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Tu só não duras 15, 20 ou 30 minutos porque ninguém te ensinou a alimentação certa.
            A culpa não é tua. Não és fraco, nem ansioso como muitos dizem.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Eu também já passei por isso e hoje já não passo.{" "}
            <strong className="text-slate-900">
              "Basta consumires a coisa certa que isso passa."
            </strong>
          </p>

          {/* Story */}
          <section className="mt-10 space-y-5 text-[17px] leading-relaxed text-slate-700">
            <p>
              Vou te passar agora uma receita que vai te livrar da ejaculação precoce. Essa
              receita aprendi com um senhor de idade no supermercado. Sempre que eu ia ao
              supermercado falava com ele. Ele era atendente, e um dia vi uma aliança no dedo
              dele e disse:
            </p>

            <blockquote className="border-l-4 border-emerald-600 bg-emerald-50/40 px-5 py-3 italic text-slate-700">
              — O senhor é casado?
            </blockquote>

            <p>Ele disse que sim. Então eu lhe disse:</p>

            <blockquote className="border-l-4 border-emerald-600 bg-emerald-50/40 px-5 py-3 italic text-slate-700">
              — Deve ser complicado ter mulher em casa. Nós homens ejaculamos muito rápido e
              dependemos sempre do pénis levantar a segunda vez, porque aí sim demoramos mais um
              pouquinho, mas já passamos vergonha.
            </blockquote>

            <p>Ele disse:</p>

            <blockquote className="border-l-4 border-emerald-600 bg-emerald-50/40 px-5 py-3 italic text-slate-700">
              — Não passo por isso. Vamos ao setor das frutas, vou te dar uma receita para acabar
              com isso.
            </blockquote>

            <p>E é essa mesma receita que vou vos dar porque funcionou muito comigo...</p>
          </section>

          {/* Recipe card */}
          <section className="mt-12 rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">Ingredientes</h2>
            <ul className="mt-5 space-y-3 text-[17px] text-slate-700">
              <li className="flex gap-3"><span>🍌</span><span>Casca de banana</span></li>
              <li className="flex gap-3"><span>🧄</span><span>1 dente de alho</span></li>
              <li className="flex gap-3"><span>🍯</span><span>1 colher de mel</span></li>
              <li className="flex gap-3"><span>💧</span><span>Um pouquinho de água</span></li>
              <li className="flex gap-3"><span>🥚</span><span>Ovos de codorniz (brancos com manchas pretas)</span></li>
            </ul>

            <h3 className="mt-8 text-xl font-bold text-slate-900">Modo de preparo</h3>
            <p className="mt-3 text-[17px] leading-relaxed text-slate-700">
              Coloque tudo no liquidificador e faça um batido. Tome <strong>2× ao dia</strong>.
              Depois de <strong>10 dias</strong> já verás o efeito.
            </p>
          </section>

          <section className="mt-10 space-y-5 text-[17px] leading-relaxed text-slate-700">
            <p>
              Eu tinha vergonha de transar com mulheres para não passar vergonha. Depois disso
              perdi a vergonha — só quis mostrar as minhas habilidades, porque habilidades na
              cama todos temos. O que falta é o tempo de qualidade com o pénis ereto para
              fazermos as coisas, e essa receita ajudou.
            </p>

            <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-amber-900">
              <p className="font-semibold">⚠️ Atenção</p>
              <p className="mt-2">
                Essa receita é crónica. Tens que tomar durante alguns dias para começares a ver
                os efeitos. Para o teu pénis começar a retardar a ejaculação vai demorar uns
                dias para acontecer.
              </p>
            </div>

            <p>
              Mas existe algo ainda mais poderoso…
            </p>

            <p>
              Quando comecei a aprofundar os meus estudos sobre saúde sexual masculina, descobri centenas de receitas naturais feitas com frutas, cascas de frutas e ingredientes simples do dia a dia que geram um efeito muito mais rápido.
            </p>

            <p className="font-bold text-slate-900">
              "Aceleradoras de Resultados"
            </p>

            <p>
              Tomou agora… Começas a sentir o efeito agora.
            </p>

            <p>
              Receitas naturais que ajudam a retardar a ejaculação, muitos homens chegam ao ponto de fazer esforço para conseguir ejacular mais rápido.
            </p>

            <p>
              E o melhor de tudo? São receitas totalmente naturais, feitas com frutas, cascas de frutas e ingredientes simples que fazem parte do nosso dia a dia. Nada químico, nada complicado. Estás receitas aceleradoras de resultados, encontras no meu livro "Retardador de Ejaculação" que são apenas R$47,90
            </p>
          </section>

          {/* CTA card */}
          <section
            id="adquirir"
            className="mt-14 overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-8 sm:p-10"
          >
            <div className="mb-3 inline-flex rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700">
              Recomendação do Especialista
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Livro "Retardador de Ejaculação"
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-slate-700">
              Um guia completo com receitas naturais e estratégias práticas para te ajudar a
              durar muito mais tempo na cama de forma simples e discreta.
            </p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-4xl font-bold text-slate-900">R$47,90</span>
              <span className="text-sm text-slate-500">pagamento único</span>
            </div>

            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              Sinceramente, eu gostaria de ter tido acesso a um material assim anos atrás. Teria
              encurtado muito o caminho e evitado muita frustração. Aproveita enquanto tens essa
              oportunidade.
            </p>

            <div className="mt-8">
              <BuyButton />
              <p className="mt-3 text-xs text-slate-500">
                Acesso imediato após a confirmação do pagamento.
              </p>
            </div>
          </section>
        </article>
      </main>

      <footer className="mt-16 border-t border-slate-100">
        <div className="mx-auto max-w-3xl px-6 py-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Saúde Masculina. Conteúdo informativo — consulte sempre
          um profissional de saúde.
        </div>
      </footer>
    </div>
  );
}
