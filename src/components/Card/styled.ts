import styled from "styled-components/native";

interface IcardProps {
    background: string;
}

export const Container = styled.View<IcardProps>`
    flex: 1;
    align-items: 'center';

    padding: 16px;
    margin: 16px;

    border-radius: 10px;

    background: ${props => props.background};
`

export const IconWrapper = styled.View`
    margin-bottom: 8px;
`

export const Title = styled.Text`
    font-family: 'Inter_800ExtraBold';
    font-size: 16px;
`

export const SubTitle = styled.Text`
    font-family: 'Inter_500Medium';
    font-size: 12px;
`