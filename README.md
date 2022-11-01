# js로 작성한 Netflix clone coding 리액트로 변환.

## 사용 패키지
- react-router-dom, axios, styled-components, react-helmet-async

## 새로 알게된 것
- useEffect return
    - useEffect는 컴포넌트가 렌더링될 때마다 `sideEffect`를 발생하게 해주는 hook이다.
    - `sideEffect`에는 clean-up해야 하는 것과 그렇지 않은 것. 2가지로 나뉜다.
    - 여기서 `clean-up`해야 하는 `sideEffect`를 return 부분에 넣어준다.
    ```
        useEffect( () => {
            //그렇지 않은 것.
            return //clean-up해야하는 것.
        }, []);
    ```

## Trouble Shooting

- carousel을 구현하는데 ontransitionend 발생 시, 깜빡임 발생.
    - 구글링을 해보니 handleTransitionend함수 내에서 useState를 사용하여 state가 변하였기 때문에 재렌더링 되는것으로 추측.
     ```
        <SlideButtonWrapper>
            <PrevButton onClick={LeftClick}>{'<'}</PrevButton>
            <CarouselWrapper 
                type={type} 
                direction={moveDirection}
                handleTransitionEnd={handleTransitionEnd}
                carouselRef={carouselRef} 
            ></CarouselWrapper>
            <NextButton onClick={RightClick}>{'>'}</NextButton>
        </SlideButtonWrapper>
    ```
    - handleTransition함수에서 현재 컴포넌트의 state이자 `CarouselWrapper`의 props인 `moveDirection`을 건드리기 때문에 `ontransitionend` 이후, `CarouselWrapper`가 리렌더링 되는 것 같다.
    - 이에 대한 해결책으로 `SlideButtonWrapper`를 통째로 다른 컴포넌트로 분리하여 `prevButton`, `NextButton`, `CarouselWrapper`에 대한 `SlideButtonWrapper`에서 `Carousel`을 자체 관리 해주도록 하고, props가 바뀌지 않으면 리렌더링 되지 않도록 `SlideButtonWrapper`에 React.memo를 사용하였다.
    - 하지만 여전히 깜빡임이 일어난다.
    ```
    <CarouselWrapperDiv 
        direction={direction}
        onTransitionEnd={handleTransitionEnd}
        ref={carouselRef}
    >
    ```
    - `direction` 값에 따라 Carousel이 움직이도록 했는데 `handleTransitionend`에서 여전히 `direction`값을 건드려서 그런 것 같다.
    - 결국 props에서 `direction`을 빼주고, `LeftClick`과 `RightClick`함수가 직접 `CarouselWrapper`의 style을 변경하도록 했다.
    ```
        const LeftClick = useCallback( () => {
            const container = carouselRef.current; 
            container.style.transform = `translateX(${1 * (100 / 20 * 6)}%)`;
            container.style.transitionDuration = '.8s';
            setMoveDirection(1);
        }, []);

        const RightClick = useCallback( () => {
            const container = carouselRef.current; 
            container.style.transform = `translateX(${-1 * (100 / 20 * 6)}%)`;
            container.style.transitionDuration = '.8s';
            setMoveDirection(-1);
        }, []);`
    ```
    - 해결되었다.
    - 아쉬운 점
        - 컴포넌트 분리가 깔끔하지 못하다.
        - 리액트의 특징을 살려서 구현하고 싶었는데, 그렇지 못한 것 같다.


## 느낀 점

> `presentational and container component pattern`을 사용하려했지만 나누다보니 어떤 기준으로 나누어야 하는지 헷갈리기 시작했다. 페이지를 어느 정도 리액트로 옮기고 난 후, 이 pattern에 대해 더 찾아본 바는 다음과 같다.<br><br>
    - presentational Components<br>
        1)html, css, presentational component만 사용 가능하다.<br>
        2)app에 대해 완전히 몰라야 한다. => 다른 app에서도 이 component를 사용할 수 있을지 스스로에게 물어보자.<br>
        3)presentational과 container 모두를 내부적으로 가질 수 있다.<br>
        4)작은 레고 블럭처럼 최대한 작게 만들어야 한다.<br>
        5)`state`를 가질 수 있지만 UI에 관련된 상태만 가질 수 있다.<br>
        6)가끔 완전히 다른 스타일을 불러오는 props를 받기도 한다.<br><br>
    - container Components<br>
        1)어떠한 동작을 할 것인가에 대해 책임진다.<br>
        2)절대로 DOM마크업 구조나 스타일을 가져서는 안된다.<br>
        3)presentational과 container 모두를 내부적으로 가질 수 있다.<br>
        4)주로 상태를 가지고 있다.<br>
        5)`sideEffect`를 만들 수 있다.<br>
        6)`props`를 자유롭게 받을 수 있다.<br><br>
    - 장점 <br>
        1)재사용성
        2)구조에 대한 이해가 쉽다.
        3)마크업 작업이 편하다.
    - 단점
        1)파일 수가 많아진다.
    - `Presentaional`과 `Container`를 나누는 기준
        Presentational은 stateless한 경향이 있고 Container는 stateful한 경향이 있으나, 절대적인 기준은 아니다.
        따라서 해당 컴포넌트가 state를 가지고 있냐 없냐의 기능적인 부분보다는 `어떤 목적을 가지고 있는지에 집중하는 것이 좋다`