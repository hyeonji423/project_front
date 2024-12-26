# Medibook Project
<div align="center" margin="20px 0">
  <br/><br/>
    <img alt="image" src="https://github.com/hyeonji423/project_front/blob/main/src/assets/medi_logo.png?raw=true">
  <br/><br/>
</div>


# Medibook Web Page v1.0
> **코드랩 아카데미 AICC 4기 2팀** <br/> **개발기간: 2024. 11. 20 ~ 2024. 12. 19**<br/>
## 배포 주소
> **프론트 서버** : [https://project-front-eight.vercel.app](https://project-front-eight.vercel.app)<br>
> **백엔드 서버** : [https://back.aicc4hyeonji.site](https://back.aicc4hyeonji.site)<br>
> **데이터베이스** : [https://107.21.20.220](https://107.21.20.220)<br>


## 웹개발팀 소개
> **김용주**, **유인규**, **이경욱**, **이영선**, **황현지**


## 프로젝트 소개
코로나 이후 건강에 대한 관심이 올라가게 되면서, 스스로 처방을 내리고 구매 및 복용을 하는 <셀프 메디케이션> 열풍이 불게 되었습니다. 이에따라 일반의약품, 건강기능식품 등을 손쉽게 구매하고 복용하는 것이 가능해져 약물 오남용이 우려되는 상황이 발생하게 되었습니다.

저희는 이런 상황을 개선하기 위해 약물의 효능, 성분, 부작용을 잘 파악하여 안전한 셀프 메디케이션을 할 수 있도록 돕는 가정용 약물 정보 및 관리 사이트 **메디북**을 개발하였습니다.


## 시작 가이드
### Requirements
For building and running the application you need:
- [Node.js v20.18.0](https://nodejs.org/ko/download/package-manager)
- [Npm 10.8.2](https://www.npmjs.com/package/npm/v/9.2.0)
- [Python 3.12.7](https://www.python.org/downloads/windows/)
### Installation
> **Frontend**
``` Frontend
$ git clone https://github.com/hyeonji423/project_front.git
$ cd project_front
```
```
$ npm install
$ npm start
```
> **Backend**
``` backend
$ git clone https://github.com/hyeonji423/team2backprod.git
$ cd team2backprod
```
```
$ npm install
$ npm run start
```

---
## Stacks💊
### Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Cursor](https://img.shields.io/badge/Cursor-000000?style=for-the-badge&logo=Cursor&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### Config
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white)
![pip](https://img.shields.io/badge/pip-3776AB?style=for-the-badge&logo=pip&logoColor=white)

### Development
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind](https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

### Communication
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white)
![GoogleDrive](https://img.shields.io/badge/GoogleDrive-4285F4?style=for-the-badge&logo=GoogleDrive&logoColor=white)


---
## 화면 구성 🖥
| <td style="background-color: #f0f0f0; text-align: center;">메인 페이지</td> | <td style="background-color: #f0f0f0; text-align: center;">증상 페이지</td> |
| :--------------------------------------------: | :--------------------------------: |
| <img width="329" src="https://github.com/hyeonji423/project_front/blob/main/src/assets/github/%EC%BA%A1%EC%B2%98.JPG"/> | <img width="329" src="https://github.com/hyeonji423/project_front/blob/main/src/assets/github/%EC%BA%A1%EC%B2%981.JPG"/> |
| <td style="background-color: #f0f0f0; text-align: center;">약품 페이지</td>   | <td style="background-color: #f0f0f0; text-align: center;">뉴스/정보 페이지</td>   |
| <img width="329" src="https://github.com/hyeonji423/project_front/blob/main/src/assets/github/%EC%BA%A1%EC%B2%982.JPG"/>   | <img width="329" src="https://github.com/hyeonji423/project_front/blob/main/src/assets/github/%EC%BA%A1%EC%B2%983.JPG"/> |
---


## 주요 기능 📦
### ⭐ 대표 증상 검색 기능
* **대표 증상 검색**: 사용자가 증상을 검색하면 해당 증상에 대한 설명과 치료방법을 제시 <br>
* **완화 성분 및 약품 추천**: 증상 완화에 도움이 되는 성분이 포함된 일반의약품 추천

### ⭐ 약품 정보 검색 기능
* **성분 또는 약품 검색**: 사용자가 약품 성분 또는 약품명을 검색하면 관련된 약품 목록 형식으로 제공 <br>
* **약품 정보 제공**: 약품 목록에는 주성분, 효능, 사용법 등 간략히 표시되며 약품을 클릭하면 해당 약품의 세부 정보를 상세 페이지로 제공

### ⭐ 약품 관리 기능
* **약품 정보 및 유효 기간 관리**: 사용자가 보유 중이거나 새로 구매한 약품 정보를 등록하면 필요 시 유효 기간 만료 7일 전 알림 서비스 제공

### ⭐ 건강 관련 뉴스 및 정보
* **건강 정보 제공**: 사용자에게 유익한 건강 관련 뉴스 기사와 정보를 제공


---
## 아키텍쳐
### 디렉토리 구조
```bash
├── Medibook
│
├── back : 백엔드
│   │
│   ├── database : 데이터베이스 관련 정보 폴더
│   │   ├── database.js : 기본 개발 환경(NODE_ENV = development)에서 database 설정 파일
│   │   └─── db.sql
│   │
│   ├── controllers
│   │   ├── AuthCtrl : post, update, delete (회원가입, 로그인, 비밀번호 변경, 회원탈퇴)
│   │   ├── MyMediCtrl : post, get, update, delete (약품 등록, 수정, 삭제, 목록)
│   │   ├── getMediInfoCtrl.js : 일반의약품 정보/검색
│   │   └── emailCtril.js : 이메일 인증/알림/건의사항 수신
│   │
│   ├── routes
│   │   ├── authRoutes.js
│   │   ├── myPageRoutes.js
│   │   ├── searchRoutes.js
│   │   └── emailRoutes.js
│   │
│   ├── vector_cache
│   │   ├── index.faiss
│   │   └── index.pkl
│   │
│   ├── data.json
│   ├── chat1.py
│   │
│   ├── index.js
│   │
│   ├── requirement.txt
│   │
│   ├── package.json
│   │
│   └── .env : 환경변수 파일(데이터베이스, 이메일, 오픈API 관련 정보)
│
│
│
└── front : 프론트엔드
    │
    ├── README.md
    │
    ├── public
    │   ├── mediImage
    │   │   └── 일반의약품.jpg
    │   ├── favicon.ico
    │   └── index.html
    │
    ├── src
    │   ├── assets
    │   │   ├── fonts
    │   │   ├── icons
    │   │   ├── healthimg
    │   │   ├── symptomimg
    │   │   └── medi_logo.png
    │   │
    │   ├── chatbot
    │   │   ├── ActionProvider.js
    │   │   ├── MessageParser.js
    │   │   └── Chatbot.js
    │   │
    │   ├── components
    │   │   ├── category : 헤더에 들어간 카테고리 관련 컴포넌트
    │   │   ├── chat : 챗봇 관련 컴포넌트
    │   │   ├── common : 공통 컴포넌트(헤더, 푸터)
    │   │   ├── details : 건강정보, 약품 관련 상세 페이지 컴포넌트
    │   │   ├── main : 메인 화면 컴포넌트
    │   │   └── mymedi : 마이페이지의 약품 관리 컴포넌트
    │   │
    │   ├── constants
    │   │   ├── healthdata.jsx
    │   │   └── symptomdata.jsx
    │   │
    │   ├── redux
    │   │   ├── slices
    │   │   └── store.js
    │   │
    │   ├── utils
    │   │   ├── apiUrl.js
    │   │   ├── jwtDecode.js
    │   │   └── requestMethods.js
    │   │
    │   ├── App.js
    │   ├── index.js
    │   ├── index.css
    │   └── setupProxy.js
    │
    ├── tailwind.config.js
    │
    ├── vercel.json
    │
    └── package.json

```
