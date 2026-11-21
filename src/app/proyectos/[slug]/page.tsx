import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import ProjectDetail from "@/components/ProjectDetail";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { projects } from "@/data/content";
import { LanguageProvider } from "@/i18n/LanguageProvider";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.title} — Marina Ziembar`,
    description: p.details.es,
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <LanguageProvider title={{ es: p.title, en: p.title }}>
      <Cursor />
      <Nav base="/" />
      <main>
        <ProjectDetail slug={p.slug} />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
