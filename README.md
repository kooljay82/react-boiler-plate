# React TypeScript Boilerplate

## 📋 Overview

React + TypeScript 기반의 SPA 개발을 위한 보일러플레이트입니다.  
실무 환경에서 필요한 모든 도구들이 미리 세팅되어 있어, 초기 설정 없이 바로 개발을 시작할 수 있습니다.

### 🛠️ Tech Stack

| Category       | Technologies                                   |
|---------------|-----------------------------------------------|
| Core          | React 19, TypeScript                          |
| Routing       | React Router DOM                              |
| Styling       | Sass, CSS Modules, reset-css                  |
| Build Tools   | Webpack 5, Babel 7                            |
| Testing       | Jest, React Testing Library                   |
| Code Quality  | ESLint, Prettier                              |
| Development   | Webpack Dev Server, Hot Module Replacement    |

## 🚀 Getting Started

### Prerequisites

- Node.js v23.10.0 (nvm 사용 권장)
- npm 10.9.2

```bash
# nvm이 설치되어 있다면
nvm use
```

### Installation

1. Clone the repository
```bash
git clone https://github.com/kooljay82/react-boiler-plate.git
cd react-boiler-plate
```

2. Install dependencies
```bash
npm install
```

### Available Scripts

| Script        | Description                                   |
|--------------|-----------------------------------------------|
| `npm start`  | 개발 서버 실행 (webpack-dev-server)           |
| `npm build`  | 프로덕션 빌드 생성                            |
| `npm test`   | 테스트 실행 및 커버리지 리포트                |
| `npm lint`   | ESLint 검사 실행                             |
| `npm lint:fix` | ESLint 자동 수정                            |
| `npm format` | Prettier 코드 포맷팅                         |

## 📁 Project Structure

```
react-boiler-plate/
├── src/              # 소스 코드
├── public/           # 정적 파일
├── webpack/          # 웹팩 설정
│   ├── common.ts
│   ├── dev.ts
│   └── prod.ts
├── jest.config.ts    # Jest 설정
├── tsconfig.json     # TypeScript 설정
└── package.json      # 프로젝트 설정
```

## 🔧 Configuration

### TypeScript
- Strict mode enabled
- Path aliases configured (@/src)
- React JSX support

### Webpack
- Development & Production configurations
- Hot Module Replacement
- Asset optimization
- Source maps

### Testing
- Jest with TypeScript support
- React Testing Library
- Test coverage reporting

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
