import { ButtonContainer, ButtonVarinat } from "./Button.styles";

interface ButtonProps {
    variant?: ButtonVarinat;
}

export function Button({ variant = 'primary' }: ButtonProps) {
    return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}