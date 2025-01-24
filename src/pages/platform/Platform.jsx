import React from "react";
import RouteAndResourseOptimization from "../../assets/images/RouteAndResourseOptimization.png";
import bestBuyModule from "../../assets/images/bestBuyModule.png";
import inventoryMonitorModule from "../../assets/images/inventoryMonitorModule.png";
import priceLetter from "../../assets/images/priceLetter.png";
import IotIntegration from "../../assets/images/IotIntegration.png";
import artOfScanning from "../../assets/images/artOfScanning.png";

const Platform = () => {
  return (
    <div className="col-11 d-flex flex-column home-desc-container p-0 gap-3 bg-light">
      <div className="col-12 my-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div className="d-flex flex-column align-items-center  align-items-md-start gap-3 p-2 ">
              <div className="app-detail-container">
                <h1>Route and Resource Optimization</h1>
                <p>
                  Revolutionize your fleet operations with myFuel's cutting-edge
                  AI algorithms. Our intelligent system optimizes truck and
                  resource allocation, crafting efficient routes tailored to
                  your specific needs. Empower your dispatchers with data-driven
                  insights and multiple route options, ensuring maximum
                  efficiency and cost-effectiveness. Experience the future of
                  transportation logistics with myFuel.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center ">
            <img
              className="p-1 w-100"
              src={RouteAndResourseOptimization}
              alt="MyFuelAi"
            />
          </div>
        </div>
      </div>

      {/* BestModule-Section */}
      <div className="col-12 my-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 d-flex justify-content-center order-md-2">
            <div className="d-flex flex-column align-items-center  align-items-md-start gap-3 p-2 ">
              <div className="app-detail-container">
                <h1>BestBuy Module</h1>
                <p>
                  Maximize your profits wit h myFuel's Best Buy module. Our
                  AI-powered system analyzes real-time fuel price data and
                  traffic conditions to identify t he most cost-effective
                  terminals for your fleet. By optimizing your fuel purchasing
                  strategy, you can reduce fuel expenses and increase your
                  bottom line. Experience the power of data-driven
                  decision-making with myFuel
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center order-md-1">
            <img className="p-1 w-100" src={bestBuyModule} alt="MyFuelAi" />
          </div>
        </div>
      </div>

      {/* InventoryMonitoringMoule */}
      <div className="col-12 my-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 d-flex justify-content-center ">
            <div className="d-flex flex-column align-items-center  align-items-md-start gap-3 p-2 ">
              <div className="app-detail-container">
                <h1>Inventory Monitoring Module</h1>
                <p>
                  Gain complete visibility into your fuel inventory with
                  myFuel's robust monitoring module. Our system meticulously
                  tracks fuel flow in and out of your trucks, bulk plants, and
                  internal tanks, ensuring accountability for every drop. By
                  streamlining your inventory management, you can prevent losses
                  due to theft, spillage, or human error. Trust myFuel to
                  safeguard your fuel assets and optimize your operations.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center ">
            <img
              className="p-1 w-100"
              src={inventoryMonitorModule}
              alt="MyFuelAi"
            />
          </div>
        </div>
      </div>

      {/* priceLetters */}
      <div className="col-12 my-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 d-flex justify-content-center order-md-2">
            <div className="d-flex flex-column align-items-center  align-items-md-start gap-3 p-2 ">
              <div className="app-detail-container">
                <h1>Price Letters</h1>
                <p>
                  The Price Letters module streamlines pricing management by
                  allowing you to upload or connect your pricing files directly
                  into the MyFuel system. Easily configure rates and set up
                  pricing strategies, enabling the system to send targeted
                  marketing emails and promotional blasts to potential
                  customers. Leveraging past profit data, the module helps you
                  define optimal rates and provides intelligent suggestions to
                  simplify decision-making. This data-driven approach enhances
                  profitability and strengthens customer engagement.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center order-md-1">
            <img className="p-1 w-100" src={priceLetter} alt="MyFuelAi" />
          </div>
        </div>
      </div>

      {/* artMobileScanning */}
      <div className="col-12 my-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div className="d-flex flex-column align-items-center  align-items-md-start gap-3 p-2 ">
              <div className="app-detail-container">
                <h1>State-of-the-Art Mobile Scanning</h1>
                <p>
                  Streamline your operations with myFuel's advanced mobile
                  scanning technology. Our AI-powered live extraction automates
                  data capture, reducing manual input by 80% and minimizing
                  errors. By quickly and accurately collecting essential data,
                  you'll accelerate load and order completion times. With
                  top-notch proof of delivery documentation generated
                  effortlessly, you can expedite your accounts receivable
                  process and improve cash flow. Experience t he future of
                  transportation logistics with myFuel's innovative mobile
                  scanning solution
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
            <img className="p-1 w-100" src={artOfScanning} alt="MyFuelAi" />
          </div>
        </div>
      </div>

      {/* Iot-Integration */}
      <div className="col-12 my-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 d-flex justify-content-center order-md-2">
            <div className="d-flex flex-column align-items-center  align-items-md-start gap-3 p-2 ">
              <div className="app-detail-container">
                <h1>Route and Resource Optimization</h1>
                <p>
                  Revolutionize your fleet operations with myFuel's cutting-edge
                  AI algorithms. Our intelligent system optimizes truck and
                  resource allocation, crafting efficient routes tailored to
                  your specific needs. Empower your dispatchers with data-driven
                  insights and multiple route options, ensuring maximum
                  efficiency and cost-effectiveness. Experience the future of
                  transportation logistics with myFuel.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center order-md-1">
            <img className="p-1 w-100" src={IotIntegration} alt="MyFuelAi" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
