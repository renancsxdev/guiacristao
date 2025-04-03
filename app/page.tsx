import Link from "next/link"
import Image from "next/image"
import { Check, Star, CheckCircle, Sparkles, Download, BookOpen, Gift, FileText, Award, ArrowRight } from "lucide-react"

export default function BibleGuideLanding() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-100 via-purple-50 to-white py-20 px-4">
        {/* Partículas flutuantes animadas */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }, (_, i) => {
            const emojis = ["✝️", "📚", "✨", "💫", "🙏", "👼", "❤️"]
            const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]
            const style = {
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 15}s`,
            }

            return (
              <div key={i} className="absolute animate-float text-6xl opacity-10" style={style} aria-hidden="true">
                {randomEmoji}
              </div>
            )
          })}
        </div>

        {/* Formas decorativas */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div
            className="absolute top-20 left-10 w-40 h-40 rounded-full bg-yellow-200 opacity-20 animate-pulse"
            style={{ animationDuration: "8s" }}
          ></div>
          <div
            className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-blue-200 opacity-20 animate-pulse"
            style={{ animationDuration: "10s" }}
          ></div>
          <div
            className="absolute top-40 right-40 w-20 h-20 rounded-full bg-green-200 opacity-20 animate-pulse"
            style={{ animationDuration: "6s" }}
          ></div>
          <div
            className="absolute bottom-40 left-20 w-32 h-32 rounded-full bg-purple-200 opacity-20 animate-pulse"
            style={{ animationDuration: "12s" }}
          ></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Conteúdo de texto */}
            <div className="md:w-1/2 text-center md:text-left">
              <div className="inline-block relative mb-6">
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 animate-spin-slow blur-xl opacity-30"></span>
                <span className="relative inline-block bg-white text-yellow-500 text-sm font-bold px-4 py-2 rounded-full shadow-md">
                  <Sparkles className="inline-block w-4 h-4 mr-1" /> GUIA GRATUITO
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 leading-tight drop-shadow-sm mb-4">
                Guia para Pais: Como Ensinar a Bíblia de Forma Divertida
              </h1>
              <h2 className="text-lg md:text-xl text-blue-500 mb-6">
                Estratégias práticas para transformar o ensino bíblico em momentos inesquecíveis
              </h2>

              <div className="flex flex-wrap gap-3 mb-6 justify-center md:justify-start">
                <div className="flex items-center bg-white px-3 py-2 rounded-full shadow-sm border border-gray-100">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  <span>100% Gratuito</span>
                </div>
                <div className="flex items-center bg-white px-3 py-2 rounded-full shadow-sm border border-gray-100">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  <span>5 Estratégias Práticas</span>
                </div>
                <div className="flex items-center bg-white px-3 py-2 rounded-full shadow-sm border border-gray-100">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  <span>PDF Ilustrado</span>
                </div>
              </div>

              <a
                href="https://kitcristao.vercel.app/Guia-para-Pais-Ensinando-a-Biblia-de-Forma-Divertida-e-Envolvente.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transform transition-transform hover:scale-105"
              >
                <div className="flex items-center justify-center gap-2">
                  <Download className="h-5 w-5" />
                  <span>Baixar Guia Gratuito</span>
                </div>
              </a>
            </div>

            {/* Imagem do guia */}
            <div className="md:w-1/2 relative mt-8 md:mt-0">
              <div className="absolute -top-6 -right-6 bg-yellow-400 text-white text-sm font-bold py-2 px-4 rounded-full transform rotate-12 shadow-lg z-10">
                EXCLUSIVO
              </div>

              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-full transform -rotate-6 shadow-lg z-10">
                GRATUITO
              </div>

              {/* Efeito de brilho */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-transparent to-blue-300 opacity-30 rounded-xl animate-pulse"
                style={{ animationDuration: "3s" }}
              ></div>

              {/* Container da imagem com sombra e borda */}
              <div className="relative bg-white p-4 rounded-xl shadow-2xl border-4 border-yellow-300 transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
                {/* Imagem do guia */}
                <Image
                  src="/images/guide-cover.png"
                  alt="Guia para Pais: Como Ensinar a Bíblia de Forma Divertida"
                  width={400}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
        <div className="container mx-auto max-w-4xl relative">
          {/* Elementos decorativos de fundo */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
          </div>

          {/* Título da seção */}
          <div className="text-center mb-12 relative z-10">
            <div className="inline-block bg-blue-100 text-blue-600 font-semibold px-4 py-2 rounded-full mb-4 shadow-sm">
              BENEFÍCIOS DO GUIA
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
              Por que baixar nosso Guia Gratuito? 🎁
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Veja como o Guia para Pais pode transformar a maneira como você ensina a Bíblia para seus filhos
            </p>
          </div>

          {/* O que você ganha - Atualizado com a oferta e guia gratuito - MELHORADO */}
          <div className="mb-12 w-full max-w-2xl mx-auto rounded-2xl bg-white p-1 shadow-xl relative z-10 overflow-hidden">
            {/* Background decorativo */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-yellow-100 opacity-50"></div>

            {/* Conteúdo */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-100">
              {/* Badge exclusivo */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold py-2 px-4 rounded-full transform rotate-12 shadow-lg animate-pulse">
                EXCLUSIVO
              </div>

              <h3 className="mb-6 text-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
                O que você encontra no guia gratuito?
              </h3>

              {/* Conteúdo do guia */}
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl mb-8 border border-amber-200 shadow-md relative overflow-hidden">
                {/* Elementos decorativos */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200 rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-200 rounded-full opacity-10 transform -translate-x-12 translate-y-12"></div>

                {/* Título com ícone */}
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-3 rounded-full shadow-lg mr-3">
                    <Gift className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-amber-700">Conteúdo do Guia Gratuito:</h4>
                </div>

                {/* Conteúdo do guia */}
                <div className="bg-white rounded-lg p-4 mb-4 shadow-sm border border-amber-100 relative">
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                    <span className="inline-block bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      GRÁTIS
                    </span>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3 flex-shrink-0">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-blue-700 mb-1">5 Estratégias Práticas</h5>
                      <p className="text-sm text-gray-600">
                        Aprenda <span className="font-semibold">5 estratégias comprovadas</span> para ensinar histórias
                        bíblicas de forma divertida e memorável para crianças de todas as idades.
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">Jogos Bíblicos</span>
                        <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">
                          Atividades Criativas
                        </span>
                        <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">
                          Dicas Exclusivas
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Oferta especial */}
                <div className="bg-white rounded-lg p-4 shadow-sm border border-amber-100 relative">
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                    <span className="inline-block bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      ESPECIAL
                    </span>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-lg mr-3 flex-shrink-0">
                      <Award className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-amber-700 mb-1">Oferta Especial no Final do Guia</h5>
                      <p className="text-sm text-gray-600">
                        Ao final do guia, você terá acesso a uma <span className="font-semibold">oferta exclusiva</span>{" "}
                        do Kit da Criança Cristã, com materiais educativos e divertidos para fortalecer a fé dos seus
                        filhos.
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="bg-amber-50 text-amber-600 text-xs px-2 py-1 rounded-full">
                          Desconto Especial
                        </span>
                        <span className="bg-amber-50 text-amber-600 text-xs px-2 py-1 rounded-full">
                          Tempo Limitado
                        </span>
                        <span className="bg-amber-50 text-amber-600 text-xs px-2 py-1 rounded-full">
                          Bônus Exclusivos
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefícios adicionais */}
              <h4 className="text-lg font-bold text-blue-700 mb-3 text-center">Com este guia, você vai:</h4>
              <ul className="space-y-4 mb-6">
                <li className="flex items-center bg-blue-50 p-3 rounded-lg">
                  <Check className="mr-3 h-6 w-6 text-green-500 flex-shrink-0" />
                  <span>Transformar o estudo bíblico em momentos divertidos e memoráveis</span>
                </li>
                <li className="flex items-center bg-purple-50 p-3 rounded-lg">
                  <Check className="mr-3 h-6 w-6 text-green-500 flex-shrink-0" />
                  <span>Aprender técnicas criativas para ensinar valores cristãos</span>
                </li>
                <li className="flex items-center bg-green-50 p-3 rounded-lg">
                  <Check className="mr-3 h-6 w-6 text-green-500 flex-shrink-0" />
                  <span>Fortalecer a fé dos seus filhos de forma leve e natural</span>
                </li>
              </ul>

              <div className="text-center">
                <a
                  href="https://kitcristao.vercel.app/Guia-para-Pais-Ensinando-a-Biblia-de-Forma-Divertida-e-Envolvente.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg transform transition-transform hover:scale-105"
                >
                  Quero Baixar o Guia Agora!
                </a>
              </div>
            </div>
          </div>

          {/* Depoimento - Atualizado com a nova imagem */}
          <div className="mb-12 w-full max-w-2xl mx-auto rounded-lg bg-blue-100 p-6 shadow-md relative overflow-hidden">
            {/* Fundo com efeito de luz */}
            <div className="absolute inset-0 opacity-15 z-0">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/3 flex justify-center">
                <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-lg">
                  <Image
                    src="/images/praying-hands.png"
                    alt="Mãos em oração"
                    width={150}
                    height={150}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="md:w-2/3 text-center md:text-left">
                <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                  <p className="italic text-blue-900 text-lg mb-3">
                    "Este guia transformou a maneira como ensino a Bíblia para meus filhos. As estratégias são simples,
                    práticas e realmente funcionam. Agora, nossos momentos de estudo bíblico são os favoritos da
                    semana!"
                  </p>
                  <p className="font-medium text-blue-800">– Mariana, mãe de três filhos.</p>
                </div>

                <div className="mt-3 flex justify-center md:justify-start">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cards de benefícios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Aprendizado Divertido",
                icon: BookOpen,
                iconBg: "from-blue-400 to-indigo-500",
                description:
                  "Transforme o estudo bíblico em uma experiência divertida e memorável para toda a família.",
                badge: "EDUCATIVO",
                badgeBg: "bg-green-500",
                badgeText: "text-white",
              },
              {
                title: "Fortalecimento da Fé",
                icon: Star,
                iconBg: "from-yellow-400 to-orange-500",
                description: "Fortaleça os valores cristãos e o conhecimento bíblico de forma leve e acessível.",
                badge: "ESPIRITUAL",
                badgeBg: "bg-yellow-500",
                badgeText: "text-white",
              },
              {
                title: "Conexão Familiar",
                icon: Gift,
                iconBg: "from-purple-400 to-pink-500",
                description: "Crie momentos especiais de conexão com seus filhos através das histórias da Bíblia.",
                badge: "RELACIONAL",
                badgeBg: "bg-purple-500",
                badgeText: "text-white",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 shadow-xl transform transition-all duration-500 hover:scale-102 hover:shadow-2xl group overflow-hidden text-center"
              >
                {/* Conteúdo */}
                <div className="p-6">
                  <div className="flex flex-col items-center mb-4">
                    {/* Ícone */}
                    <div className={`bg-gradient-to-br ${item.iconBg} p-3 rounded-xl shadow-lg mx-auto mb-2`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Badge */}
                    <div className={`${item.badgeBg} ${item.badgeText} text-xs font-bold px-3 py-1 rounded-full`}>
                      {item.badge}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-blue-700 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>

                  {/* Botão de ação */}
                  <div className="mt-auto pt-2">
                    <a
                      href="https://kitcristao.vercel.app/Guia-para-Pais-Ensinando-a-Biblia-de-Forma-Divertida-e-Envolvente.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center hover:bg-blue-50 text-blue-600 font-medium py-2 px-4 rounded-lg border border-blue-200 transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Baixar Guia Gratuito</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção do Guia com Imagem */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-block bg-purple-100 text-purple-600 font-semibold px-4 py-2 rounded-full mb-4">
              CONHEÇA O GUIA
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600 mb-4">
              Guia Exclusivo para Pais 📚
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Um material completo para transformar o ensino bíblico em momentos especiais
            </p>
          </div>

          <div className="relative mx-auto max-w-md">
            {/* Elementos decorativos */}
            <div className="absolute -top-6 -left-6 bg-yellow-400 text-white text-sm font-bold py-2 px-4 rounded-full transform -rotate-12 shadow-lg z-10">
              EXCLUSIVO
            </div>

            <div className="absolute -top-4 -right-4 bg-green-500 text-white text-sm font-bold py-2 px-4 rounded-full transform rotate-12 shadow-lg z-10">
              GRATUITO
            </div>

            <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-full transform rotate-6 shadow-lg z-10">
              PDF ILUSTRADO
            </div>

            <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white text-sm font-bold py-2 px-4 rounded-full transform -rotate-6 shadow-lg z-10">
              5 ESTRATÉGIAS
            </div>

            {/* Efeito de brilho */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-transparent to-blue-300 opacity-30 rounded-xl animate-pulse"
              style={{ animationDuration: "3s" }}
            ></div>

            {/* Container da imagem com sombra e borda */}
            <div className="relative bg-white p-4 rounded-xl shadow-2xl border-4 border-yellow-300 transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
              {/* Imagem do guia */}
              <Image
                src="/images/guide-cover.png"
                alt="Guia para Pais: Como Ensinar a Bíblia de Forma Divertida"
                width={400}
                height={600}
                className="w-full h-auto rounded-lg"
              />

              {/* Detalhes sobre o guia */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600 to-blue-600/80 text-white p-4 rounded-b-lg">
                <h3 className="font-bold text-lg mb-1">Guia para Pais</h3>
                <p className="text-sm">Ensine a Bíblia de forma divertida e envolvente para seus filhos</p>
              </div>
            </div>
          </div>

          {/* Botão de download abaixo da imagem */}
          <div className="text-center mt-16">
            <a
              href="https://kitcristao.vercel.app/Guia-para-Pais-Ensinando-a-Biblia-de-Forma-Divertida-e-Envolvente.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-xl px-8 py-4 rounded-full shadow-xl transform transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-6 w-6" />
              <span>BAIXAR GUIA GRATUITO</span>
            </a>

            <div className="mt-4 flex justify-center">
              <a
                href="https://kitcristao.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span>Visite o Kit da Criança Cristã</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 py-6 text-center text-white">
        <div className="container mx-auto px-4">
          <p className="mb-2">© 2025 Kit da Criança Cristã. Todos os direitos reservados.</p>
          <div className="flex justify-center space-x-4">
            <Link href="#" className="text-sm hover:underline">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Contato
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

