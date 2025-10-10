"use client";

import Image from "next/image";
import Button from "@/components/Button";
import BentoCard from "@/components/BentoCard";
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  MapPinIcon,
  PaintBrushIcon,
  HeartIcon,
} from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto z-20 relative px-4">
      <div id="hero" className="pt-24">
        {/* <Image
          src="designjam-logo.svg"
          height={100}
          width={150}
          className="h-24 w-auto mb-12"
          alt="DesignJam logo"
        /> */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl leading-14 sm:leading-17 md:leading-20 font-bold tracking-tighter">
          Bringing <span className="text-[#9AB749]">designers</span> and{" "}
          <span className="text-[#008EA3]">nonprofits</span> together to build a
          more beautiful and helpful{" "}
          <span className="text-[#FA8136]">Des Moines</span>
        </h1>
        <p className="text-2xl max-w-3xl mt-6">
          24 hour event where designers pair with non-profits to redesign logos,
          tweak websites, and beautify branding.
        </p>
        <div className="flex items-center justify-start gap-2 mt-6">
          <Button style="primary" href="" text="Designer registration" />
          <Button style="secondary" href="" text="Nonprofit application" />
        </div>
      </div>

      <div id="bento-boxes" className="mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="col-span-1">
            <BentoCard className={"flex flex-col items-start justify-between"}>
              <p className="text-lg font-medium leading-6">
                Design Jam is a weekend-long creative marathon where talented
                designers collaborate directly with Des Moines nonprofits to
                transform their visual identity. Whether it's crafting a
                memorable logo, refreshing a website, or building a complete
                brand package, our designers donate their skills to help
                organizations that make our community stronger.
              </p>
              <p className="pt-8 text-lg font-bold tracking-tight text-[#008EA3]">
                Applications close January 1st, 2026
              </p>
            </BentoCard>
          </div>

          <div className="col-span-1 md:col-span-2">
            <BentoCard className="grid grid-cols-2 gap-4">
              <div className="col-span-2 md:col-span-1 flex flex-col items-start justify-between">
                <div>
                  <h2 className="font-bold tracking-tight text-3xl mb-4">
                    Design with purpose, create with heart, build community
                    impact
                  </h2>
                  <p className="pb-14 text-lg sm:text-md">
                    Join us for a weekend of creative collaboration where your
                    design talents directly serve nonprofits making a difference
                    in Des Moines. All meals, snacks, and drinks provided
                    throughout the event.
                  </p>
                </div>
                <div className="flex items-start justify-start bg-amber-50 border border-amber-200 font-mono text-[#ED7A0F] rounded-full text-sm py-1 px-4 font-bold tracking-tight">
                  West48 Conference Center
                </div>
              </div>
              <div className="hidden md:block col-span-1">
                {/*<Image src={""} alt={""} />*/}
                <div className="w-full h-full bg-gray-500 rounded-lg" />
              </div>
            </BentoCard>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
          <div className="col-span-2 sm:col-span-1">
            <BentoCard className="flex flex-col items-start justify-between">
              <h2 className="text-xl tracking-tight font-bold mb-6">Where</h2>
              <div className="w-full">
                <div className="flex items-start justify-start gap-2 mb-6 text-lg sm:text-md">
                  <div className="rounded-full w-12 h-12 flex items-center justify-center bg-[#EBFFB4]">
                    <MapPinIcon color="#9AB749" size={32} weight="bold" />
                  </div>
                  <p>
                    West48 Conference Center
                    <br />
                    1601 48th St Suite 100
                    <br />
                    West Des Moines, IA 50266
                  </p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.7501875836265!2d-93.77072142287527!3d41.59628678300992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ec219f8051addd%3A0xffb1e95286848ef7!2sWest48%20Conference%20Center!5e0!3m2!1sen!2sus!4v1760134051489!5m2!1sen!2sus"
                  width="100%"
                  height="160"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-sm"
                />
              </div>
            </BentoCard>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <BentoCard className="flex flex-col items-start justify-between">
              <h2 className="text-xl tracking-tight font-bold mb-6">
                Who's invited
              </h2>
              <div>
                <p className={"mb-4"}>
                  <div className="flex items-center justify-start gap-2 mb-2">
                    <PaintBrushIcon color="#0AD1EE" size={24} weight="bold" />
                    <p className="font-semibold text-lg">Designers</p>
                  </div>
                  Graphic designers, web designers, brand strategists, and
                  creative professionals ready to volunteer their skills for
                  community impact.
                </p>
                <p>
                  <div className="flex items-center justify-start gap-2 mb-2">
                    <HeartIcon color="#FF9A3B" size={24} weight="bold" />
                    <p className="font-semibold text-lg">Designers</p>
                  </div>
                  501(c)3 organizations in the Des Moines area operating for
                  at least 3 months and in need of design services.
                </p>
              </div>
            </BentoCard>
          </div>

          <div className="col-span-2 md:col-span-1">
            <BentoCard className="flex flex-col items-start justify-between">
              <h2 className="text-xl tracking-tight font-bold mb-6">
                About dsmHack
              </h2>
              <p className="text-md md:text-lg mt-4">
                dsmHack is a nonprofit organization dedicated to connecting
                technology and creative professionals with local nonprofits.
                Since 2014, we've provided over $1.4 million in in-kind services
                to 78+ organizations, proving that technology and design should
                never be barriers to doing good.
              </p>
            </BentoCard>
          </div>
        </div>
      </div>

      <div id="footer" className="mt-48">
        <div
          id="footer-cta"
          className="flex flex-col items-center justify-center"
        >
          <h2 className="font-semibold text-4xl sm:text-5xl tracking-tight text-center">
            Creativity for Community Betterment
          </h2>
          <p className="text-lg sm:text-xl mt-4 text-center">
            Join us to make Des Moines a more beautiful and helpful place
          </p>
          <div className="flex items-center justify-start gap-2 mt-6">
            <Button style="primary" href="" text="Designer registration" />
            <Button style="secondary" href="" text="Nonprofit application" />
          </div>
        </div>

        <div id="footer-details" className="mt-48">
          <div className="flex items-center justify-center gap-x-2">
            <a
              className="p-1 rounded-lg bg-white drop-shadow-2xl flex items-center justify-center"
              href="https://www.facebook.com/dsmHack/"
            >
              <FacebookLogoIcon color="#9AB749" size={32} weight="bold" />
            </a>

            <a
              className="p-1 rounded-lg bg-white drop-shadow-2xl flex items-center justify-center"
              href="https://www.instagram.com/dsm_hack/"
            >
              <InstagramLogoIcon color="#008EA3" size={32} weight="bold" />
            </a>

            <a
              className="p-1 rounded-lg bg-white drop-shadow-2xl flex items-center justify-center"
              href="https://www.linkedin.com/company/dsmhack"
            >
              <LinkedinLogoIcon color="#FA8136" size={32} weight="bold" />
            </a>
          </div>
          <div className="text-center flex flex-col items-center justify-end mt-8 mb-4">
            <a
              className="hover:underline font-mono font-bold"
              href="https://dsmhack.org"
            >
              A dsmHack Event
            </a>

            <a
              className="hover:underline font-mono font-bold"
              href="https://guppy.land"
            >
              Website designed and maintained by Armaan Gupta
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}