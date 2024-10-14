"use client";

import { useEffect, useRef, useState } from "react";
import { data } from "@/data/data";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { User } from "@nextui-org/user";
import { AnimatedDot } from "@/components/ui/AnimatedDot";
import { FadeInSection } from "@/components/ui/ScrollAnimation";
import Footer from "@/components/Footer";

export default function HomePage() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const servicesList = servicesRef.current;
    if (servicesList) {
      servicesList.style.animation = "none";
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      servicesList.offsetHeight;
      servicesList.style.animation = "";
    }
  }, []);

  const stats = [
    { number: data.projects.length.toString(), label: "Completed Projects" },
    { number: data.skills.length.toString(), label: "Skills Mastered" },
    {
      number: (new Date().getFullYear() - parseInt(data.resume.education[0].year)).toString(),
      label: "Years of Experience",
    },
    { number: data.contactLinks.length.toString(), label: "Ways to Connect" },
  ];

  return (
    <div className="flex-1 p-4 md:p-8 overflow-hidden max-w-full md:max-w-[calc(100%-36rem)] mx-auto">
      <FadeInSection>
        <Card className="mb-8">
          <CardBody className="flex flex-row items-center justify-center md:justify-start">
            <AnimatedDot />
            <h2 className="text-xl md:text-2xl font-bold ml-2">Available to work</h2>
          </CardBody>
        </Card>
      </FadeInSection>

      <FadeInSection>
        <Card className="mb-12 bg-background">
          <Divider />
          <CardBody>
            <div className="flex flex-col items-center md:flex-row gap-8">
              <div className="w-full md:w-1/2">
                <Image
                  src="/about.png"
                  alt="Profile"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover w-full"
                />
              </div>
              <div className="w-full space-y-5 md:w-1/2">
                <User
                  name={data.personalInfo.name}
                  description={data.personalInfo.role}
                  avatarProps={{ src: "/about.png" }}
                  className="mb-4"
                />
                <p className="mb-4">{data.personalInfo.bio}</p>
                <Button variant="ghost">Learn More</Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </FadeInSection>

      <FadeInSection>
        <Card className="bg-background overflow-hidden">
          <Divider />
          <CardBody className="p-0">
            <div className="relative flex overflow-x-hidden bg-content1">
              <div
                ref={servicesRef}
                className="py-12 animate-marquee bg-background whitespace-nowrap flex"
              >
                {data.Services.concat(data.Services).map((service, index) => (
                  <span
                    key={index}
                    className="mx-4 text-xl border px-2 border-content2 p-1 w-full rounded-full font-semibold text-foreground"
                  >
                    {service.text}
                  </span>
                ))}
              </div>
            </div>
          </CardBody>
        </Card>
      </FadeInSection>

      <FadeInSection>
        <Card className="my-12 bg-background">
          <Divider />
          <CardBody>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl font-bold mb-2">
                    {stat.number}
                    <span className="text-primary">+</span>
                  </p>
                  <p className="text-sm text-default-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </FadeInSection>

      <FadeInSection>
        <div className="relative">
          <Card className="mb-12 cursor-pointer bg-background">
            <CardHeader>
              <h2 className="text-2xl md:text-3xl font-bold">Skills</h2>
            </CardHeader>
            <Divider />
            <CardBody>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative">
                {data.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="relative flex items-center justify-center w-full p-4 rounded-lg overflow-hidden transition-all duration-300 ease-in-out group"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-default-50 to-content1 transform transition-transform duration-500 ease-in-out ${
                        hoveredIndex === index ? "translate-x-0" : "translate-x-[-100%]"
                      }`}
                    />
                    <div className="relative z-10 flex flex-col items-start">
                      {skill.icon}
                      <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                      <p className="text-sm">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      </FadeInSection>
      <Footer />
    </div>
  );
}
