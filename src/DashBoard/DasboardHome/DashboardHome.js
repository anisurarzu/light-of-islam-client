import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { NewAppContext } from "../../App";
import Card from "../../components/Card/Card";
import Card2 from "../../components/Card2/Card2";
import Loader from "../../components/Loader/Loader";
import useAuth from "../../hooks/useAuth";
import "./DashboardHome.css";
import Card3 from "../../components/Card3/Card3";

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

          setDepositInfo(data);
          setDepositInfo2(data);
        });
    } catch (err) {
      setLoading(false);
      toast.error(err);
    }
  }, []);
  // calculate deposit amount

  // profitable amount

  const amountCal = (status) => {
    const amountList = [];
    dmfBalance?.map((data) => {
      if (data?.status === status) {
        amountList?.push(data?.serviceCost);
      }
    });

    const finalAmount =
      amountList.length > 0 &&
      amountList?.reduce((prev, curr) => parseFloat(prev) + parseFloat(curr));
    return finalAmount;
  };
  const orderCal = (status) => {
    const amountList = [];
    dmfBalance?.map((data) => {
      if (data?.status === status) {
        amountList?.push(data?.serviceCost);
      }
    });

    return amountList?.length;
  };

  const totalProfitableAmount = amountCal("Completed");
  const totalRefundableAmount = amountCal("Refund");
  const totalAcceptedAmount = amountCal("Accepted");
  const totalRefundableOrder = orderCal("Refund");
  const totalDeletedOrder = orderCal("Remove");
  const totalCompletedOrder = orderCal("Completed");

  return (
    <div className="">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 gap-4 mt-2">
            <Card3
              title={"Total Order"}
              amount={dmfBalance?.length}
              amount2={1}
              totalRefundableOrder={totalRefundableOrder}
              totalDeletedOrder={totalDeletedOrder}
              totalCompletedOrder={totalCompletedOrder}
            />
            <Card
              title={"Accepted Order Amount"}
              amount={totalAcceptedAmount}
            />
            <Card
              title={"Total Refund Amount"}
              amount={totalRefundableAmount}
            />

            <div></div>
          </div>
          <Card2 amount={totalProfitableAmount} />
        </div>
      )}
    </div>
  );
};

export default DashboardHome;
