"use client";

import { useEffect, useRef } from "react";
import { data } from "@/data/data";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { User } from "@nextui-org/user";
import { AnimatedDot } from "@/components/ui/AnimatedDot";
import { FadeInSection } from "@/components/ui/ScrollAnimation";

export default function HomePage() {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const servicesList = servicesRef.current;
    if (servicesList) {
      servicesList.style.animation = "none";
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      servicesList.offsetHeight; // Assign to avoid the warning
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
        <Card className=" bg-background overflow-hidden">
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
        <Card className="mb-12 bg-background">
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
        <Card className="mb-12 bg-background">
          <CardHeader>
            <h2 className="text-2xl md:text-3xl font-bold">Skills</h2>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.skills.map((skill, index) => (
                <div key={index} className="bg-content1 p-4 rounded flex flex-col items-center text-center">
                  {skill.icon}
                  <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                  <p className="text-sm">{skill.description}</p>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </FadeInSection>

      <FadeInSection>
        <Card className="bg-background">
          <CardHeader>
            <h2 className="text-2xl md:text-3xl font-bold">Experience</h2>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="space-y-6">
              {data.resume.experiences.map((exp, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="text-small text-default-500">
                    {exp.company} | {exp.duration}
                  </p>
                  <p className="mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </FadeInSection>
    </div>
  );
}
