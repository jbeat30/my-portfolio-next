## Design UI
- [Tailblocks](https://tailblocks.cc/): Tailwind 기반 UI 블록
- [Lottie React](https://lottiereact.com/): Lottie 애니메이션 지원 라이브러리
    - [Lottie React GitHub](https://github.com/Gamote/lottie-react): GitHub 문서
- [Next Themes](https://github.com/pacocoursey/next-themes): 다크/라이트 모드 테마

## Database
- [Notion API](https://developers.notion.com/docs/getting-started): Notion 데이터베이스 사용

### 주요 내용
- **데이터베이스 조회 방법**:  
  `route.ts`에서 `GET()` 메서드를 구현할 때, Notion API의 특성상 목록 요청 메서드를 `POST`로 설정해야 함
-  Notion API가 데이터베이스 쿼리 요청을 `POST` 방식으로만 처리하기 때문임.

- **구현 방법**:
    1. **라우트 정의**: Next.js에서 API 라우트를 정의하고 `GET()` 메서드를 작성함
    2. **요청 메서드 변경**: API 내부에서 데이터를 가져올 때, 실제 요청은 `fetch` 함수를 사용하며, `POST` 메서드를 명시함
    3. **요청 헤더 설정**:
        - `Authorization`: Bearer 형식의 인증 토큰 필요
        - `Notion-Version`: API 버전 명시
        - `Content-Type` 및 `Accept`: JSON 형식 지정

- **환경 변수 사용**:
    - `NOTION_TOKEN`: API 요청에 필요한 인증 토큰
    - `NOTION_DATABASE_ID`: 쿼리할 데이터베이스의 고유 ID

- **참고 문서**:
    - [Retrieve a Database](https://developers.notion.com/reference/post-database-query): 데이터베이스 쿼리 요청에 대한 공식 문서.
