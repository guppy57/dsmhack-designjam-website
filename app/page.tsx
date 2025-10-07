"use client";

import Image from "next/image";
import Button from "@/components/Button";
import BentoCard from "@/components/BentoCard";
import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon, MapPinIcon, PaintBrushIcon, HeartIcon } from "@phosphor-icons/react";

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
            <BentoCard>
              <p className="text-lg font-medium leading-6">24 hour event where designers pair with non-profits to redesign logos, tweak websites, and beautify branding. 24 hour event where designers pair with non-profits to redesign logos, tweak websites, and beautify branding. 24 hour event where designers pair with non-profits to redesign logos, tweak websites, and beautify branding.</p>
              <p className="pt-8 text-gray-600">Something else will go right here</p>
            </BentoCard>
          </div>
          <div className="col-span-1 md:col-span-2">
            <BentoCard className={"grid grid-cols-2 gap-4"}>
              <div className={"col-span-2 md:col-span-1 flex flex-col items-start justify-between"}>
                <div>
                  <h2 className={"font-bold tracking-tight text-3xl mb-4"}>There is a tagline here that should be somewhat long</h2>
                  <p className={"pb-14 text-lg sm:text-md"}>24 hour event where designers pair with non-profits to redesign logos, tweak websites, and beautify branding.</p>
                </div>
                <div className={"flex items-start justify-start bg-amber-50 border border-amber-200 font-mono text-[#ED7A0F] rounded-full text-sm py-1 px-4 font-bold tracking-tight"}>
                  Here is a location
                </div>
              </div>
              <div className={"hidden md:block col-span-1"}>
                {/*<Image src={""} alt={""} />*/}
                <div className={"w-full h-full bg-gray-500 rounded-lg"} />
              </div>
            </BentoCard>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
          <div className="col-span-2 sm:col-span-1">
            <BentoCard className={"flex flex-col items-start justify-between"}>
              <h2 className={"text-xl tracking-tight font-bold mb-6"}>Where</h2>
              <div className="w-full">
              <div className={"flex items-start justify-start gap-2 mb-6 text-lg sm:text-md"}>
                <div className={"rounded-full w-12 h-12 flex items-center justify-center bg-[#EBFFB4]"}>
                  <MapPinIcon color="#9AB749" size={32} weight="bold" />
                </div>
                <p>
                  Some address<br/>
                  goes around here for some reason<br/>
                  third line
                </p>
              </div>
              <div className={"w-full h-20 bg-green-700 rounded-sm"} />
              </div>
            </BentoCard>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <BentoCard className={"flex flex-col items-start justify-between"}>
              <h2 className={"text-xl tracking-tight font-bold mb-6"}>Whose invited</h2>
              <div>
              <div className={"flex items-start justify-start gap-2 mb-4 text-lg sm:text-md"}>
                <div className={"rounded-full w-12 h-12 flex items-center justify-center bg-[#CCF9FF]"}>
                  <PaintBrushIcon color="#0AD1EE" size={28} weight="bold" />
                </div>
                <p>
                  <span className={"font-semibold"}>Some address</span><br/>
                  goes around here for some reason<br/>
                  third line
                </p>
              </div>
              <div className={"flex items-start justify-start gap-2 text-lg sm:text-md"}>
                <div className={"rounded-full w-12 h-12 flex items-center justify-center bg-[#FFE9D4]"}>
                  <HeartIcon color="#FF9A3B" size={28} weight="bold" />
                </div>
                <p>
                  <span className={"font-semibold"}>Some address</span><br/>
                  goes around here for some reason<br/>
                  third line
                </p>
              </div>
              </div>
            </BentoCard>
          </div>
          <div className="col-span-2 md:col-span-1">
            <BentoCard className={"flex flex-col items-start justify-between"}>
              <h2 className={"text-xl tracking-tight font-bold mb-6"}>About dsmHack</h2>
              <p className={"text-lg sm:text-md md:text-sm mt-4"}>24 hour event where designers pair with non-profits to redesign logos, tweak websites, and beautify branding. 24 hour event where designers pair with non-profits to redesign logos, tweak websites, and beautify branding.</p>
            </BentoCard>
          </div>
        </div>
      </div>
      <div id="footer" className="mt-24">
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
        <div id="footer-details" className="mt-24">
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
