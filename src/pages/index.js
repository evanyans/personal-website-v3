import * as React from "react";
import NavBar from "./navbar.js";
import Waterloo from "../images/uwaterloo.png";
import Laurier from "../images/laurier.png";
import First from "../images/FIRST.png";
import Logo from "../images/logo.png";
import Worlds from "../images/worlds.jpg";
import Western from "../images/western.jpg";
import Hawk from "../images/hawk.jpg";
import Grouse from "../images/grouse.png";
import Grad from "../images/grad.jpg";
import Karting from "../images/karting.jpg";
import Roboto from "../images/Roboto.png";

import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer } from "react-leaflet";

const IndexPage = () => {
  const tileURL = process.env.GATSBY_MAP_ID;
  return (
    <main id="about" class="container mx-auto px-10 pb-64  mt-16">
      {/* <Link to="/writing/">Writing</Link> */}
      <NavBar />
      <div class="flex flex-col gap-4 mt-12">
        <h1 class="font-semibold text-2xl">
          Evan Yan <span class="text-2xl">&nbsp;</span>
        </h1>
        <p>
          I'm a designer, gamer and engineer from Vancouver. I'm currently working as an AI
          Software Developer Intern at the{" "}
          <a
            href="https://uwaterloo.ca/information-systems-technology/"
            target="_blank"
            class="text-white underline underline-offset-4 decoration-gray-600 decoration-2"
          >
            University of Waterloo
          </a>
          , where I'm building the next job portal for WaterlooWorks.
        </p>
        <p>
          Before flying to Waterloo, I was competing in FIRST Robotics in Team
          16031{" "}
          <a
            href="https://ftc-events.firstinspires.org/team/16031"
            target="_blank"
            class="text-white underline underline-offset-4 decoration-gray-600 decoration-2"
          >
            Parabellum
          </a>
          , where we won British Columbia provincials twice and brought home an
          award from the 2022 World Championships over in Houston, Texas.
        </p>
        <p>
          Outside of school, I'm a game developer, UI/UX designer, and avid
          Formula 1 fan.
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
        <div class="col-span-1 row-span-1">
          <img
            class="h-36 md:h-48 w-full object-cover rounded-lg"
            src={Grouse}
            alt=""
          />
        </div>
        <div class="col-span-1 row-span-2 md:row-span-2">
          <img
            class="h-72 md:h-72 w-full  object-cover rounded-lg"
            src={Roboto}
            alt=""
          />
        </div>
        <div class="col-span-1 row-span-1">
          <img
            class="h-32 md:h-48 w-full  object-cover rounded-lg"
            src={Western}
            alt=""
          />
        </div>
        <div class="col-span-1 row-span-2">
          <img
            class="h-72 w-full  object-cover rounded-lg"
            src={Worlds}
            alt=""
          />
        </div>
        <div class="col-span-1 row-span-1 md:row-span-2">
          <img
            class="h-36 md:h-72 w-full object-cover rounded-lg"
            src={Karting}
            alt=""
          />
        </div>
        <div class="col-span-1 row-span-1">
          <img
            class="h-32 md:h-48 w-full object-cover rounded-lg"
            src={Hawk}
            alt=""
          />
        </div>
      </div>

      <div class="mt-24 ">
        <h2 class="font-medium text-xl">Experience</h2>
        <div class="flex flex-col gap-12 mt-8">
          <div class="flex flex-row gap-6 ">
            <a
              href="https://uwaterloo.ca/information-systems-technology/"
              target="_blank"
              class="w-12 h-12 bg-amber-500 bg-opacity-50 rounded-md flex items-center justify-center overflow-hidden hover:bg-opacity-75 transition-all duration-300"
            >
              <img
                class="object-contain transform scale-50"
                src={Waterloo}
                alt="Default avatar"
              />
            </a>
            <div class="flex flex-col">
              <h3 class="text-white font-medium">
                University of Waterloo
              </h3>
              <p class="font-light">AI Software Developer</p>
              <p class="font-light text-sm text-gray-400 mt-4">
                May 2024 - Aug 2024
              </p>
            </div>
          </div>
          <div class="flex flex-row gap-6">
            <a
              href="https://ftc-events.firstinspires.org/team/16031"
              target="_blank"
              class="w-12 h-12 bg-pink-500 bg-opacity-50 rounded-md flex items-center justify-center overflow-hidden hover:bg-opacity-75 transition-all duration-300"
            >
              <img
                class="object-contain transform scale-70"
                src={First}
                alt="Default avatar"
              />
            </a>
            <div class="flex flex-col">
              <h3 class="text-white font-medium">FIRST Robotics Team 16031</h3>
              <p class="font-light">Software Engineer</p>
              <p class="font-light text-sm text-gray-400 mt-4">
                Mar 2019 - Apr 2023
              </p>
            </div>
          </div>
          <div class="flex flex-row gap-6">
            <a
              href="https://www.behance.net/evanyan"
              target="_blank"
              class="w-12 h-12 bg-gray-800 bg-opacity-50 rounded-md flex items-center justify-center overflow-hidden hover:bg-opacity-75 transition-all duration-300"
            >
              <img
                class="object-contain transform scale-55"
                src={Logo}
                alt="Default avatar"
              />
            </a>
            <div class="flex flex-col">
              <h3 class="text-white font-medium">Freelance</h3>
              <p class="font-light">UI/UX Designer</p>
              <p class="font-light text-sm text-gray-400 mt-4">
                Sep 2019 - Jun 2023
              </p>
            </div>
          </div>
          <div class="flex flex-row gap-6 mt-12">
            <a
              href="https://uwaterloo.ca/future-students/programs/business-administration-computer-science-double-degree"
              target="_blank"
              class="w-12 h-12 bg-amber-500 bg-opacity-50 rounded-md flex items-center justify-center overflow-hidden hover:bg-opacity-75 transition-all duration-300"
            >
              <img
                class="object-contain transform scale-50"
                src={Waterloo}
                alt="Default avatar"
              />
            </a>
            <div class="flex flex-col">
              <h3 class="text-white font-medium">University of Waterloo</h3>
              <p class="font-light">Bachelor of Computer Science</p>
              <p class="font-light text-sm text-gray-400 mt-4">2023 - 2028</p>
            </div>
          </div>
          <div class="flex flex-row gap-6">
            <a
              href="https://uwaterloo.ca/future-students/programs/business-administration-computer-science-double-degree"
              target="_blank"
              class="w-12 h-12 bg-purple-500 bg-opacity-50 rounded-md flex items-center justify-center overflow-hidden hover:bg-opacity-75 transition-all duration-300"
            >
              <img
                class="object-contain transform scale-90"
                src={Laurier}
                alt="Default avatar"
              />
            </a>
            <div class="flex flex-col">
              <h3 class="text-white font-medium">Wilfrid Laurier University</h3>
              <p class="font-light">Bachelor of Business Administration</p>
              <p class="font-light text-sm text-gray-400 mt-4">2023 - 2028</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-24">
        <h2 class="font-medium text-xl mb-6">Where am I?</h2>
        <p class="mb-8">
          Stuck in Waterloo. Looking forward to Formula 1 weekends. Adding to my
          cookbook.
          <br></br>Reach me{" "}
          <a
            href="https://www.instagram.com/okeyevan/"
            target="_blank"
            class="text-white underline underline-offset-4 decoration-gray-600 decoration-2"
          >
            @okeyevan
          </a>{" "}
          on Instagram if you want to meet up.
        </p>
        <MapContainer
          center={[43.4723, -80.5449]}
          zoom={13}
          zoomControl={false}
          scrollWheelZoom={true}
          style={{ height: "360px", width: "100%", borderRadius: "1em" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url={tileURL}
          />
        </MapContainer>
        <p class="mt-6">
          For professional inquiries, reach me at{" "}
          <a
            href="mailto:evan.yan@uwaterloo.ca"
            target="_blank"
            class="text-white underline underline-offset-4 decoration-gray-600 decoration-2"
          >
            evan.yan@uwaterloo.ca
          </a>
        </p>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Evan Yan</title>;
