# 강동보건소 리뉴얼 사이트 설명

1. ie7까지 크로스 브라우징 (html4, css1~2사용)<br>
2. 스킵 네비게이션<br>
3. ir 기법을 활용하여 스크린 리더기가 섹션의 내용을 읽을 수 있도록 하여 웹 접근성을 맞춤<br>
4. 역동적인 동작을 vanilla JS 만으로 구현 (슬라이드, 배너)<br>
5. ux/ui를 고려하여 자주 사용하는 메뉴등 배너 위치를 재조정함

**2020-01-06 수정**<br>
**작업 시간** : 5시간

**작업 내용** : 기존 제작 강동보건소 사이트 수정

**크로스 브라우징** : ie7+

**특이 사항**
1. js코드 재정리하여 불필요한 부분 삭제
2. class 시멘틱하게 재정리
3. html 필요없는 주석의 경우 제거

**깨달은 점**
1. ie7에서 script를 동작하게 하느라 시간을 많이 허비하였다 (getAttribute, classList등 동작하지 않음)<br>
   ㄴ className을 활용하여 ie7까지 맞춤

