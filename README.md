# REACT-BOILER-PLATE

## Overview

이 프로젝트는 React + TypeScript 기반의 SPA 개발을 빠르게 시작할 수 있도록 구성된 보일러플레이트입니다.  
Webpack, Babel, ESLint, Prettier, Jest 등 실무 환경에서 필요한 도구들이 기본적으로 세팅되어 있어  
번거로운 초기 설정 없이 개발에 집중할 수 있습니다.

### Built With

| 목적            | 스택                                           |
|-----------------|------------------------------------------------|
| UI Library    | React 19                                       |
| Type System     | TypeScript                                     |
| Routing         | React Router DOM                               |
| Styling         | Sass, CSS Modules, reset-css                   |
| Bundler         | Webpack 5, Babel 7                             |
| Testing         | Jest, Testing Library                          |
| Formatting      | ESLint, Prettier                               |

---


<!-- GETTING STARTED -->


## 🚀 Getting Started

시작 전, 아래 환경 설정을 반드시 먼저 확인하세요.

### Prerequisites

\*_해당 프로젝트는 yarn을 사용하지 않습니다._

개발 환경 관리를 위하여 버전 관리자는 nvm을 사용합니다. 반드시 install 전 node 버전을 맞춰주세요.

```sh
nvm use
```

node와 npm 버전은 아래와 같습니다.

```sh
node -v v23.10.0
```

```sh
npm 10.9.2
```

### Installation

1. Clone the repo

```sh
git clone https://github.com/kooljay82/react-boiler-plate.git
```

2. Install NPM packages

```sh
npm install
```

3. Scripts

```sh
"start": "cross-env webpack-dev-server --config webpack/webpack.dev.ts",  // 개발 서버 실행
"build": "cross-env webpack --config webpack/webpack.prod.ts",            // 프로덕션 빌드 생성
"test": "jest --coverage",                                                // 테스트 실행 및 커버리지 리포트
"lint": "eslint . --ext .ts,.tsx",                                        // ESLint 검사 실행
"lint:fix": "eslint . --ext .ts,.tsx --fix",                              // ESLint 자동 수정
"format": "prettier \"src/**/*.{ts,tsx}\" --write"                        // Prettier 코드 포맷팅
```
