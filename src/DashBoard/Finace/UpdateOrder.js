import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import React, { useEffect, useRef } from "react";
import { useFormik } from "formik";
import { Button } from "primereact/button";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "react-calendar";
import { InputField } from "../../components/InputField/InputField";

export default function UpdateOrder({ updateData, showForm2, hideModal }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [brandList, setBrandList] = useState([]);
  const [modelList, setModelList] = useState([]);
  const [seriesList, setSeriesList] = useState([]);
  const [problemList, setProblemList] = useState([]);
  const [engineerList, setEngineerList] = useState([]);
  const [warrantyList, setWarrantyList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [autoFilteredValue, setAutoFilteredValue] = useState([]);

  const [data, setData] = React.useState("Not Found");
  const [scannedContent, setScannedContent] = useState(null);

  const [scanning, setScanning] = useState(false);
  const [results, setResults] = useState([]);
  // console.log("scannedContent", scannedContent);

  console.log("updateData", updateData);

  const qrReaderRef = useRef(null);
  useEffect(() => {
    getBrandDropdownValues();
    getProblemList();
    getWarrantyList();
    getEngineerList();
  }, []);

  const formik = useFormik({
    initialValues: {
      customerName: updateData?.customerName,
      contactNumber: updateData?.contactNumber,
      customerAddress: updateData?.customerAddress,
      imei: updateData?.imeiNumber,
      serviceProfit: updateData?.serviceProfit,
      brand: updateData?.brandName, // Use brandName directly
      warranty: updateData?.warrantyName, // Use modelName directly
      eName: updateData?.engineerName, // Use modelName directly
      problem: updateData?.problemName, // Use modelName directly
      model: updateData?.modelName, // Use modelName directly
      serviceCost: updateData?.serviceCost,
      discount: updateData?.discount,
    },
    onSubmit: async (data) => {
      const newSerialNumber = generateSerialNumber("SN-");
      if (newSerialNumber) {
        const finalData = {
          _id: updateData?._id,
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
          serviceProfit: data?.serviceProfit,
          discount: data?.discount,
          deliveryDate: data?.date,
          orderDate: new Date().toISOString()?.slice(0, 10),
          serialNo: newSerialNumber,
          status: updateData?.status,
        };
        const customerInfo = {
          customerName: data?.customerName,
          contactNumber: data?.contactNumber,
          customerAddress: data?.customerAddress,
          orderInfo: finalData,
        };
        try {
          setLoading(true);
          const res = await axios.put(
            `http://localhost:5000/deposit/${updateData?._id}`,
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
                hideModal();
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
    enableReinitialize: true,
  });

  const getBrandDropdownValues = async () => {
    try {
      const res = await axios.get(
        `https://yellow-sparkly-station.glitch.me/questions`
      );
      if (res?.status === 200) {
        setBrandList(res?.data);
        setModelList(res?.data?.brandWiseModel);
      }
    } catch (err) {}
  };
  const searchBrandDropdown = (event) => {
    if (brandList) {
      if (!event.query.trim().length && event?.length === undefined) {
        setAutoFilteredValue([...brandList]);
      } else {
        setAutoFilteredValue(
          brandList?.filter((category) => {
            return category?.name
              .toLowerCase()
              ?.includes(event.query.toLowerCase());
          })
        );
      }
    }
  };
  const searchModelDropdown = (event) => {
    if (modelList) {
      if (!event.query.trim().length && event?.length === undefined) {
        setAutoFilteredValue([...modelList]);
      } else {
        setAutoFilteredValue(
          modelList?.filter((category) => {
            return category?.name
              .toLowerCase()
              ?.includes(event.query.toLowerCase());
          })
        );
      }
    }
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
  const searchProblemDropdown = (event) => {
    if (problemList) {
      if (!event.query.trim().length && event?.length === undefined) {
        setAutoFilteredValue([...problemList]);
      } else {
        setAutoFilteredValue(
          problemList?.filter((category) => {
            return category?.name
              .toLowerCase()
              ?.includes(event.query.toLowerCase());
          })
        );
      }
    }
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
  const searchEngineerDropdown = (event) => {
    if (engineerList) {
      if (!event.query.trim().length && event?.length === undefined) {
        setAutoFilteredValue([...engineerList]);
      } else {
        setAutoFilteredValue(
          engineerList?.filter((category) => {
            return category?.name
              .toLowerCase()
              ?.includes(event.query.toLowerCase());
          })
        );
      }
    }
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
  const searchWarrentyDropdown = (event) => {
    if (warrantyList) {
      if (!event.query.trim().length && event?.length === undefined) {
        setAutoFilteredValue([...warrantyList]);
      } else {
        setAutoFilteredValue(
          warrantyList?.filter((category) => {
            return category?.name
              .toLowerCase()
              ?.includes(event.query.toLowerCase());
          })
        );
      }
    }
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
  const hideModal1 = async () => {
    setShowForm(false);
    formik.resetForm();
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

  // scanner
  const scan = () => {
    setScanning(!scanning);
    console.log("scanning", scanning);
  };

  const onDetected = (result) => {
    console.log(parseInt(result.codeResult.code, 10));
    // setResults(results.concat([result]));
    formik?.setFieldValue("imei", parseInt(result.codeResult.code, 10));
    setShowForm(false);
    setScanning(false);
  };
  return (
    <div>
      <Dialog
        visible={showForm2}
        style={{ width: "ful" }}
        header="Update Order Information"
        modal
        className="p-fluid"
        onHide={hideModal}
        closeOnEscape
        blockScroll
        icons
        focusOnShow
        resizable
        // maximizable
        loading={true}>
        <div className="pt-2">
          <form onSubmit={formik?.handleSubmit}>
            <div className="grid grid-cos-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-4">
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
              <div>
                <InputField
                  id="brand"
                  name="brand"
                  type="select"
                  labelFor="brand"
                  label="Brand"
                  errors=""
                  required={false}
                  disabled={false}
                  width="full"
                  optionLabel=""
                  onChange={(e) => {
                    console.log();
                    formik.setFieldValue("brand", e?.value || e?.target?.value);
                  }}
                  value={formik.values.brand}
                  autoFilteredValue={autoFilteredValue}
                  autoCompleteMethod={searchBrandDropdown}
                  selectedAutoValue={brandList}
                  setSelectedAutoValue={setBrandList}
                />
              </div>
              <div className="card flex justify-content-center">
                <InputField
                  id="model"
                  name="model"
                  type="select"
                  labelFor="model"
                  label="Model"
                  errors=""
                  required={false}
                  disabled={false}
                  width="full"
                  optionLabel=""
                  onChange={(e) => {
                    console.log();
                    formik.setFieldValue("model", e?.value || e?.target?.value);
                  }}
                  value={formik.values.model}
                  autoFilteredValue={autoFilteredValue}
                  autoCompleteMethod={searchModelDropdown}
                  selectedAutoValue={modelList}
                  setSelectedAutoValue={setModelList}
                />
              </div>

              <div className="card flex justify-content-center">
                <InputField
                  id="problem"
                  name="problem"
                  type="select"
                  labelFor="problem"
                  label="Problem"
                  errors=""
                  required={false}
                  disabled={false}
                  width="full"
                  optionLabel=""
                  onChange={(e) => {
                    console.log();
                    formik.setFieldValue(
                      "problem",
                      e?.value || e?.target?.value
                    );
                  }}
                  value={formik.values.problem}
                  autoFilteredValue={autoFilteredValue}
                  autoCompleteMethod={searchProblemDropdown}
                  selectedAutoValue={problemList}
                  setSelectedAutoValue={setProblemList}
                />
              </div>
              <div className="card flex justify-content-center">
                <InputField
                  id="eName"
                  name="eName"
                  type="select"
                  labelFor="eName"
                  label="Engineer"
                  errors=""
                  required={false}
                  disabled={false}
                  width="full"
                  optionLabel=""
                  onChange={(e) => {
                    console.log();
                    formik.setFieldValue("eName", e?.value || e?.target?.value);
                  }}
                  value={formik.values.eName}
                  autoFilteredValue={autoFilteredValue}
                  autoCompleteMethod={searchEngineerDropdown}
                  selectedAutoValue={engineerList}
                  setSelectedAutoValue={setEngineerList}
                />
              </div>
              <div className="card flex justify-content-center">
                <InputField
                  id="warranty"
                  name="warranty"
                  type="select"
                  labelFor="warranty"
                  label="Warranty"
                  errors=""
                  required={false}
                  disabled={false}
                  width="full"
                  optionLabel=""
                  onChange={(e) => {
                    console.log();
                    formik.setFieldValue(
                      "warranty",
                      e?.value || e?.target?.value
                    );
                  }}
                  value={formik.values.warranty}
                  autoFilteredValue={autoFilteredValue}
                  autoCompleteMethod={searchWarrentyDropdown}
                  selectedAutoValue={warrantyList}
                  setSelectedAutoValue={setWarrantyList}
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

                {/* <div className="flex justify-end space-x-2">
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
                </div> */}
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
                  value={formik?.values?.discount}
                  className="w-full"
                  onChange={(e) => {
                    formik?.setFieldValue("discount", e.target.value);
                  }}
                  placeholder="Discount"
                />
              </div>
              <div></div>

              {/*  <div>
                <Calendar
                  id="date"
                  name="date"
                  value={formik?.values?.date}
                  className="w-full"
                  onChange={(e) => {
                    formik?.setFieldValue("date", e.target.value);
                  }}
                  placeholder="Delivery Date"
                />
              </div> */}
            </div>

            <div className="grid grid-cols-5 gap-4 ">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <Button type="submit" label="Update" loading={loading} />
            </div>
          </form>
        </div>
      </Dialog>
    </div>
  );
}
