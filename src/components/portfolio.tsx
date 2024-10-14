"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LinkedinLogo,
  GithubLogo,
  EnvelopeSimple,
  Buildings,
} from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import content from "@/data/content.json";
import { Badge } from "@/components/ui/badge";

export default function Portfolio() {
  const { banner, portfolio, footer } = content;

  return (
    <div className="min-h-screen bg-gradient-to-bl from-gray-600 to-gray-950 text-white">
      <header className="container mx-auto py-16 px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary rounded-full blur-lg opacity-75" />
            <Image
              src={banner.image}
              alt={banner.heading.name}
              width={300}
              height={300}
              className="rounded-full border-4 border-primary relative z-10"
            />
          </motion.div>
          <div className="text-center lg:text-left max-w-2xl">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-lime-200 to-green-300">
                {banner.heading.name}
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-4">
                {banner.heading.title}
              </h2>
            </motion.div>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg mb-6"
            >
              {banner.description}
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6"
            >
              {banner.skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {banner.cta.map((button, index) => (
                <Button
                  key={index}
                  asChild
                  variant={index === 0 ? "default" : "secondary"}
                  className="relative overflow-hidden group"
                >
                  <Link href={button.link}>
                    <span className="relative z-10">{button.text}</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="flex justify-center ms-2">
                      {footer.social.map((item, index) => (
                        <motion.p
                          key={index}
                          //href={item.link}
                          //target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          {item.platform === "LinkedIn" && (
                            <LinkedinLogo size={24} />
                          )}
                        </motion.p>
                      ))}
                    </span>
                  </Link>
                </Button>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </header>

      <main className="container mx-auto py-16 px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-2"
        >
          Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader className="min-h-[95px]">
                  <CardTitle className="text-lime-400">{item.title}</CardTitle>
                  {item.metaInfo && (
                    <CardDescription className="flex gap-3">
                      {" "}
                      <Buildings size={16} /> {item.metaInfo}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={225}
                    className="rounded-md mb-4 min-h-[220px] object-cover"
                  />
                  <p className="text-sm text-white">{item.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex gap-2">
                    {item.contributions.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button asChild variant="ghost" size="sm">
                    <Link href={item.link} className="bg-secondary">
                      View Project
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-6 mb-4">
            {footer.social.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {item.platform === "LinkedIn" && <LinkedinLogo size={24} />}
                {item.platform === "GitHub" && <GithubLogo size={24} />}
                {item.platform === "Email" && <EnvelopeSimple size={24} />}
              </motion.a>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm">
            {footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}
