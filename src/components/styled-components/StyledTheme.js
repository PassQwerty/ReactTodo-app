import style from 'styled-components'

const StyledButton = style.button`
    background-color: ${props => props.theme === 'Dark' ? '#222831' : '#A86666'};

    &:hover{
        background-color: ${props => props.theme === 'Dark' ? '#00ADB5' : '#BA5454'};
    }
`
const StyledH3 = style.h3`
    &:hover{
        color: ${props => props.theme === 'Dark' ? '#00ADB5' : '#BA5454'};
    }
`

const StyledInput = style.input`

    &::placeholder{
        color: ${props => props.theme === 'Dark' ? '#393E46' : '#BA5454'};
    }
`

const StyledDiv = style.div`
    background-color: ${props => props.theme === 'Dark' ? '#222831' : '#A86666'};
`

const Theme = {
    StyledButton,
    StyledH3,
    StyledInput,
    StyledDiv,
};

export default Theme;