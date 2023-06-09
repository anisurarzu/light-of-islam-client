import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { NewAppContext } from "../../App";
import Card from "../../components/Card/Card";
import Card2 from "../../components/Card2/Card2";
import Loader from "../../components/Loader/Loader";
import useAuth from "../../hooks/useAuth";
import "./DashboardHome.css";

const DashboardHome = () => {
  const { userInfo } = useAuth();
  const { depositInfo, setDepositInfo } = useContext(NewAppContext);
  const [depositInfo2, setDepositInfo2] = useState([]);
  const [dmfBalance, setDmfBalance] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    /* https://yellow-sparkly-station.glitch.me/ */
    try {
      setLoading(true);
      fetch(`https://yellow-sparkly-station.glitch.me/deposit`)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setDmfBalance(data);
          // console.log("event data", data[0].email);
          if (userInfo?.payRole === "finance") {
            setDepositInfo(data);
            setDepositInfo2(data);
          } else {
            const filteredData = data?.filter(
              (d) => d?.email === userInfo?.email
            );
            setDepositInfo(filteredData);
            setDepositInfo2(filteredData);
          }
        });
    } catch (err) {
      setLoading(false);
      toast.error(err);
    }
  }, []);
  // calculate deposit amount

  const depositAmount = [];
  const dmfDepositAmount = [];

  depositInfo2?.map((data) => {
    if (data?.status === "Accepted") {
      depositAmount?.push(data?.depositAmount);
    }
  });
  dmfBalance?.map((data) => {
    if (data?.status === "Accepted") {
      dmfDepositAmount?.push(data?.depositAmount);
    }
  });

  const totalDeposit =
    depositAmount.length > 0 &&
    depositAmount?.reduce((prev, curr) => parseFloat(prev) + parseFloat(curr));
  const totalDmfDeposit =
    dmfDepositAmount.length > 0 &&
    dmfDepositAmount?.reduce(
      (prev, curr) => parseFloat(prev) + parseFloat(curr)
    );
  console.log("totalDmfDeposit", totalDmfDeposit);

  return (
    <div className="">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 gap-4 mt-2">
            <Card title={"My Current Balance"} amount={totalDeposit} />
            <Card title={"Project Budget"} />
            <Card title={"DMF Total Cost"} />

            <div></div>
          </div>
          <Card2 amount={totalDmfDeposit} />
        </div>
      )}
    </div>
  );
};

export default DashboardHome;
