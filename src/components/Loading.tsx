import Spinner from "../assets/Spinner-1s-200px.svg";
import styled from 'styled-components';

export const Background = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const LoadingText = styled.div`
    font: 1rem 'Noto Sans KR';
    text-align: center;
`;
function Loading(){
    return (
        <>
            <Background>
                <img src={Spinner} alt="로딩중" width="10%" />
                <LoadingText>잠시만 기다려 주세요.</LoadingText>
            </Background>
        </>
    )
}
export default Loading;