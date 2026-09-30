"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Space from "@/components/Space";
import Ritual from "@/components/Ritual";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import BodyMap from "@/components/BodyMap";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import LeafBranch from "@/components/LeafBranch";
import Reveal from "@/components/Reveal";

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("Phòng tiêu chuẩn");

  const handleOpenBooking = (roomName = "Phòng tiêu chuẩn") => {
    setSelectedRoom(roomName);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#E5EEE7] flex justify-center">
      <div className="relative w-full max-w-[1536px] min-h-screen bg-[#EAF1EB] text-[#143827] overflow-hidden shadow-[0_0_60px_rgba(20,56,39,0.06)] border-x border-[#D5E3D8]/40">
        {/* Decorative leaf branch overlays for lower sections */}
        <LeafBranch position="mid-left" />
        <LeafBranch position="bottom-right" />

        {/* Navigation Bar */}
        <Navbar onOpenBooking={handleOpenBooking} />

        {/* Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Intro Section - Nơi để nghỉ lại */}
        <Reveal delay={100}>
          <Intro onOpenBooking={handleOpenBooking} />
        </Reveal>

        {/* Space Section - Khám phá không gian của bạn (Phòng nghỉ) */}
        <Reveal delay={100}>
          <Space onOpenBooking={handleOpenBooking} />
        </Reveal>

        {/* Ritual Section - Những khoảnh khắc tại Cỏ Homestay (Hình ảnh thực tế) */}
        <Reveal delay={100}>
          <Ritual />
        </Reveal>

        {/* Services Section - Tiện nghi */}
        <Reveal delay={100}>
          <Services />
        </Reveal>

        {/* Testimonial Section - Dành cho ai? */}
        <Reveal delay={100}>
          <Testimonial onOpenBooking={handleOpenBooking} />
        </Reveal>

        {/* BodyMap Section - Vị trí Vũng Tàu */}
        <Reveal delay={100}>
          <BodyMap />
        </Reveal>

        {/* Final CTA Section - Hẹn bạn ở Vũng Tàu */}
        <Reveal delay={100}>
          <FinalCta onOpenBooking={handleOpenBooking} />
        </Reveal>

        {/* Footer */}
        <Footer />

        {/* Booking Modal */}
        <BookingModal
          isOpen={bookingModalOpen}
          onClose={handleCloseBooking}
          initialRoom={selectedRoom}
        />
      </div>
    </div>
  );
}
