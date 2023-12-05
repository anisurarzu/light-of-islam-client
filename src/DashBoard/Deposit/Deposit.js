import React, { useRef } from "react";

import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";

import { classNames } from "primereact/utils";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { Calendar } from "primereact/calendar";
import axios from "axios";
import { useEffect } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { Dialog } from "primereact/dialog";
import { QrReader } from "react-qr-reader";
// import BarcodeReader from "react-barcode-reader";
// import BarcodeScannerComponent from "react-qr-barcode-scanner";

export default function FormikDoc() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [brandList, setBrandList] = useState([]);
  const [modelList, setModelList] = useState([]);
  const [seriesList, setSeriesList] = useState([]);
  const [problemList, setProblemList] = useState([]);
  const [engineerList, setEngineerList] = useState([]);
  const [warrantyList, setWarrantyList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [data, setData] = React.useState("Not Found");
  const [scannedContent, setScannedContent] = useState(null);
  // console.log("scannedContent", scannedContent);

  const qrReaderRef = useRef(null);
  useEffect(() => {
    getBrandDropdownValues();

    getProblemList();
    getWarrantyList();
    getEngineerList();
  }, []);

  const formik = useFormik({
    initialValues: {
      customerName: "",
      value: "",
      brand: "",
    },
    onSubmit: async (data) => {
      const newSerialNumber = generateSerialNumber("SN-");
      if (newSerialNumber) {
        const finalData = {
          customerName: data?.customerName,
          contactNumber: data?.contactNumber,
          customerAddress: data?.customerAddress,
          brandName: data?.brand?.name,
          brandID: data?.brand?._id,
          modelName: data?.model?.name,
          modelID: data?.model?._id,
          engineerName: data?.eName?.name,
          engineerID: data?.eName?._id,
          problemName: data?.problem?.name,
          problemID: data?.problem?._id,
          warrantyName: data?.warranty?.name,
          warrantyID: data?.warranty?._id,
          imeiNumber: data?.imei,
          serviceCost: data?.serviceCost,
          deliveryDate: data?.date,
          orderDate: new Date().toLocaleString(),
          serialNo: newSerialNumber,
          status: "Accepted",
        };
        const customerInfo = {
          customerName: data?.customerName,
          contactNumber: data?.contactNumber,
          customerAddress: data?.customerAddress,
          orderInfo: finalData,
        };
        try {
          setLoading(true);
          const res = await axios.post(
            `https://yellow-sparkly-station.glitch.me/deposit`,
            finalData
          );
          if (res?.status === 200) {
            try {
              const res = await axios.post(
                `https://yellow-sparkly-station.glitch.me/customerInfo`,
                customerInfo
              );
              if (res?.status === 200) {
                toast.success("Successfully Added!");
                setLoading(false);
                formik?.resetForm();
              }
            } catch (err) {}
          }
        } catch (err) {
          setLoading(false);
        }
      }
      // console.log("data", data);
    },
  });

  const getBrandDropdownValues = async () => {
    try {
      const res = await axios.get(
        `https://yellow-sparkly-station.glitch.me/questions`
      );
      if (res?.status === 200) {
        setBrandList(res?.data);
      }
    } catch (err) {}
  };
  const getProblemList = async () => {
    try {
      const res = await axios.get(
        `https://yellow-sparkly-station.glitch.me/problem`
      );
      if (res?.status === 200) {
        setProblemList(res?.data);
      }
    } catch (err) {}
  };
  const getEngineerList = async () => {
    try {
      const res = await axios.get(
        `https://yellow-sparkly-station.glitch.me/eName`
      );
      if (res?.status === 200) {
        setEngineerList(res?.data);
      }
    } catch (err) {}
  };
  const getWarrantyList = async () => {
    try {
      const res = await axios.get(
        `https://yellow-sparkly-station.glitch.me/warranty`
      );
      if (res?.status === 200) {
        setWarrantyList(res?.data);
      }
    } catch (err) {}
  };
  const getBrandWiseModelDropdownValues = async (value) => {
    console.log("hit");
    try {
      const res = await axios.get(
        `https://yellow-sparkly-station.glitch.me/model/${value?._id}`
      );
      if (res?.status === 200) {
        setModelList(res?.data?.brandWiseModel);
        setSeriesList(res?.data?.brandWiseSeries);
      }
    } catch (err) {}
  };

  function generateSerialNumber() {
    const randomThreeDigits = Math.floor(100 + Math.random() * 900); // Generate a random 3-digit number
    return `SN-${randomThreeDigits}`;
  }

  const selectedCountryTemplate = (option, props) => {
    if (option) {
      return (
        <div className="flex align-items-center">
          {/* <img
            alt={option.name}
            src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
            className={`mr-2 flag flag-${option.code.toLowerCase()}`}
            style={{ width: "18px" }}
          /> */}
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const countryOptionTemplate = (option) => {
    return (
      <div className="flex align-items-center">
        {/* <img
          alt={option.name}
          src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
          className={`mr-2 flag flag-${option.code.toLowerCase()}`}
          style={{ width: "18px" }}
        /> */}
        <div>{option.name}</div>
      </div>
    );
  };

  // scan related functionality
  const handleOpenScanner = () => {
    qrReaderRef.current.openImageDialog();
  };
  // Function to handle successful scan
  const hideModal = async () => {
    setShowForm(false);
    formik.resetForm();
    // setRowData(false);
  };
  const handleScan = (content) => {
    console.log("content", content?.text);
    formik?.setFieldValue("imei", content?.text);

    if (content) {
      setScannedContent(content);
      setShowForm(false);
    }
  };
  // Function to handle error during scanning
  const handleError = (error) => {
    console.error("Error accessing camera:", error);
    toast.error(
      "Error accessing camera. Please make sure you have granted camera permissions."
    );
  };

  const showModal = () => {
    setShowForm(true);
  };

  useEffect(() => {
    // Automatically open the scanner when showForm becomes true
    if (showForm && qrReaderRef.current) {
      handleOpenScanner();
    }
  }, [showForm]);
  return (
    <div className="pt-2">
      <h2 className="text-xl font-bold text-blue-700">
        Add Device Information
      </h2>
      <form onSubmit={formik?.handleSubmit}>
        <div className="grid grid-cos-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 pb-4">
          <div>
            <InputText
              id="customerName"
              name="customerName"
              value={formik?.values?.customerName}
              className="w-full"
              onChange={(e) => {
                formik?.setFieldValue("customerName", e?.target?.value);
              }}
              placeholder="Customer Name"
            />
          </div>
          <div>
            <InputText
              id="customerAddress"
              name="customerAddress"
              className="w-full"
              value={formik?.values?.customerAddress}
              onChange={(e) => {
                // Check if formik is defined before accessing its methods or properties

                formik.setFieldValue("customerAddress", e.target.value);
              }}
              placeholder="Customer Address"
            />
          </div>

          <div>
            <InputText
              id="contactNumber"
              name="contactNumber"
              value={formik?.values?.contactNumber}
              className="w-full"
              onChange={(e) => {
                formik?.setFieldValue("contactNumber", e.target.value);
              }}
              placeholder="Contact Number"
            />
          </div>
          <div className="card flex justify-content-center">
            <Dropdown
              value={formik?.values?.brand}
              onChange={(e) => {
                setSelectedCountry(e.value);
                formik?.setFieldValue("brand", e.value);
                getBrandWiseModelDropdownValues(e?.value);
              }}
              options={brandList}
              optionLabel="name"
              placeholder="Select a Brand"
              filter
              valueTemplate={selectedCountryTemplate}
              itemTemplate={countryOptionTemplate}
              className="w-full md:w-14rem"
              required
            />
          </div>

          <div className="card flex justify-content-center">
            <Dropdown
              value={formik?.values?.series}
              onChange={(e) => {
                setSelectedCountry(e.value);
                formik?.setFieldValue("series", e.value);
              }}
              options={seriesList}
              optionLabel="name"
              placeholder="Select a Series"
              filter
              valueTemplate={selectedCountryTemplate}
              itemTemplate={countryOptionTemplate}
              className="w-full md:w-14rem"
              required
            />
          </div>
          <div className="card flex justify-content-center">
            <Dropdown
              value={formik?.values?.model}
              onChange={(e) => {
                setSelectedCountry(e.value);
                formik?.setFieldValue("model", e.value);
              }}
              options={modelList}
              optionLabel="name"
              placeholder="Select a Model"
              filter
              valueTemplate={selectedCountryTemplate}
              itemTemplate={countryOptionTemplate}
              className="w-full md:w-14rem"
              required
            />
          </div>
          <div className="card flex justify-content-center">
            <Dropdown
              value={formik?.values?.problem}
              onChange={(e) => {
                setSelectedCountry(e.value);
                formik?.setFieldValue("problem", e.value);
              }}
              options={problemList}
              optionLabel="name"
              placeholder="Select a Problem"
              filter
              valueTemplate={selectedCountryTemplate}
              itemTemplate={countryOptionTemplate}
              className="w-full md:w-14rem"
              required
            />
          </div>
          <div className="card flex justify-content-center">
            <Dropdown
              value={formik?.values?.eName}
              onChange={(e) => {
                setSelectedCountry(e.value);
                formik?.setFieldValue("eName", e.value);
              }}
              options={engineerList}
              optionLabel="name"
              placeholder="Select a EngineerName"
              filter
              valueTemplate={selectedCountryTemplate}
              itemTemplate={countryOptionTemplate}
              className="w-full md:w-14rem"
              required
            />
          </div>
          <div className="card flex justify-content-center">
            <Dropdown
              value={formik?.values?.warranty}
              onChange={(e) => {
                setSelectedCountry(e.value);
                formik?.setFieldValue("warranty", e.value);
              }}
              options={warrantyList}
              optionLabel="name"
              placeholder="Select Warranty"
              filter
              valueTemplate={selectedCountryTemplate}
              itemTemplate={countryOptionTemplate}
              className="w-full md:w-14rem"
              required
            />
          </div>

          <div className="grid grid-cols-4 gap-1">
            <InputText
              id="imei"
              name="imei"
              value={formik?.values?.imei}
              className="w-full col-span-3"
              onChange={(e) => {
                formik?.setFieldValue("imei", e.target.value);
              }}
              placeholder="IMEI"
            />

            <div className="flex justify-end space-x-2">
              <button
                type="text"
                className="flex items-center px-3 py-2 text-white bg-blue-500 border rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
                onClick={showModal}>
                <img
                  className="w-6 h-6 mr-1"
                  src="https://i.ibb.co/kc4hhJ3/scan.jpg"
                  alt="Scan Icon"
                />
              </button>
            </div>
          </div>
          <div>
            <InputText
              id="serviceCost"
              name="serviceCost"
              value={formik?.values?.serviceCost}
              className="w-full"
              onChange={(e) => {
                formik?.setFieldValue("serviceCost", e.target.value);
              }}
              placeholder="Service Cost"
            />
          </div>
          <div>
            <InputText
              id="serviceProfit"
              name="serviceProfit"
              value={formik?.values?.serviceProfit}
              className="w-full"
              onChange={(e) => {
                formik?.setFieldValue("serviceProfit", e.target.value);
              }}
              placeholder="Service Profit"
            />
          </div>
          <div>
            <InputText
              id="discount"
              name="discount"
              value={formik?.values?.serviceProfit}
              className="w-full"
              onChange={(e) => {
                formik?.setFieldValue("discount", e.target.value);
              }}
              placeholder="Discount (%)"
            />
          </div>

          <div>
            <Calendar
              id="date"
              name="date"
              value={formik?.values?.date}
              className="w-full"
              onChange={(e) => {
                formik?.setFieldValue("date", e.target.value);
              }}
              placeholder="Delivery Date"
              required
            />
          </div>
        </div>

        <div>
          <Button type="submit" label="Submit" loading={loading} />
        </div>
      </form>

      <Dialog
        visible={showForm}
        style={{ width: "500px" }}
        header="Lunch Scan"
        modal
        className="p-fluid"
        onHide={hideModal}
        closeOnEscape
        blockScroll
        icons
        focusOnShow
        resizable
        maximizable
        loading={true}>
        <div>
          <div>
            <QrReader
              delay={300}
              onError={handleError}
              onResult={handleScan}
              style={{ width: "100%", height: "auto" }}
              legacyMode={true}
            />
            {/* <BarcodeReader onError={handleError} onScan={handleScan} /> */}
            {/* <BarcodeScannerComponent
              width={500}
              height={500}
              onUpdate={(err, result) => {
                if (result) setData(result.text);
                else setData("Not Found");
              }}
            /> */}
            <p>{data}</p>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
