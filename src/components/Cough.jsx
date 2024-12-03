import React, { useState } from "react";
import cb2000003911 from '../assets/CK_cb2000003911.jpg';

const Cough = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(true);  // 보이기/숨기기 상태
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [visibleMedicines, setVisibleMedicines] = useState({}); // 각 약품의 표시 상태를 관리

  const [showDetails1, setShowDetails1] = useState(true);
  const [showDetails2, setShowDetails2] = useState(true);
  const [showDetails3, setShowDetails3] = useState(true);
  const [showDetails4, setShowDetails4] = useState(true);  
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);


  const symptoms = [
    {
      id: 1,
      title: "1단계",
      detail: "1.목 뒤가 간지럽고 건조하며, 가벼운 마른기침이 시작됨"      
    },
    {
      id: 2,
      title: "2단계",
      detail: "2.기침이 잦아지고 목이 따갑거나 쉰 목소리가 나타남"     
    },
    {
      id: 3,
      title: "3단계",
      detail: "3.밤에 기침이 심해지고 가슴이 답답하며 수면장애가 발생"      
    },
    {
      id: 4,
      title: "4단계",
      detail: "4.지속적인 기침으로 인한 피로감, 두통, 근육통이 동반됨"     
    }
  ];
  // 기존 symptoms 배열은 유지

  const medicines = [
    {
      id: 1,
      name: "레보투스",
      type: "진해거담제",
      description: "기침을 가라앉히고 가래를 묽게 하는데 효과적",
      caution: "임산부, 수유부는 복용 전 의사와 상담 필요"
    },
    {
      id: 2,
      name: "코데날시럽",
      type: "기침억제제",
      description: "마른기침을 진정시키고 기도 자극을 감소",
      caution: "운전 및 기계조작 시 주의, 졸음 유발 가능"
    },
    {
      id: 3,
      name: "액티피드",
      type: "항히스타민제",
      description: "알레르기성 기침 증상 완화와 가래 감소",
      caution: "복용 후 졸음이 올 수 있으며 장시간 운전 금지"
    },
    {
      id: 4,
      name: "뮤코졸정",
      type: "점액용해제",
      description: "기도 점액을 묽게 하여 기침 증상 완화",
      caution: "위장장애가 있는 경우 식후 복용 권장"
    }
  ];
  
  const handleTabClick = (index) => {
    setActiveTab(index);
    // 모든 상태를 false로 초기화
    setShowDetails1(false);
    setShowDetails2(false);
    setShowDetails3(false);
    setShowDetails4(false);
    
    // 클릭한 탭에 해당하는 상태만 true로 설정
    if (index === 0) setShowDetails1(true);
    if (index === 1) setShowDetails2(true);
    if (index === 2) setShowDetails3(true);
    if (index === 3) setShowDetails4(true);
  };
  
  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  // 검색 버튼 클릭 처리
  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      setIsSearching(false);
      console.log("약품검색명을 입력해주세요!");
      alert("약품검색명을 입력해주세요!");
      return;
    }

    const results = medicines.filter(medicine => 
      medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setSearchResults(results);
    setIsSearching(true);
  };
  

  /*const handleMedicineClick = () => {
    setShowDetails(true);  // true면 false로, false면 true로 변경
  };*/

  //console.log(showDetails);
   

  return (<div>     
    <center><h1><p className="mt-8 -ml-[1200px] text-lg rounded"><b>대표증상</b></p></h1></center>
    <div className="flex mt-8 ml-[300px] h-[220px]">
    <img src={cb2000003911} alt="sickimg1" />
    <div className="ml-8 border border-black bg-orange-600 w-[900px]">    
    <center><p className="mt-8 text-blue-900">#마른기침 관련 질환</p><br/>
    1.목 뒤가 간지럽고 건조하며, 가벼운 마른기침이 시작됨!<br/>
    2.기침이 잦아지고 목이 따갑거나 쉰 목소리가 나타남!<br/>
    3.밤에 기침이 심해지고 가슴이 답답하며 수면장애가 발생!<br/>
    4.지속적인 기침으로 인한 피로감, 두통, 근육통이 동반됨!
    </center>    
    </div>
    </div>  
    <br/>     
    <div className="tabs">
  <div className="tab-list">
  <p className="flex ml-[300px]">
    {symptoms.map((symptom, index) => (
      <button
        key={symptom.id}
        className={`px-4 py-2 ${
          activeTab === index
            ? "border-b-2 border-blue-500 text-blue-500 border border-blue-500 w-[190px] h-[70px]"
            : "text-gray-500 hover:text-gray-700 border border-black w-[190px] h-[70px]"
        }`}
        onClick={() => handleTabClick(index)}
      >
        {symptom.detail}
      </button>
    ))}
    </p>
  </div>
  
  <div className="tab-content">
    {symptoms.map((symptom, index) => (
      activeTab === index && (
        <div key={symptom.id} className="tab-panel">
           {showDetails1 && activeTab === 0 && (
          <div className="flex ml-[300px] border border-black bg-orange-400 w-[1150px] h-[450px] justify-center items-center h-full">   
            <h4 className="text-2xl font-bold text-center mb-6">1.추천 약품</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">     
            {medicines.map((medicine) => (      
                 <div key={medicine.id} 
                 className={`
                   border p-4 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer bg-blue-50 border-blue-500                    
                 `}                
               >               
                    <>
                    <h3 className="text-xl font-bold text-blue-600">{medicine.name}</h3>
                    <p className="text-sm text-gray-500">{medicine.type}</p>
                    <p className="mt-2">{medicine.description}</p>
                    <p className="mt-2 text-purple-500 text-sm">⚠️ {medicine.caution}</p>
                  </>               
                </div>      
                ))}    
              <p className="justify-center items-center relative col-span-2">
                ※Please stop dry coughing!
              </p>
            </div>
          </div>
           )}
           {showDetails2 && activeTab === 1 && (
  <div className="flex ml-[300px] border border-black bg-orange-400 w-[1150px] h-[450px] justify-center items-center h-full bg-orange-500">   
  <h4 className="text-2xl font-bold text-center mb-6">2.추 천 약품</h4>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">  
  {medicines.map((medicine) => (      
                 <div key={medicine.id} 
                 className={`
                   border p-4 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer bg-blue-50 border-blue-500                    
                 `}                
               >               
                    <>
                    <h3 className="text-xl font-bold text-blue-600">{medicine.name}</h3>
                    <p className="text-sm text-gray-500">{medicine.type}</p>
                    <p className="mt-2">{medicine.description}</p>
                    <p className="mt-2 text-purple-500 text-sm">⚠️ {medicine.caution}</p>
                  </>               
                </div>      
                ))}    
    <p className="justify-center items-center relative col-span-2">
      ※please medibook에서 약품을 찾아보세요!
    </p>
  </div>
</div>
)}
{showDetails3 && activeTab === 2 && (
  <div className="flex ml-[300px] border border-black bg-orange-400 w-[1150px] h-[450px] justify-center items-center h-full">   
  <h4 className="text-2xl font-bold text-center mb-6">3.추천약품</h4>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">    
  {medicines.map((medicine) => (      
                 <div key={medicine.id} 
                 className={`
                   border p-4 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer bg-blue-50 border-blue-500                    
                 `}                
               >               
                    <>
                    <h3 className="text-xl font-bold text-blue-600">{medicine.name}</h3>
                    <p className="text-sm text-gray-500">{medicine.type}</p>
                    <p className="mt-2">{medicine.description}</p>
                    <p className="mt-2 text-purple-500 text-sm">⚠️ {medicine.caution}</p>
                  </>               
                </div>      
                ))}    
    <p className="justify-center items-center relative col-span-2">
      ※에헤이~ medibook에서 약품이 필요합니다!
    </p>
  </div>
</div>
)}
{showDetails4 && activeTab === 3 && (
  <div className="bg-orange-700 flex ml-[300px] border border-black bg-orange-400 w-[1150px] h-[450px] justify-center items-center h-full">   
  <h4 className="text-2xl font-bold text-center mb-6">4.추천약  품</h4>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">   
  {medicines.map((medicine) => (      
                 <div key={medicine.id} 
                 className={`
                   border p-4 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer bg-blue-50 border-blue-500                    
                 `}                
               >               
                    <>
                    <h3 className="text-xl font-bold text-blue-600">{medicine.name}</h3>
                    <p className="text-sm text-gray-500">{medicine.type}</p>
                    <p className="mt-2">{medicine.description}</p>
                    <p className="mt-2 text-purple-500 text-sm">⚠️ {medicine.caution}</p>
                  </>               
                </div>      
                ))}    
    <p className="justify-center items-center relative col-span-2">
      ※살려줘 medibook에서 약품을 찾아보세요!
    </p>
  </div>
</div>
)}
        </div>
      )
    ))}
  </div>
</div>
   <br/>      
          <div className="ml-[300px] border border-black w-[250px] h-[100px] mt-6 text-center text-sm text-gray-500">
            <p className="text-base font-black">약리스트</p>
            <p className="mt-[20px] text-base">
          <input 
            type="text" 
            placeholder="ex)레보투스" 
            value={searchTerm}
            onChange={handleSearchInput}
          />
          &nbsp;
          <button 
            onClick={handleSearch}>
            검색
          </button>
        </p>               
          </div><br/>  
          {isSearching && (
        <div className="flex ml-[300px] border border-black bg-orange-400 w-[1150px] h-[450px] justify-center items-center h-full mt-6">   
          <h4 className="text-2xl font-bold text-center mb-6">검색 결과&nbsp;:&nbsp;</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">     
            {searchResults.map((medicine) => (      
              <div 
                key={medicine.id} 
                className="border p-4 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer bg-blue-50 border-blue-500"                
              >               
                <h3 className="text-xl font-bold text-blue-600">{medicine.name}</h3>
                <p className="text-sm text-gray-500">{medicine.type}</p>
                <p className="mt-2">{medicine.description}</p>
                <p className="mt-2 text-purple-500 text-sm">⚠️ {medicine.caution}</p><br/>                
              </div>      
            ))}       
            <p className="justify-center items-center relative col-span-2">
      *마른기침 초기엔 딱이니 어서 처방하세요!
    </p>     
            {searchResults.length === 0 && (
              <p className="col-span-2 text-center text-gray-500">
                검색 결과가 없습니다.
              </p>
            )}
          </div>
        </div>
      )}         
    </div>);   
};

export default Cough;
