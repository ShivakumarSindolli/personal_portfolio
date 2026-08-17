import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import AQIFeatured from "@/components/projects/AQIFeatured";
import BookExchangeCard from "@/components/projects/BookExchangeCard";
import RideBookingCard from "@/components/projects/RideBookingCard";
import CaseStudyModal from "@/components/projects/CaseStudyModal";
import { aqiProject, bookExchangeProject, rideBookingProject } from "@/data/projects";

type Slug =
  | typeof aqiProject.slug
  | typeof bookExchangeProject.slug
  | typeof rideBookingProject.slug;

export default function SelectedWorks() {
  const [openSlug, setOpenSlug] = useState<Slug | null>(null);

  return (
    <section id="work" className="bg-bg py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Selected Work"
          heading="Selected"
          italicWord="Work"
          subtext="Things I've built, experimented with, and learned from."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12">
          <AQIFeatured onOpenCaseStudy={() => setOpenSlug(aqiProject.slug)} />
          <BookExchangeCard onOpenCaseStudy={() => setOpenSlug(bookExchangeProject.slug)} />
          <RideBookingCard onOpenCaseStudy={() => setOpenSlug(rideBookingProject.slug)} />
        </div>
      </div>

      <CaseStudyModal slug={openSlug} onClose={() => setOpenSlug(null)} />
    </section>
  );
}