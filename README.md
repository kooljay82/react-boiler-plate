<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#commands">Commands</a></li>
        <li><a href="#installation">Warnings</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
  
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

React 보일러 플레이트

재직중인 회사에서 기술 스택을 통일하기 위해서 제작하였습니다. cra의 간편함을 알고 있지만 향후 우리의 개발 환경을 자유롭게 수정하기 위해서 의미없을 수도 있는 보일러 플레이트를 제작하였습니다. 오류가 발생하면 리포트와 PR 감사히 받겠습니다.

### Built With

- React, TypeScript, Webpack, Babel - 개발 환경 구성
- testing-library/react, jest, jest-dom - 테스트 환경 구성
- ESLint, Prettier - 문법 및 포맷 체크

<!-- GETTING STARTED -->

## Getting Started

보일러 플레이트 이용을 위해서는 버전 확인이 필요합니다.

### Prerequisites

\*_해당 프로젝트는 yarn을 사용하지 않습니다._

개발 환경 버전을 맞춥니다. node와 npm 버전은 아래와 같습니다.

- node

  ```sh
  node -v v23.10.0
  ```

- npm
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
3. After installation

반드시 .git 디렉토리 제거 후 `git init` 하세요.

<!-- COMMANDS -->

### Commands

```
  "start": "webpack serve --env development",
  "report": "webpack --env production && webpack-bundle-analyzer --port=8888 ./dist/bundle-stats.json",
  "build:dev": "webpack --env development",
  "build:stg": "webpack --env staging",
  "build": "webpack --env production",
  "lint": "eslint \"src/**/*.{js,jsx}\"",
  "pret": "prettier --write \"src/\"",
  "pret:watch": "onchange \"src/\" -- prettier --write --ignore-unknown {{changed}}",
  "test:dev": "jest --watch",
  "test:unit": "jest"
```

<!-- WARNINGS -->

### Warnings

```
  npm run start -> https://localhost:8080
```

본 프로젝트의 webpack dev server는 `https: true`가 기본으로 설정되어 있습니다. `http`로 이용하기 위해서는 `webpack.config.js`의 해당 옵션을 수정해서 사용하세요.

<!-- CONTRIBUTING -->

## Contributing

누구나 컨트리뷰터가 될수 있습니다. 다운스트림으로 fork 하신 후 PR 부탁드립니다.
