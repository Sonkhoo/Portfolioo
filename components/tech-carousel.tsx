'use client';

import React from 'react';
import Image from 'next/image';

const techLogos = [
  { src: '/images/technology/Node.js.svg', alt: 'Node.js' },
  { src: '/images/technology/Python.svg', alt: 'Python' },
  { src: '/images/technology/React.svg', alt: 'React' },
  { src: '/images/technology/Spring.svg', alt: 'Spring' },
  // { src: '/images/JavaScript.svg', alt: 'JavaScript' },
  { src: '/images/technology/MongoDB.svg', alt: 'MongoDB' },
  { src: '/images/technology/MySQL.svg', alt: 'MySQL' },
  { src: '/images/technology/PostgresSQL.svg', alt: 'PostgreSQL' },
  { src: '/images/technology/GitHub.svg', alt: 'GitHub' },
  { src: '/images/technology/FastAPI.svg', alt: 'FastAPI' },
  { src: '/images/technology/AWS.svg', alt: 'AWS' },
  { src: '/images/technology/Socket.io.svg', alt: 'Socket.io' },
  { src: '/images/technology/TypeScript.svg', alt: 'TypeScript' },
  { src: '/images/technology/Docker.svg', alt: 'Docker' },
  { src: '/images/technology/Redis.svg', alt: 'Redis' },
  { src: '/images/technology/Java.svg', alt: 'Java' },
  { src: '/images/technology/Prometheus.svg', alt: 'Prometheus' },
  { src: '/images/technology/Grafana.svg', alt: 'Grafana' },
  { src: '/images/technology/Express.svg', alt: 'Express' },
  { src: '/images/technology/Kubernetes.svg', alt: 'Kubernetes' },
  { src: '/images/technology/Apache Kafka.svg', alt: 'Apache Kafka' },
  { src: '/images/technology/RabbitMQ.svg', alt: 'RabbitMQ' },
  { src: '/images/technology/Mocha.svg', alt: 'Mocha' },
  { src: '/images/technology/GraphQL.svg', alt: 'GraphQL' },
  { src: '/images/technology/Jest.svg', alt: 'Jest' },
  { src: '/images/technology/Firebase.svg', alt: 'Firebase' },
];

export function TechCarousel() {
  // Duplicate the array to create a seamless loop
  const logos = [...techLogos, ...techLogos];

  return (
    <div className="w-full overflow-hidden py-8">
      <div className="relative
        before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-background before:to-transparent
        after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-background after:to-transparent
      ">
        <div className="animate-infinite-scroll flex w-fit">
          {logos.map((logo, index) => (
            <div key={`${logo.alt}-${index}`} className="mx-5 flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={8}
                height={8}
                className="h-8 w-8 object-contain transition-all duration-300 hover:scale-110 hover:rotate-6"
                title={logo.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
