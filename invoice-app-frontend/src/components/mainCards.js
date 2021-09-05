import React from 'react'
import moment from 'moment'
import arrowRight from '../assets/icon-arrow-right.svg';


import { CardContainer, StatusBox, Expand, Card, BoldSpan, CardStack } from '../styles'

export const MainCards = (props) => {
    return (
        <CardContainer>
            {props.data.map((o) => {
                return (
                    <Card payStatus={o.status} payState={props.payState}>
                        <CardStack>
                            <span>#<strong>{o.id}</strong>&nbsp;</span>
                            <span>Due&nbsp;{moment(o.paymentdue).format('Do MMM YYYY')}</span>
                        </CardStack>

                        <CardStack>
                            <span>{o.clientname}&nbsp;</span>
                            <BoldSpan> &pound;{o.total}</BoldSpan>
                        </CardStack>
                        <StatusBox status={o.status}>
                            &nbsp;{o.status.charAt(0).toUpperCase() + o.status.slice(1)}
                        </StatusBox>
                        <Expand src={arrowRight} alt=">" onClick={() => { props.main(false); props.cardid((props.data.indexOf(o))); }} />
                    </Card>
                )
            })
            }
        </CardContainer>
    )
}