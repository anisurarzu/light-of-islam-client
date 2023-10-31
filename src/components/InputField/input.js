import { TextField } from "@mui/material";

import moment from "moment";
import { AutoComplete } from "primereact/autocomplete";
import { Calendar } from "primereact/calendar";
import { Checkbox } from "primereact/checkbox";
import { InputSwitch } from "primereact/inputswitch";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { ListBox } from "primereact/listbox";
import { MultiSelect } from "primereact/multiselect";
import { Password } from "primereact/password";
import { PickList } from "primereact/picklist";
import { RadioButton } from "primereact/radiobutton";
import { useEffect, useRef, useState } from "react";
import { MdOutlineFilePresent, MdOutlineGTranslate } from "react-icons/md";
import { toast } from "react-toastify";
// import {
//   DatePicker,
//   DateTimeField,
//   DateTimePicker,
//   LocalizationProvider,
//   TimePicker,
//   AdapterMoment,
// } from "@mui/x-date-pickers";
export const InputField = ({
  id,
  type,
  name,
  label,
  labelFor,
  required,
  dialog,
  errors,
  defaultValue,
  disabled = false,
  register,
  width,
  height,
  value,
  optionLabel,
  autoFilteredValue,
  autoCompleteMethod,
  selectedAutoValue,
  setSelectedAutoValue,
  className,
  checked,
  onChange,
  onKeyPress,
  ref,
  translateHandler,
  setSwitchChecked,
  switchChecked,
  onBlur,
  options,
  imagePreview,
  setImagePreview,
  onSelect,
  onClick,
  inputGroup,
  inputGroupIcon,
  switchClassName,
  picklistSourceValue,
  picklistTargetValue,
  setPicklistSourceValue,
  setPicklistTargetValue,
  sourceHeader,
  targetHeader,
  fileUploadPadding,
  autoCompleteFieldName,
  maxFractionDigits,
  minFractionDigits,
  prefix,
  suffix,
  mode,
  min,
  filePreview,
  radioBtnmap,
  selectionMode,
  minDate,
  maxDate,
  dateWriteAble,
  maxlength,
  onClose,
  accept,
  rows,
  cols,
  listValue,
  max,
  // timeOnly,
  placeholder,
  padding,
  timeOnly,
  readOnly,
  onFocus,
  hourFormat,
  showTime,
  ...rest
}) => {
  const [numbers, setNumbers] = useState(value || "");
  const numberInputRef = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      // console.log(event);
      event.preventDefault();
    };

    const element = document.querySelectorAll(".numberFieldID");
    // console.log(element);
    Array.from(element).forEach((element) => {
      element.addEventListener("wheel", handleWheel, { passive: false });
    });

    // Clean up the event listeners when the component unmounts
    return () => {
      Array.from(element).forEach((element) => {
        element.removeEventListener("wheel", handleWheel);
      });
    };
  }, []);

  function handleFocus() {
    if (numberInputRef.current) {
      numberInputRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }
  useEffect(() => {
    if (errors) {
      toast.error(errors, {
        onClose,
      });
    }
  }, [errors]);
  useEffect(() => {
    setNumbers(value);
  }, [value]);

  // const localTimezone = moment.tz.guess();

  const style = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#3F51B5",
      },
    },
  };
  const requiredStyle = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#3F51B5",
      },
      "& fieldset": {
        borderColor: "red",
      },
    },
  };

  const dateTimeStyle = {
    ".MuiInputBase-input": {
      padding: "11.5px",
      backgroundColor: "#fff !important",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#3F51B5",
      },
      ...(required &&
        !value && {
          "& fieldset": {
            borderColor: "red",
          },
        }),
    },
  };

  const fixedNumber = (e) => {
    const number =
      maxFractionDigits === undefined
        ? e
        : Math.round(e * Math.pow(10, maxFractionDigits)) /
          Math.pow(10, maxFractionDigits);
    return number === 0 ? numbers : number === "" ? "" : number;
  };

  return (
    <>
      {type !== "image" && (
        <span
          className={
            type === "numbers" ||
            type === "listbox" ||
            type === "picklist" ||
            (type === "date" && showTime) ||
            (type === "date" && timeOnly)
              ? "w-full"
              : "p-float-label w-full"
          }
        >
          {!inputGroup && type === "text" && (
            <>
              <InputText
                id={id}
                name={name}
                className={`rounded-md ${
                  required && !value?.length && "border-red-500"
                } w-${width}`}
                disabled={disabled}
                value={value == null ? "" : value}
                onChange={onChange}
                required={required}
                onBlur={onBlur}
                onClick={onClick}
                onKeyPress={onKeyPress}
                {...rest}
              />
              <label className="text-[#A2B3C4]" htmlFor={labelFor}>
                {label}
              </label>
            </>
          )}
          {!inputGroup && type === "number" && (
            <>
              <InputText
                id={id}
                name={name}
                className={`rounded-md ${
                  required && !value?.length && "p-invalid"
                } w-${width}`}
                disabled={disabled}
                value={value == null ? "" : value}
                onChange={onChange}
                required={required}
                onBlur={onBlur}
                onClick={onClick}
                autoComplete="on"
              />
              <label className="text-[#A2B3C4]" htmlFor={labelFor}>
                {label}
              </label>
            </>
          )}

          {!inputGroup && type === "numbers" && (
            <>
              <TextField
                // error
                type="number"
                value={fixedNumber(numbers)}
                required={required}
                variant="outlined"
                onChange={(e) => {
                  let newValue = e.target.value;
                  // x;
                  if (typeof min === "number" || typeof max === "number") {
                    // console.log(min, max);
                    if (typeof min === "number" && newValue < min) return;
                    if (typeof max === "number" && newValue > max) return;
                  }
                  const roundedValue = !maxFractionDigits
                    ? newValue
                    : Math.round(newValue * Math.pow(10, maxFractionDigits)) /
                      Math.pow(10, maxFractionDigits);
                  setNumbers(
                    roundedValue ? Number(roundedValue) : roundedValue
                  );
                  return onChange({
                    ...e,
                    value: roundedValue ? Number(roundedValue) : roundedValue,
                    target: {
                      ...e.target,
                      value: roundedValue ? Number(roundedValue) : roundedValue,
                    },
                  });
                }}
                onFocus={() => {
                  value ? setNumbers(value) : setNumbers("");
                  handleFocus();
                  onFocus && onFocus();
                }}
                id={id}
                label={label}
                name={name}
                onBlur={() => {
                  setNumbers(value ? value : 0);
                  onBlur && onBlur();
                }}
                onClick={onClick}
                fullWidth
                inputMode={mode || "decimal"}
                className="p-inputtext border-red-500 sortable-handler numberFieldID"
                autoComplete={"true"}
                InputProps={{
                  style: { height: 44, minWidth: 60 },
                  pattern: "[0-9]*",
                  step: "any",
                  max: min,
                  min: max,
                }}
                InputLabelProps={{
                  className: `rounded-md ${
                    required && !value && "!border-red-500"
                  } w-${width} `,
                }}
                size="small"
                sx={required && !value ? requiredStyle : style} //requiredStyle
                onKeyDown={(event) => {
                  !maxFractionDigits &&
                    event.key === "." &&
                    event.preventDefault();
                  if (event.key === "Backspace" && event.target.value === "0") {
                    setNumbers("");
                  }
                }}
                onPaste={(event) => {
                  let pasteData = event.clipboardData.getData("text");
                  if (maxFractionDigits) {
                    if (pasteData.includes(".")) {
                      let [wholePart, fractionPart] = pasteData.split(".");
                      fractionPart = fractionPart.slice(0, maxFractionDigits);
                      pasteData = `${wholePart}.${fractionPart}`;
                    }
                  }
                  onChange(pasteData);
                }}
                disabled={disabled || readOnly}
                step="any"
                inputRef={numberInputRef}
                // onWheel={(event) => {
                //     console.log(event);
                //     event.preventDefault();
                // }}
                {...rest}
              />
              {/* <InputNumber
                                id={id}
                                name={name}
                                className={`rounded-md ${required && !value && "inputNumber"} w-${width}`}
                                disabled={disabled}
                                value={numbers}
                                onChange={(e) => {
                                    console.log(e);
                                    setNumbers(e.value);
                                    onChange(e);
                                }}
                                required={required}
                                onBlur={() => {
                                    setNumbers(value ? value : 0);
                                    onBlur && onBlur();
                                }}
                                onClick={onClick}
                                mode={"decimal"}
                                locale="en-US"
                                minFractionDigits={minFractionDigits || 0}
                                maxFractionDigits={maxFractionDigits || 1}
                                // min={min || 0}
                                prefix={prefix}
                                suffix={suffix}
                                maxLength={maxlength}
                                {...rest}
                                onFocus={() => {
                                    value ? setNumbers(value) : setNumbers("");
                                }}
                                // onKeyDown={(e) => {
                                //     if (e.key === "Backspace") {
                                //         const newValue = value.replace(/(\.\d)$/, "");
                                //         setNumbers(newValue);
                                //     }
                                // }}
                            />
                            <label className="text-[#A2B3C4]" htmlFor={labelFor}>
                                {label}
                            </label> */}
            </>
          )}

          {!inputGroup && type === "password" && (
            <>
              <Password
                id={id}
                name={name}
                className={`rounded-md ${
                  required && !value?.length && "border-red-500"
                } w-${width}`}
                disabled={disabled}
                value={value == null ? "" : value}
                onChange={onChange}
                required={required}
                onBlur={onBlur}
                onClick={onClick}
                feedback={false}
                inputClassName={`rounded-md ${
                  required && !value?.length && "border-red-500"
                } w-${width}`}
              />
              <label className="text-[#A2B3C4]" htmlFor={labelFor}>
                {label}
              </label>
            </>
          )}
          {type === "textarea" && (
            <>
              <InputTextarea
                autoResize
                rows={rows ?? "5"}
                cols={cols ?? "30"}
                id={id}
                name={name}
                className={`rounded-md ${
                  required && !value && "border-red-500"
                } w-${width}`}
                disabled={disabled}
                value={value == null ? "" : value}
                onChange={onChange}
                required={required}
                onBlur={onBlur}
              />
              <label htmlFor={labelFor}>{label}</label>
            </>
          )}
          {type === "select" && (
            <div className="relative p-float-label w-full">
              <AutoComplete
                dropdown
                suggestions={autoFilteredValue}
                completeMethod={autoCompleteMethod}
                field={autoCompleteFieldName || "label"}
                id={id}
                name={name}
                className={`rounded-md w-${width} ${
                  required &&
                  !value?.length &&
                  !value?.[autoCompleteFieldName || "label"]?.length &&
                  "autoComplete-red"
                }`}
                disabled={disabled}
                value={value == null ? "" : value}
                onChange={onChange}
                ref={ref}
                onBlur={onBlur}
                autoHighlight
                onSelect={onSelect}
                onClick={onClick}
                defaultValue={defaultValue}
                dropdownAutoFocus
                required={required} // not working
                size={1}
                forceSelection
                // virtualScrollerOptions={{ itemSize: 38 }}
                {...rest}
              />
              <label htmlFor={labelFor}>{label}</label>
            </div>
          )}
          {type === "multiselect" && (
            <>
              <MultiSelect
                value={value == null ? "" : value}
                onChange={onChange}
                options={options}
                optionLabel={optionLabel}
                placeholder={placeholder}
                filter
                className={`rounded-md w-${width} ${
                  required &&
                  !value?.length &&
                  !value?.label?.length &&
                  "autoComplete-red"
                }`}
                maxSelectedLabels={3}
              />
              <label htmlFor={labelFor}>{label}</label>
            </>
          )}
          {type === "listbox" && (
            <>
              <ListBox
                value={value}
                options={listValue}
                onChange={onChange}
                optionLabel="name"
              />
            </>
          )}
          {type === "date" && !showTime && !timeOnly && !dateWriteAble && (
            <>
              <Calendar
                showIcon
                showButtonBar={timeOnly && false}
                className={`rounded-md ${
                  required && !value && "border-red-500"
                } w-${width}`}
                required={required}
                value={value}
                onChange={(e) => {
                  const userValue = e?.value || e.target?.value;
                  const localTime = Number(process.env.REACT_APP_LOCAL_TIME);
                  if (selectionMode === "multiple") {
                    const userValue = e?.value || e.target?.value;
                    const convertedTime = userValue.map((value) => {
                      return new Date(value);
                    });
                    const sixHoursLater = convertedTime.map((value) => {
                      return showTime || timeOnly
                        ? value
                        : new Date(
                            value.setHours(value.getHours() + localTime)
                          );
                    });
                    return onChange({
                      ...e,
                      value: sixHoursLater,
                      target: {
                        ...e.target,
                        value: sixHoursLater,
                      },
                      originalEvent: {
                        ...e,
                        name: id,
                      },
                    });
                  }
                  const userData = new Date(e?.value || e.target?.value);
                  const sixHoursLater = new Date(
                    userData.setHours(userData.getHours() + localTime)
                  ); // due to time difference between utc + 6
                  return onChange({
                    ...e,
                    value: showTime || timeOnly ? userValue : sixHoursLater,
                    target: {
                      ...e.target,
                      value: showTime || timeOnly ? userValue : sixHoursLater,
                    },
                    originalEvent: {
                      ...e,
                      name: id,
                    },
                  });
                }}
                id={id}
                name={name}
                disabled={disabled}
                onClick={onClick}
                onBlur={onBlur}
                onSelect={onSelect}
                monthNavigator
                yearNavigator
                yearRange="1900:2050"
                dateFormat="dd/mm/yy"
                selectionMode={selectionMode}
                maxDate={maxDate}
                minDate={minDate}
                timeOnly={timeOnly}
                showTime={showTime}
                showOnFocus
                hourFormat={hourFormat || "12"}
                input={true}
                // timeZone="Asia/Dhaka"
                // locale={localTimezone}
                {...rest}
              />
              <label className="text-[#A2B3C4]" htmlFor={labelFor}>
                {label}
              </label>
            </>
          )}

          {type === "translate" && (
            <>
              <div className="p-inputgroup ">
                <div className="p-float-label">
                  <InputText
                    className={`rounded-md ${
                      required && !value?.length && "border-red-500"
                    } w-${width}`}
                  />
                  <label className="text-[#A2B3C4]" htmlFor={labelFor}>
                    {label}
                  </label>
                  <button
                    type=""
                    icon={<MdOutlineGTranslate />}
                    className="bg-gray-500 text-2xl"
                    onClick={translateHandler}
                  />
                </div>
              </div>
            </>
          )}

          {type === "switch" && (
            <div
              className={
                !switchClassName
                  ? `border border-gray-400 grid grid-cols-${
                      label ? 2 : 1
                    } p-3 rounded-md bg-white`
                  : switchClassName
              }
            >
              {label && <p className="text-gray-600  ">{label}</p>}
              <div
                className={label ? "justify-self-end" : "justify-self-center"}
              >
                <InputSwitch
                  checked={switchChecked || false}
                  onChange={setSwitchChecked}
                  id={id}
                  name={name}
                  value={value}
                />
              </div>
            </div>
          )}

          {type === "checkbox" && (
            <>
              <Checkbox
                inputId={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
              />
              <label htmlFor={labelFor} className={className}>
                {label}
              </label>
            </>
          )}
          {inputGroup && type === "text" && (
            <div className="col-12 md:col-4 rounded-md">
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">
                  <i className={inputGroupIcon}></i>
                </span>
                <span className="p-float-label">
                  <InputText
                    id={id}
                    name={name}
                    className={`rounded-md ${
                      required && !value?.length && "border-red-500"
                    } w-${width} `}
                    disabled={disabled}
                    value={value == null ? "" : value}
                    onChange={onChange}
                    required={required}
                    onBlur={onBlur}
                    onClick={onClick}
                  />
                  <label className="text-[#A2B3C4]" htmlFor={labelFor}>
                    {label}
                  </label>
                </span>
              </div>
            </div>
          )}
          {inputGroup && type === "password" && (
            <div className="col-12 md:col-4">
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">
                  <i className={inputGroupIcon}></i>
                </span>
                <span className="p-float-label">
                  <Password
                    id={id}
                    name={name}
                    className={`${
                      required && !value?.length && "border-red-500"
                    } w-${width}`}
                    disabled={disabled}
                    value={value == null ? "" : value}
                    onChange={onChange}
                    required={required}
                    onBlur={onBlur}
                    onClick={onClick}
                    feedback={false}
                    inputClassName={` ${
                      required && !value?.length && "border-red-500"
                    } w-${width}`}
                  />
                  <label className="text-[#A2B3C4]" htmlFor={labelFor}>
                    {label}
                  </label>
                </span>
              </div>
            </div>
          )}
        </span>
      )}
      {type === "image" && (
        <>
          <div
            className={`flex flex-col w-full  border-2 border-dashed ${
              required && !imagePreview
                ? "border-red-500 hover:bg-gray-100 hover:border-gray-300"
                : "border-gray-400 hover:bg-gray-100 hover:border-gray-300"
            } rounded `}
          >
            {imagePreview ? (
              <div className="imageBox flex flex-col items-center justify-center">
                <img
                  className="object-cover  w-32 h-32"
                  src={imagePreview}
                  alt=""
                />
                <button
                  type="button"
                  onClick={setImagePreview}
                  className="text-red-600 text-center text-sm deleteButton px-2 py-2"
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            ) : (
              <label className="imageBox p-2">
                <div className="flex flex-col items-center justify-center pt-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                    {label}
                  </p>
                </div>
                <input
                  accept="image/*"
                  pattern="([^\\s]+(\\.(?i)(jpe?g|png|gif|bmp))$)"
                  name={name}
                  id={id}
                  type="file"
                  className="opacity-0"
                  onChange={onChange}
                  onBlur={onBlur}
                  required={required}
                />
              </label>
            )}
          </div>
        </>
      )}

      {type === "file" && (
        <>
          <div
            className={`flex flex-col w-full  border border-solid ${
              required && !filePreview
                ? "border-red-400 hover:bg-red-100 hover:border-red-300 "
                : "border-gray-400 hover:bg-gray-100 hover:border-gray-300"
            } rounded-lg `}
          >
            <label
              className={`imageBox p-${fileUploadPadding || "2"} h-${height}`}
            >
              <div
                className={`flex items-center justify-center pt-${
                  padding || "7"
                } gap-2`}
              >
                <MdOutlineFilePresent className="text-3xl  font-light text-center" />
                <p className="p- text-md tracking-wider text-gray-600 group-hover:text-gray-600 bg-cyan-400 rounded-md">
                  Attach File
                </p>
              </div>
              <input
                name={name}
                id={id}
                type="file"
                className="opacity-0"
                onChange={onChange}
                onBlur={onBlur}
                multiple
                required={required}
                accept={accept}
              />
            </label>
          </div>
        </>
      )}
      {type === "file2" && (
        <>
          <div
            className={`flex flex-col w-full  border border-solid ${
              required && !filePreview
                ? "border-red-400 hover:bg-red-100 hover:border-red-300 "
                : "border-gray-400 hover:bg-gray-100 hover:border-gray-300"
            } rounded-lg `}
          >
            <label className={`imageBox h-12 p-${fileUploadPadding || "2"} `}>
              <div className="flex items-center justify-center pt-1 gap-2">
                <MdOutlineFilePresent className="text-3xl  font-light " />
                <p className="p-1 text-md tracking-wider text-gray-600 group-hover:text-gray-600 bg-cyan-400 rounded-md">
                  Attach File
                </p>
              </div>
              <input
                name={name}
                id={id}
                type="file"
                className="opacity-0"
                onChange={onChange}
                onBlur={onBlur}
                multiple
                required={required}
                accept={accept}
              />
            </label>
          </div>
        </>
      )}
      {type === "pickList" && (
        <div className="picklist-demo">
          <div className="card">
            <PickList
              source={picklistSourceValue}
              target={picklistTargetValue}
              sourceHeader={sourceHeader}
              targetHeader={targetHeader}
              itemTemplate={(item) => <div>{item.name}</div>}
              onChange={(e) => {
                !onChange ? setPicklistSourceValue(e.source) : onChange(e);
                !onChange ? setPicklistTargetValue(e.target) : onChange(e);
              }}
              sourceStyle={{ height: "342px" }}
              targetStyle={{ height: "342px" }}
              showTargetControls={false}
              showSourceControls={false}
              showSourceFilter
              filterBy="name"
              sourceFilterPlaceholder="Search"
              targetFilterPlaceholder="Search"
              {...rest}
            ></PickList>
          </div>
        </div>
      )}
      {type === "radio" && (
        <>
          <div className="p-radiobutton">
            {radioBtnmap.map(({ label, value, checked, onChange }) => (
              <div className="flex items-center gap-2">
                <RadioButton
                  inputId={id}
                  name={name}
                  value={value}
                  checked={checked}
                  onChange={onChange}
                  className="ml-2"
                />
                <label htmlFor={labelFor} className={`p-radiobutton-label`}>
                  {label}
                </label>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};
