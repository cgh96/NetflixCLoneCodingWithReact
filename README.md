# js로 작성한 Netflix clone coding 리액트로 이식하기.

## 사용 패키지
- react-router-dom, axios, styled-components

## 사용 디자인 패턴
- Presentational and Container Component Pattern
    - Presentational Component: 컴포넌트는 화면에 보여지는 것만 담당하는 컴포넌트다.
    - Container Component: 동작에 관한 것을 담당하는 컴포넌트다.

- 장점
    - 관심사를 분리할 수 있다.
    - 재사용성을 높일 수 있다.


## 새로 알게된 것 & 느낀점 & TroubleShooting.
- useEffect return
    - useEffect는 컴포넌트가 렌더링될 때마다 `sideEffect`를 발생하게 해주는 hook이다.
    - `sideEffect`에는 clean-up해야 하는 것과 그렇지 않은 것. 2가지로 나뉜다.
    - 여기서 `clean-up`해야 하는 경우의 

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
    <CarouselWrapperDiv direction={direction} onTransitionEnd={() => { handleTransitionEnd();  }} ref={carouselRef} >
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
