import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetMediInfoData } from "../../redux/slices/medicineSlice";

function Medidetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const getMediInfoData = useSelector(
    (state) => state.medicine.getMediInfoData
  );
  const [medicineData, setMedicineData] = useState({
    제품명: "",
    주성분: "",
    효능: "",
    사용법: "",
    부작용: "",
    이미지URL: "",
  });
  const user = useSelector((state) => state.login.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        await dispatch(fetchGetMediInfoData());
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (getMediInfoData && Array.isArray(getMediInfoData)) {
      const selectedMedicine = getMediInfoData.find(
        (item) => item.아이디 === parseInt(id)
      );
      if (selectedMedicine) {
        setMedicineData({
          제품명: selectedMedicine.제품명,
          주성분: selectedMedicine.주성분,
          효능: selectedMedicine.효능,
          사용법: selectedMedicine.사용법,
          부작용: selectedMedicine.이상반응,
          이미지URL:
            selectedMedicine.이미지URL || "/default-medicine-image.png",
        });

        if (user) {
          const viewedMedicines = JSON.parse(
            localStorage.getItem(`viewedMedicines_${user.userId}`) || "[]"
          );

          const medicineInfo = {
            id: selectedMedicine.아이디,
            name: selectedMedicine.제품명,
            main_ingredient: selectedMedicine.주성분,
            efficacy: selectedMedicine.효능,
            image: selectedMedicine.이미지URL || "/defaul t-medicine-image.png",
            viewedAt: new Date().toISOString(),
          };

          const updatedMedicines = [
            medicineInfo,
            ...viewedMedicines.filter((item) => item.id !== medicineInfo.id),
          ];

          localStorage.setItem(
            `viewedMedicines_${user.userId}`,
            JSON.stringify(updatedMedicines)
          );
        }
      }
    }
  }, [getMediInfoData, id, user]);

  if (isLoading) return <div className="text-center py-8">로딩 중...</div>;
  if (error)
    return <div className="text-center py-8 text-red-500">에러: {error}</div>;
  if (!getMediInfoData || !Array.isArray(getMediInfoData)) {
    return (
      <div className="text-center py-8">
        데이터를 불러오는데 문제가 발생했습니다.
      </div>
    );
  }

  return (
    <div className="flex w-full justify-center my-12 bg-white">
      <div className="container">
        <div className="wrapper medi_detail flex flex-col gap-5">
          <div className="img-name-ingre-box flex gap-4">
            <div className="img-box border border-slate-500 w-[150px] h-[150px]">
              <img
                src={medicineData.이미지URL}
                alt={medicineData.제품명}
                onError={(e) => {
                  e.target.src = "/default-medicine-image.png";
                  e.target.onerror = null;
                }}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="name-ingre-box flex flex-col">
              <p className="description">제품명</p>
              <p className="medi-name p-2 text-xl">{medicineData.제품명}</p>
              <p className="description">주성분</p>
              <p className="ingre p-2 text-md">{medicineData.주성분}</p>
            </div>
          </div>
          <div className="medi-detail flex flex-col gap-4">
            <p className="description">효능</p>
            <p>{medicineData.효능}</p>
            <p className="description">사용법</p>
            <p>{medicineData.사용법}</p>
            <p className="description">부작용</p>
            <p>{medicineData.부작용}</p>
            <p className="description">추가 정보</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Medidetail;
