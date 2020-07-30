# React_project

## react redux 프로젝트 구조

- 참고: [프로젝트 구조를 만드는데 10가지 팁](https://dev.to/chrisachard/tips-for-organizing-react-projects-191)
    0. react, redux는 정해진 구조가 없다. 정답이 없으니 그것으로 너무 스트레스 받지 않는것이 좋다.
    1. 진행중인 팀의 프로젝트 구조를 따르도록 하라
    2. components와 관련코드는 src, 그외 정적코드는 public
    3. 공유코드는 shared 또는 components
    4. 초기에 최적화하려고 하지 말자. 나중에 정리해도 전혀 문제 없다.
    5. 많은양의 페이지를 가지고 있다면, components -> pages, screens 디렉토리에 넣는다.(react native)
    6. export되고 있는 react component는 파일을 대문자로 한다. export되고 있다는 개발자들 간 약속이다.
    7. 절대경로를 사용하자. ../../pages/components -> /pages/components
    8. css는 보통 js파일과 함께 두도록 한다.
    9. helpers 또는 lib, util 디렉토리: global constants and helper functions를 가진 디렉토리
    10. redux를 사용한다면 redux 또는 ducks 디렉토리에 actions, reducers, etc.. 폴더를 생성한다.
- 참고: [프로젝트 구조 참조용](https://github.com/codica2/react-app-best-practice)

```
src/
├── state/        => represents redux
├── views/        => all react components
└── utilities/    => global constants and helper functions

ducks/
├── duck/
|   ├── actions.js
|   ├── reducers.js
|   ├── types.js
|   ├── utils.js
|   └── index.js
└── index.js

views/
├── routes/       => base router
├── components/   => feature-first components
├── pages/        => layouts, related to routes
├── styled/       => StyledComponents
└── UI/           => reusable components
```