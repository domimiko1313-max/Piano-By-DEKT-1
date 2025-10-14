import { SubmissionForm } from "@/components/SubmissionForm";
import { TrackCard } from "@/components/TrackCard";
import { ShopCard } from "@/components/ShopCard";
import { MuseScoreCard } from "@/components/MuseScoreCard";
import { SearchBar } from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { Music2, Sparkles, ShoppingBag } from "lucide-react";
import { useState } from "react";
import pianoHero from "@/assets/piano-hero.jpg";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showShop, setShowShop] = useState(false);

  const shopProducts = [
    { title: "JUPITORIA (Piano Solo)", price: "20 zł", purchaseUrl: "https://www.naffy.io/dominik-domin-cgSVq/jupitoria-pdf-notes-3wd", isBestseller: true },
    { title: "Restless (Piano Solo)", price: "18 zł", purchaseUrl: "https://www.naffy.io/dominik-domin-cgSVq/restless-pdf-notes-P3I" },
    { title: "Ablaze (Piano Solo)", price: "15 zł", purchaseUrl: "https://www.naffy.io/dominik-domin-cgSVq/ablaze-pdf-notes-ZgP" },
    { title: "Zandaka (Piano Solo)", price: "13 zł", purchaseUrl: "https://www.naffy.io/dominik-domin-cgSVq/zandaka-pdf-notes-5iq" },
    { title: "Spesus (Piano Solo)", price: "17 zł", purchaseUrl: "https://www.naffy.io/dominik-domin-cgSVq/spesus-pdf-notes-KBC" },
    { title: "Until We Meet Again (Piano Solo)", price: "16 zł", purchaseUrl: "https://www.naffy.io/dominik-domin-cgSVq/until-we-meet-again-pdf-notes-llU" },
  ];

  const featuredScores = [
    { title: "Supernova (Orchestral)", category: "Orchestral", scoreId: "27743728" },
    { title: "Until We Meet Again (Piano Solo)", category: "Piano", scoreId: "27720364" },
  ];

  const allScores = [
    { title: "Procrastinating Perfectionist (Piano Solo)", category: "Piano", scoreId: "27102838" },
    { title: "Seeking (Piano Solo)", category: "Piano", scoreId: "27256486" },
    { title: "INFERNO (Piano Solo)", category: "Piano", scoreId: "27202720" },
    { title: "Clarinet Sonata (Piano And Clarinet Duet)", category: "Piano", scoreId: "27112150" },
    { title: "The Best!!! (Orchestral)", category: "Piano", scoreId: "27085228" },
    { title: "Playing With Love (Piano And Violino Duet)", category: "Piano", scoreId: "27081232" },
    { title: "Valiance (Piano Solo)", category: "Piano", scoreId: "26972164" },
    { title: "JUPITORIA (Piano Solo)", category: "Piano", scoreId: "26946856" },
    { title: "Rainy Day (Piano Solo)", category: "Piano", scoreId: "27475942" },
    { title: "Flow (Piano Solo)", category: "Piano", scoreId: "27475981" },
    { title: 'Transcendental Etude No. 13 "DEKTOMANIA" (Piano Solo)', category: "Piano", scoreId: "27476065" },
    { title: "Carols of the Bells (Arrangement, Piano Solo)", category: "Piano", scoreId: "27476317" },
    { title: "Elementia (Piano Solo)", category: "Piano", scoreId: "27476410" },
    { title: "Lunar Passion (Orchestral)", category: "Piano", scoreId: "27476578" },
    { title: "Ablaze (Piano Solo)", category: "Piano", scoreId: "26892952" },
    { title: "Fluse (Piano Solo)", category: "Piano", scoreId: "27477319" },
    { title: "Restless (Piano Solo)", category: "Piano", scoreId: "27504301" },
    { title: "Spesus (Piano Solo)", category: "Piano", scoreId: "27504424" },
    { title: "Quantora (Piano Solo)", category: "Piano", scoreId: "27504499" },
    { title: "Iris Flower (Piano Solo)", category: "Piano", scoreId: "27504544" },
    { title: "Zandaka (Piano Solo)", category: "Piano", scoreId: "27477607" },
  ];

  const filteredScores = allScores.filter(score =>
    score.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const submittedTracks = [
    {
      title: "Taniec wiosenny",
      author: "Marek Nowak",
      description: "Radosna melodia przypominająca pierwsze dni wiosny.",
      fileType: "midi" as const,
    },
    {
      title: "Refleksje o czasie",
      author: "Ewa Wiśniewska",
      description: "Melancholijny utwór o przemijaniu chwil.",
      fileType: "pdf" as const,
    },
    {
      title: "Etiuda minimalistyczna",
      author: "Piotr Lewandowski",
      fileType: "pdf" as const,
    },
  ];

  const scrollToForm = () => {
    document.getElementById("submission-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToShop = () => {
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative overflow-hidden backdrop-blur-sm">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${pianoHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative container mx-auto px-4 py-20 md:py-32 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              DEKTSTORE
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Odkryj oryginalne, autorskie kompozycje fortepianowe Dominika Nieroby/DEKT'a, od solowych utworów po aranżacje i duety.
            </p>
            <div className="text-4xl">👇</div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button variant="gradient" size="lg" onClick={scrollToShop}>
                <ShoppingBag className="w-5 h-5 mr-2" />
                Sklep
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <section className="container mx-auto px-4 py-6">
        <div className="max-w-2xl mx-auto">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">SKLEP</h2>
          <p className="text-lg text-muted-foreground">
            Po zakupie nuty przyjdą na twojego e-mail'a, najdłużej po 30 sekundach
          </p>
          <p className="text-red-500 font-bold mt-2">
            ⛔️⛔️⛔️ PODAJ SWÓJ PRAWDZIWY E-MAIL ⛔️⛔️⛔️
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {shopProducts.map((product, index) => (
            <ShopCard key={index} {...product} />
          ))}
        </div>
      </section>

      {/* Featured Scores Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-center gap-2 mb-12">
          <Sparkles className="w-6 h-6 text-accent" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Najnowsze Utwory
          </h2>
          <Sparkles className="w-6 h-6 text-accent" />
        </div>
        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {featuredScores.map((score, index) => (
            <MuseScoreCard key={index} {...score} />
          ))}
        </div>
      </section>

      {/* All Scores Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Partytury i Podgląd
        </h2>
        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {filteredScores.map((score, index) => (
            <MuseScoreCard key={index} {...score} />
          ))}
        </div>
      </section>

      {/* Submitted Tracks Grid */}
      <section className="container mx-auto px-4 py-16 glass rounded-3xl my-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Utwory od naszej społeczności
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {submittedTracks.map((track, index) => (
            <TrackCard key={index} {...track} />
          ))}
        </div>
      </section>

      {/* Submission Form Section */}
      <section id="submission-form" className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Podziel się swoim utworem
            </h2>
            <p className="text-lg text-muted-foreground">
              Masz pomysł na utwór? Podziel się nim i stań się częścią DEKTSTORE!
            </p>
          </div>
          <SubmissionForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 backdrop-blur-sm border-t border-white/5 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 DEKTSTORE. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
