import * as React from "react";
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
import Layout from "../components/layout.js";
import "leaflet/dist/leaflet.css";
import Ford from "../images/ford.png"

import { MapContainer, TileLayer } from "react-leaflet";

const IndexPage = () => {
  const tileURL = process.env.GATSBY_MAP_ID;
  return (
    <Layout>
      <main id="about">
        {/* <Link to="/writing/">Writing</Link> */}
        <div class="flex flex-col gap-4 mt-12">
          <h1 class="font-semibold text-2xl">
            Evan Yan <span class="text-2xl">&nbsp;</span>
          </h1>
          <p>
            I'm a designer, gamer and engineer from Vancouver. I'm currently back at  school studying
            Computer Science at the University of Waterloo. I've previously worked 
            as a Software Developer Intern at {" "}
            <a
              href="https://www.ford.ca/"
              target="_blank"
              class="text-white underline underline-offset-4 decoration-gray-600 decoration-2"
            >
              Ford Motor Company
            </a>
            , where I developed voice controls in the car entertainment systems and built it's proprietary calendar app.
          </p>
          <p>
            At my previous work term, I was working at the {" "}
            <a
              href="https://uwaterloo.ca/information-systems-technology/"
              target="_blank"
              class="text-white underline underline-offset-4 decoration-gray-600 decoration-2"
            >
              University of Waterloo
            </a>
            {" "}as an AI Software Developer Intern building an in-house job aggregation system for the school's co-op department.
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
            , where we won British Columbia provincials twice and brought home
            an award from the 2022 World Championships over in Houston, Texas.
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

        <div class="mt-24">
          <h2 class="font-medium text-xl ">Projects</h2>
          <div class="grid grid-cols-2 mt-8 gap-x-8 gap-y-10 w-full">
          <div>
              <a
                target="_blank"
                href="https://github.com/evanyans/goosemeet"
                class="-ml-2 font-medium text-white inline-block transition-all duration-300 ease-in-out px-2 py-1 rounded relative hover:bg-stone-800"
              >
                goosemeet
              </a>
              <p class=" text-gray-400 re">
              Keep your team on track and your meetings in sync one honk at a time
              </p>
          </div>
          <div>
              <a
                target="_blank"
                href="https://github.com/evanyans/tunescriber"
                class="-ml-2 font-medium text-white inline-block transition-all duration-300 ease-in-out px-2 py-1 rounded relative hover:bg-stone-800"
              >
                tunescriber
              </a>
              <p class=" text-gray-400 re">
                Convert entire songs to sheet music for each instrument
              </p>
          </div>
          <div>
              <a
                target="_blank"
                href="https://devpost.com/software/papers-please-clone"
                class="-ml-2 font-medium text-white inline-block transition-all duration-300 ease-in-out px-2 py-1 rounded relative hover:bg-stone-800"
              >
                credit-crimes
              </a>
              <p class=" text-gray-400 re">
                "Papers, Please" inspired tax fraud detection game
              </p>
            </div>
            <div>
              <a
                target="_blank"
                href="https://github.com/evanyans/spotify-uncovered"
                class="-ml-2 font-medium text-white inline-block transition-all duration-300 ease-in-out px-2 py-1 rounded relative hover:bg-stone-800"
              >
                spotify-uncovered
              </a>
              <p class=" text-gray-400 re">
                Generate tailored playlists based on emotion
              </p>
            </div>
            <div>
              <a
                target="_blank"
                href="https://ftc-events.firstinspires.org/team/16031"
                class="-ml-2 font-medium text-white inline-block transition-all duration-300 ease-in-out px-2 py-1 rounded relative hover:bg-stone-800"
              >
                40lb Robot (x4)
              </a>
              <p class=" text-gray-400 re">
                2x province winning semi-autonomous robot, world championship contender
              </p>
            </div>

            
          </div>
        </div>

        <div class="mt-24 ">
          <h2 class="font-medium text-xl">Experience</h2>
          <div class="flex flex-col gap-12 mt-8">
          <div class="flex flex-row gap-6 ">
              <a
                href="https://www.ford.ca/"
                target="_blank"
                class="w-12 h-12 bg-amber-500 bg-opacity-50 rounded-md flex items-center justify-center overflow-hidden hover:bg-opacity-75 transition-all duration-300"
              >
                <img
                  class="object-contain transform"
                  src={Ford}
                  alt="Default avatar"
                />
              </a>
              <div class="flex flex-col">
                <h3 class="text-white font-medium">Ford Motor Company</h3>
                <p class="font-light">Software Developer</p>
                <p class="font-light text-sm text-gray-400 mt-4">
                  January 2025 - April 2025
                </p>
              </div>
            </div>
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
                <h3 class="text-white font-medium">University of Waterloo</h3>
                <p class="font-light">Software Developer</p>
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
                <h3 class="text-white font-medium">
                  FIRST Robotics Team 16031
                </h3>
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
            {/* <div class="flex flex-row gap-6">
            </div> */}
          </div>
        </div>
        <div class="mt-24">
          <h2 class="font-medium text-xl mb-6">Where am I?</h2>
          <p class="mb-8">
            Working remotely from Coquitlam. Enjoying the scenery. Eating good food.
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
            center={[49.2838, -122.7932]}
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
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Evan Yan</title>;
