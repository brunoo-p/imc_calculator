import React from 'react';
import styled from 'styled-components';

const Container = styled.aside`

    .signing, .error, .success {
        display: flex;
        justify-content: center;
        margin: 1rem 0;
        border-radius: 8px;
        padding: 1rem;
    }
    .success {
        background: ${({ theme }) => theme.badgeMessage.success.background};
        color: ${({ theme }) => theme.badgeMessage.success.color};
    }

    .error{
        background: ${({ theme }) => theme.badgeMessage.error.background};
        color: ${({ theme }) => theme.badgeMessage.error.color};
    }

    .signing{
        background: ${({ theme }) => theme.badgeMessage.signing.background};
        color: ${({ theme }) => theme.badgeMessage.signing};

    }

`;

type Props = {
    className: string;
    message: string;
}
const Badge = ({ className, message } : Props) => (
        <Container>
            <div className={className} data-testid="messageRequest"> {message} </div>
        </Container>
    );

export default Badge;
