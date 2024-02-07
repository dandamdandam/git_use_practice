# 깃 사용 연습 용 레포지토리

- 운영체제는 window, code editor는 visual studio code를 기준으로 설명합니다.
- CLI(Command line interface)를 통해 깃을 사용하는 방법 위주로 실습합니다. GUI(Graphical user interface) 방식이 익숙하다면 git GUL 프로그램(ex: Git desktop, SourceTree, GitKraken 등)을 추천합니다.

## 깃 세팅

- 깃을 아예 사용해 본 적 없는 사람을 위한 챕터
- [참고](https://git-scm.com/video/get-going)

1. [github](https://github.com/) 가입
2. 깃 설치 -> [설치 사이트](https://git-scm.com/downloads) 방문
3. 사용자 정보(github에 로그인할 때 쓴 유저네임, 이메일) 등록
    <br/> a. git bash 창 또는 cmd 창 열기 (git bash를 사용할 시 `ctrl + v`를 사용하면 오류가 나니 주의)
    <br/> b. `git config --global user.name "{여기에 깃 username 작성}"`
    <br/> c. `git config --global user.email "{여기에 이메일 작성}"`
4. 3번 확인
    <br/> `git config --list`
    <br/> user.name과 user.email에 정보가 제대로 들어갔는지 확인.
5. 완료!

## 깃 사용 실습

- 해당 레포지토리(프로젝트)를 클론(복제)해 사용해보는 실습.

### 레포지토리 클론

<img width="688" alt="image" src="https://github.com/dandamdandam/git_use_practice/assets/102032954/9128a8d5-fc62-4491-a321-eaa36265343d">

1. 위 사진이 가르키는 레포지토리 링크를 복사해옵니다. -> URL이라고 하겠습니다.
2. 프로젝트를 저장하고 싶은 경로로 이동한 후 오른쪽 클릭, 터미널 또는 git bash를 열어줍니다.
3. `git clone "{여기에 URL 입력}"`
4. 3번 입력 후 엔터를 누르면 github repository의 이름과 같은 이름의 폴더가 해당경로에 하나 생깁니다. 해당 폴더를 vsc로 열어줍시다.
5. vsc에서 새 터미널을 열어줍니다. 앞으로 git 관련 명령어는 여기서 실행합니다.

### commit 해보기

1. `git status`를 실행해봅시다. 이 명령어는 git에 올라와 있지 않은 파일 목록을 보여주는 명령어로, 클론 후 아무 파일도 추가하지 않은 상태라면 다음과 같은 출력문이 뜰 것 입니다.
```
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```
2. 파일을 추가해봅시다. 어떤 이름이든, 어떤 내용이든 괜찮습니다.
3. 다시 `git status`를 실행하면 다음과 같은 출력문이 뜹니다. git에 올려와 있지 않은 새 파일이 추가되었다는 뜻입니다.
```
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        thisIsTheFileName.java
```
4. `git add {파일이름}` 또는 `git add .`로 해당 파일을 staged 상태로 바꿀 수 있습니다.
```
git status 출력문>>

On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   thisIsTheFileName.java
```
5. git에 완전히 올리기 위해선 commit을 해야 합니다. `git commit -m "{커밋 메세지. 현재 변경사항에 라벨을 붙이는 용도입니다. 아무거나 적어주세요}"`. 실행후에 다시 git status를 보면, 1과같은 메세지가 뜹니다. 성공입니다.
6. 이 시점에서 github 링크로 들어가면 변화가 없을 것 입니다. github에 올라와 있는 내용은 원격저장소의 내용이고, 우리가 지금까지 한 것은 로컬저장소에 변경사항을 commit하는 작업이였기 때문입니다. 원격저장소에 로컬저장소의 내용을 올리기 위해서는 `git push`를 사용해야합니다.

- 결론적으로 원격저장소에 변경사항을 올리기 위해서는 로컬저장소의 내용을 push 해야합니다. 로컬 저장소의 내용은 `git add` 명령어로 파일을 staged 상태로 만든 후에, `git commit`명령어를 실행해야합니다.
> 파일 변경 -> `git add .` -> `git commit -m {커밋메세지}` -> `git push`
