import React, { useState } from "react";
import cb036119003 from '../assets/CK_cb036119003.jpg';

const Symptom = () => {
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
      detail: "1.코 간지러움 시작"      
    },
    {
      id: 2,
      title: "2단계",
      detail: "2.몸이 으실으실되지며 기침이 많아짐"     
    },
    {
      id: 3,
      title: "3단계",
      detail: "3.변비가 생기며 목도 많이 간지러움"      
    },
    {
      id: 4,
      title: "4단계",
      detail: "4.몸이 추워지며 잠이 잘안오는 증상"     
    }
  ];
  // 기존 symptoms 배열은 유지

  const medicines = [
    {
      id: 1,
      name: "타이레놀",
      type: "해열/진통제",
      description: "열과 통증을 가라앉히는데 효과적",
      caution: "하루 4000mg 이하로 복용"
    },
    {
      id: 2,
      name: "판콜에이",
      type: "종합감기약",
      description: "기침, 콧물, 두통 등 전반적인 감기 증상 완화",
      caution: "졸음이 올 수 있으니 운전 주의"
    },
    {
      id: 3,
      name: "신신파스아렉스",
      type: "외용제",
      description: "근육통과 몸살 증상 완화",
      caution: "상처 난 곳에는 사용 금지"
    },
    {
      id: 4,
      name: "베아제",
      type: "소화제",
      description: "감기약 복용 시 胃(위) 보호",
      caution: "공복에 복용 시 위장 자극 가능"
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
      console.log("검색어를 입력해주세요!");
      alert("검색어를 입력해주세요!");
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
    <img src={cb036119003} alt="sickimg1" />
    <div className="ml-8 border border-black bg-orange-400 w-[900px]">    
    <center><p className="mt-8 text-blue-900">#감기&심한몸살 관련 질환</p><br/>
    1.가볍게 코가 간지럽거나 기침이 조금씩나온다!<br/>
    2.몸이 으실으실 추워지면서 기침이 많아지기 시작한다!<br/>
    3.변비가 생기면서 목도 많이 간지러워진다!<br/>
    4.약간 몸이 엄청 추워지며 잠이 잘안온다?! 약사를 보거나 병원내방을 해야한다!
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
                ※Take medicine with water, not on an empty stomach!
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
      ※tive for colds. Please consult your physician before use.
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
      ※항생제는 감기에 효과가 없으며, 의사의 처방 없이 복용하지 마세요!
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
      ※열과 몸살이 심해진다면 반드시 medibook에서 약품을 찾아보세요!
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
            placeholder="ex)타이레놀" 
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
      *감기약이 필요하거나 몸살 초기엔 딱이니 어서 처방하세요!
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

export default Symptom;
