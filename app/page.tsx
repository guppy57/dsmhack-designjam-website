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
  Trophy,
  Palette,
  UsersThree,
  Certificate,
  Sparkle,
  Crown,
  GraduationCap,
  Gear,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative rotating gears */}
      <motion.div
        className="absolute top-0 right-0 -translate-y-[40%] translate-x-[40%] z-10 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Gear size={600} className="text-gray-400 opacity-20" weight="thin" />
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 translate-y-[40%] -translate-x-[40%] z-10 pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Gear size={600} className="text-[#008EA3] opacity-50" weight="thin" />
      </motion.div>

      <motion.div
        className="absolute bottom-0 right-0 translate-y-[30%] translate-x-[20%] z-10 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <Gear size={400} className="text-[#FA8136] opacity-50" weight="thin" />
      </motion.div>

      <div className="max-w-6xl mx-auto z-20 relative px-4">
      <motion.div
        id="hero"
        className="pt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* <Image
          src="designjam-logo.svg"
          height={100}
          width={150}
          className="h-24 w-auto mb-12"
          alt="DesignJam logo"
        /> */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl leading-14 sm:leading-17 md:leading-20 font-bold tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          Bringing <span className="text-[#9AB749]">designers</span> and{" "}
          <span className="text-[#008EA3]">nonprofits</span> together to build a
          more beautiful and helpful{" "}
          <span className="text-[#FA8136]">Des Moines</span>
        </motion.h1>
        <motion.p
          className="text-2xl max-w-3xl mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
        >
          24 hour event where designers pair with non-profits to redesign logos,
          tweak websites, and beautify branding.
        </motion.p>
        <motion.div
          className="flex items-center justify-start gap-2 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
        >
          <Button style="primary" href="" text="Designer registration" />
          <Button style="secondary" href="" text="Nonprofit application" />
        </motion.div>
      </motion.div>

      <div id="bento-boxes" className="mt-24">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
        >
          <motion.div
            className="col-span-2 sm:col-span-1"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <BentoCard className="flex flex-col items-start justify-between">
              <h2 className="text-xl tracking-tight font-bold mb-6">Where</h2>
              <div className="w-full">
                <div className="flex items-start justify-start gap-2 mb-6 text-lg sm:text-md">
                  <motion.div
                    className="rounded-full w-12 h-12 flex items-center justify-center bg-[#EBFFB4]"
                    whileHover={{
                      scale: 1.1,
                      rotate: 10,
                      transition: { type: "spring", stiffness: 400, damping: 17 }
                    }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                    }}
                  >
                    <MapPinIcon color="#9AB749" size={32} weight="bold" />
                  </motion.div>
                  <p>
                    Gravitate
                    <br />
                    500 Locust St
                    <br />
                    Des Moines, IA 50309
                  </p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.478!2d-93.625!3d41.5868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ee99a4c9951e0b%3A0xa5d3c2e3c7d0f7c8!2sGravitate!5e0!3m2!1sen!2sus!4v1736738400000!5m2!1sen!2sus"
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
          </motion.div>

          <motion.div
            className="col-span-2 sm:col-span-1"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <BentoCard className="flex flex-col items-start justify-between">
              <h2 className="text-xl tracking-tight font-bold mb-6">
                Who's invited
              </h2>
              <div>
                <p className={"mb-4"}>
                  <div className="flex items-center justify-start gap-2 mb-2">
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                        rotate: -10,
                        transition: { type: "spring", stiffness: 400, damping: 17 }
                      }}
                      animate={{ rotate: [-5, 5, -5] }}
                      transition={{
                        rotate: { repeat: Infinity, duration: 2.5, ease: "easeInOut" }
                      }}
                    >
                      <PaintBrushIcon color="#0AD1EE" size={24} weight="bold" />
                    </motion.div>
                    <p className="font-semibold text-lg">Designers</p>
                  </div>
                  Graphic designers, web designers, brand strategists, and
                  creative professionals ready to volunteer their skills for
                  community impact.
                </p>
                <p>
                  <div className="flex items-center justify-start gap-2 mb-2">
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                        transition: { type: "spring", stiffness: 400, damping: 17 }
                      }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        scale: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
                      }}
                    >
                      <HeartIcon color="#FF9A3B" size={24} weight="bold" />
                    </motion.div>
                    <p className="font-semibold text-lg">Nonprofits</p>
                  </div>
                  501(c)3 organizations in the Des Moines area operating for
                  at least 3 months and in need of design services.
                </p>
              </div>
            </BentoCard>
          </motion.div>

          <motion.div
            className="col-span-2 md:col-span-1"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
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
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
        >
          <motion.div
            className="col-span-1"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <BentoCard className={"flex flex-col items-start justify-between"}>
              <p className="text-lg font-medium leading-6">
                Design Jam is a weekend-long creative marathon where talented
                designers collaborate directly with Des Moines nonprofits to
                transform their visual identity. Whether it's crafting a
                memorable logo, refreshing a website, or building a complete
                brand package, our designers donate their skills to help
                organizations that make our community stronger. Your work can
                have real world impact.
              </p>
              <p className="pt-8 text-lg font-bold tracking-tight text-[#008EA3]">
                February 21-22, 2025 · Applications close February 15th, 2025
              </p>
            </BentoCard>
          </motion.div>

          <motion.div
            className="col-span-1 md:col-span-2"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
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
                  Gravitate
                </div>
              </div>
              <div className="hidden md:block col-span-1">
                {/*<Image src={""} alt={""} />*/}
                <div className="w-full h-full bg-gray-500 rounded-lg" />
              </div>
            </BentoCard>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
        >
          <motion.div
            className="col-span-1"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <BentoCard className="flex flex-col items-start justify-between h-full">
              <div>
                <h2 className="text-xl tracking-tight font-bold mb-6">
                  Prizes & Recognition
                </h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                        rotate: 10,
                        transition: { type: "spring", stiffness: 400, damping: 17 }
                      }}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{
                        scale: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                      }}
                    >
                      <Certificate color="#9AB749" size={28} weight="bold" />
                    </motion.div>
                    <div>
                      <p className="font-semibold">Best Brand Kit</p>
                      <p className="text-sm text-gray-600">To be announced</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                        rotate: 180,
                        transition: { type: "spring", stiffness: 400, damping: 17 }
                      }}
                      animate={{ opacity: [1, 0.5, 1], scale: [1, 1.15, 1] }}
                      transition={{
                        opacity: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                        scale: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                      }}
                    >
                      <Sparkle color="#0AD1EE" size={28} weight="bold" />
                    </motion.div>
                    <div>
                      <p className="font-semibold">Best Bonus Project</p>
                      <p className="text-sm text-gray-600">To be announced</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                        y: -5,
                        transition: { type: "spring", stiffness: 400, damping: 17 }
                      }}
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        y: { repeat: Infinity, duration: 2.5, ease: "easeInOut" }
                      }}
                    >
                      <Crown color="#FA8136" size={28} weight="bold" />
                    </motion.div>
                    <div>
                      <p className="font-semibold">Best Overall</p>
                      <p className="text-sm text-gray-600">To be announced</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                        rotate: -10,
                        transition: { type: "spring", stiffness: 400, damping: 17 }
                      }}
                      animate={{ rotate: [-3, 3, -3] }}
                      transition={{
                        rotate: { repeat: Infinity, duration: 3, ease: "easeInOut" }
                      }}
                    >
                      <GraduationCap color="#008EA3" size={28} weight="bold" />
                    </motion.div>
                    <div>
                      <p className="font-semibold">Best Student Project</p>
                      <p className="text-sm text-[#008EA3] font-bold">
                        Internship Opportunity
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 italic mt-6">
                Prize amounts to be announced
              </p>
            </BentoCard>
          </motion.div>

          <motion.div
            className="col-span-1"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <BentoCard className="flex flex-col items-start justify-between h-full">
              <div>
                <h2 className="text-xl tracking-tight font-bold mb-6">
                  Deliverables
                </h2>
                <div>
                  <p className="font-semibold text-lg mb-3">Required:</p>
                  <div className="mb-4 pl-4 border-l-4 border-[#0AD1EE]">
                    <p className="font-semibold mb-2">Brand Kits</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[#C7F0F6] text-[#047481] text-xs font-medium px-3 py-1 rounded-full">Mission & values</span>
                      <span className="bg-[#C7F0F6] text-[#047481] text-xs font-medium px-3 py-1 rounded-full">Logo design</span>
                      <span className="bg-[#C7F0F6] text-[#047481] text-xs font-medium px-3 py-1 rounded-full">Color palette</span>
                      <span className="bg-[#C7F0F6] text-[#047481] text-xs font-medium px-3 py-1 rounded-full">Brand elements</span>
                      <span className="bg-[#C7F0F6] text-[#047481] text-xs font-medium px-3 py-1 rounded-full">Mockups</span>
                    </div>
                  </div>
                  <p className="font-semibold text-lg mb-2">Bonus Projects:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">Website redesign</span>
                    <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">Campaign rollout</span>
                    <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">Pamphlet design</span>
                    <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">Landing page</span>
                  </div>
                </div>
              </div>
            </BentoCard>
          </motion.div>

          <motion.div
            className="col-span-1"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <BentoCard className="flex flex-col items-start justify-between h-full">
              <div>
                <h2 className="text-xl tracking-tight font-bold mb-6">
                  Judging & Evaluation
                </h2>
                <p className="text-lg mb-4">
                  Projects will be evaluated by a panel of expert judges from
                  the design and nonprofit communities.
                </p>
                <div>
                  <p className="font-semibold mb-2">Judging Criteria:</p>
                  <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                    <li>Quality of design execution</li>
                    <li>Real-world impact potential</li>
                    <li>Creativity and innovation</li>
                    <li>Brand alignment</li>
                  </ul>
                </div>
              </div>
            </BentoCard>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        id="footer"
        className="mt-48"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          id="footer-cta"
          className="flex flex-col items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.35,
              },
            },
          }}
        >
          <motion.h2
            className="font-semibold text-4xl sm:text-5xl tracking-tight text-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Creativity for Community Betterment
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl mt-4 text-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Join us to make Des Moines a more beautiful and helpful place
          </motion.p>
          <motion.div
            className="flex items-center justify-start gap-2 mt-6"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Button style="primary" href="" text="Designer registration" />
            <Button style="secondary" href="" text="Nonprofit application" />
          </motion.div>
        </motion.div>

        <motion.div
          id="footer-details"
          className="mt-48"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <div className="flex items-center justify-center gap-x-2">
            <motion.a
              className="p-1 rounded-lg bg-white drop-shadow-2xl flex items-center justify-center"
              href="https://www.facebook.com/dsmHack/"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <FacebookLogoIcon color="#9AB749" size={32} weight="bold" />
            </motion.a>

            <motion.a
              className="p-1 rounded-lg bg-white drop-shadow-2xl flex items-center justify-center"
              href="https://www.instagram.com/dsm_hack/"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <InstagramLogoIcon color="#008EA3" size={32} weight="bold" />
            </motion.a>

            <motion.a
              className="p-1 rounded-lg bg-white drop-shadow-2xl flex items-center justify-center"
              href="https://www.linkedin.com/company/dsmhack"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <LinkedinLogoIcon color="#FA8136" size={32} weight="bold" />
            </motion.a>
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
        </motion.div>
      </motion.div>
      </div>
    </div>
  );
}