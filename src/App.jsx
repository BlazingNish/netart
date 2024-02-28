import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <>
      <div className="flex flex-col items-center pt-4 pb-8 px-4">
        <div className="flex items-center align-middle p-0">
          <img src="/logo.png" alt="logo" className="h-40 aspect-auto" />
        </div>
        <div className="flex flex-col md:flex-row justify-evenly pt-8 gap-x-8">
          <div className="h-[1120px]">
            <img
              src="/1.png"
              alt="trophy"
              className="aspect-auto h-3/5 md:h-4/5"
            />
          </div>
          <div className="flex flex-col pr-4">
            <p className="font-bold text-wrap">
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </p>
            <ul className="list-disc pl-8 font-medium">
              <li>
                C.R.I.&#39;s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.{" "}
              </li>
            </ul>
            <img src="/2.png" alt="awardImage" className="aspect-auto my-6" />
            <p className="font-medium">
              Government of India has awarded the{" "}
              <span className="font-bold">
                &#34;National Energy Conservation Award 2018&#34;
              </span>
              . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group
              received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha
              & Shri. Raj Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </div>
        <div>
          <p className="font-bold">
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src="/3.png" alt="productImages" className="aspect-auto w-4/5" />
          <p>
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors{" "}
          </p>
        </div>
        <hr className="h-1 w-full mt-4 bg-red-600" />
        <div className="flex justify-center flex-col items-center">
          <div>
            <p>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
          </div>
          <div>
            <p className="text-center mt-2 font-semibold">
              CHEMICALS & PROCESS <span className="text-red-600">|</span> POWER{" "}
              <span className="text-red-600">|</span> WATER & WASTE WATER{" "}
              <span className="text-red-600">|</span> OILS & GAS{" "}
              <span className="text-red-600">|</span> PHARMA{" "}
              <span className="text-red-600">|</span> SUGARS & DISTILLERIES{" "}
              <span className="text-red-600">|</span> PAPER & PULP{" "}
              <span className="text-red-600">|</span> MARINE & DEFENCE{" "}
              <span className="text-red-600">|</span> METAL & MINING{" "}
              <span className="text-red-600">|</span> FOOD & BEVERAGE{" "}
              <span className="text-red-600">|</span> PETROCHEMICAL & REFINERIES{" "}
              <span className="text-red-600">|</span> SOLAR{" "}
              <span className="text-red-600">|</span> BUILDING{" "}
              <span className="text-red-600">|</span> HVAC{" "}
              <span className="text-red-600">|</span> FIRE FIGHTING{" "}
              <span className="text-red-600">|</span> AGRICULTURE & RESIDENTIAL
            </p>
          </div>
        </div>
        <div className="flex justify-around px-2 w-full h-40 bg-red-600 items-center mt-8">
          <div className="flex text-white gap-3">
            <FontAwesomeIcon icon={faPhone} className="h-8 aspect-square" />
            <p>
              Toll Free <span className="font-bold">1800 200 1234</span>
            </p>
          </div>
          <div className="flex text-white gap-3">
            <FontAwesomeIcon icon={faFacebook} className="h-8 aspect-square" />
            <a href="#">
              <p>www.facebook.com/cripumps</p>
            </a>
          </div>
          <div className="flex text-white gap-3">
            <FontAwesomeIcon icon={faGlobe} className="h-8 aspect-square" />
            <a href="#">
              <p>www.crigroups.com</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
