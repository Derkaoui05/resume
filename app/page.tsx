"use client";

import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { User } from "@nextui-org/user";
import { AnimatedDot } from "@/components/ui/AnimatedDot";
import { FadeInSection } from "@/components/ui/ScrollAnimation";

export default function HomePage() {
  return (
    <div className="flex-1 p-4 md:p-8 overflow-hidden max-w-full md:max-w-[calc(100%-36rem)] mx-auto">
      <FadeInSection>
        <Card className="mb-8">
          <CardBody className="flex flex-row items-center justify-center md:justify-start">
            <AnimatedDot />
            <h2 className="text-xl md:text-2xl font-bold ml-2">
              Available to work
            </h2>
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
                  name="Derkaoui Yassir"
                  description="Web Developer"
                  avatarProps={{
                    src: "/about.png",
                  }}
                  className="mb-4"
                />
                <p className="mb-4">
                  I&apos;m a passionate web developer with expertise in React, Next.js,
                  and TypeScript. With a keen eye for design and a love for clean
                  code, I create engaging and performant web applications that
                  deliver exceptional user experiences.
                </p>
                <Button color="primary">Learn More</Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </FadeInSection>

      <FadeInSection>
        <Card className="mb-12 bg-background">
          <CardHeader>
            <h2 className="text-2xl md:text-3xl font-bold">Projects</h2>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardBody>
                  <h3 className="text-lg font-semibold mb-2">Project 1</h3>
                  <p>
                    Description of Project 1. This is a brief overview of what the
                    project entails and what technologies were used.
                  </p>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <h3 className="text-lg font-semibold mb-2">Project 2</h3>
                  <p>
                    Description of Project 2. This project showcases your skills
                    in a different area or technology stack.
                  </p>
                </CardBody>
              </Card>
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-content1 p-2 rounded">React</div>
              <div className="bg-content1 p-2 rounded">Next.js</div>
              <div className="bg-content1 p-2 rounded">TypeScript</div>
              <div className="bg-content1 p-2 rounded">Tailwind CSS</div>
              <div className="bg-content1 p-2 rounded">Node.js</div>
              <div className="bg-content1 p-2 rounded">GraphQL</div>
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
              <div>
                <h3 className="text-lg font-semibold">Senior Web Developer</h3>
                <p className="text-small text-default-500">
                  TechCorp Inc. | 2020 - Present
                </p>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Led development of multiple high-traffic web applications
                  </li>
                  <li>Mentored junior developers and conducted code reviews</li>
                  <li>
                    Implemented CI/CD pipelines to improve deployment efficiency
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Full Stack Developer</h3>
                <p className="text-small text-default-500">
                  WebSolutions LLC | 2017 - 2020
                </p>
                <ul className="list-disc list-inside mt-2">
                  <li>Developed and maintained various client websites</li>
                  <li>
                    Collaborated with design team to implement responsive layouts
                  </li>
                  <li>
                    Optimized database queries to improve application performance
                  </li>
                </ul>
              </div>
            </div>
          </CardBody>
        </Card>
      </FadeInSection>
    </div>
  );
}