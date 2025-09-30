import Image from "next/image";
import Button from "@/components/Button";
import BentoCard from "@/components/BentoCard";
import { FacebookLogoIcon, LinkedinLogoIcon, InstagramLogoIcon } from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto z-20 relative px-4 min-[896px]:px-0">
      <div id="hero" className="pt-24">
        <Image
          src="designjam-logo.svg"
          height={100}
          width={150}
          className="h-24 w-auto mb-12"
          alt="DesignJam logo"
        />
        <h1 className="text-[120px] font-morganite font-bold italic uppercase leading-28">
          Bringing <span className="text-[#9AB749]">designers</span> and{" "}
          <span className="text-[#008EA3]">nonprofits</span> together to build a
          more beautiful and helpful{" "}
          <span className="text-[#FA8136]">Des Moines</span>
        </h1>
        <p className="text-2xl max-w-3xl">
          24 hour event where designers pair with non-profits to redesign logos,
          tweak websites, and beautify branding.
        </p>
        <div className="flex items-center justify-start gap-2 mt-6">
          {/* TODO - correct font + drop shadow */}
          <Button style="primary" href="" text="Designer registration" />
          <Button style="secondary" href="" text="Nonprofit application" />
        </div>
      </div>
      <div id="bento-boxes" className="mt-24">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <BentoCard>
              <p>something</p>
            </BentoCard>
          </div>
          <div className="col-span-2">
            <BentoCard>
              <p>something</p>
            </BentoCard>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 pt-4">
          <div className="col-span-1">
            <BentoCard>
              <p>something</p>
            </BentoCard>
          </div>
          <div className="col-span-1">
            <BentoCard>
              <p>something</p>
            </BentoCard>
          </div>
          <div className="col-span-1">
            <BentoCard>
              <p>something</p>
            </BentoCard>
          </div>
        </div>
      </div>
      <div id="footer">
        <div id="footer-cta"></div>
        <div id="footer-details">
          <div className="flex items-center justify-center">
            <FacebookLogoIcon />
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
}
