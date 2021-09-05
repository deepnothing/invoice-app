import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { deleteDBInvoice } from '../APIs/deleteInvoice';
import { getInvoices } from '../APIs/getInvoices';

import { InvoiceDetailsContainer, RowWrap, ColumnWrap, StatusBox, Delete, } from '../styles';
export const ExpandedCard = (props) => {
    return (
        <>
            <InvoiceDetailsContainer>
                <div onClick={() => props.goback(true)}>Go Back</div>
                <RowWrap>
                    <RowWrap style={{ alignItems: 'center', }}>
                        <div>Status</div>
                        <StatusBox status={props.data[props.cardId].status}>
                            &nbsp;{props.data[props.cardId].status.charAt(0).toUpperCase() + props.data[props.cardId].status.slice(1)}
                        </StatusBox>
                    </RowWrap>

                    <RowWrap>
                        <Delete onClick={() => {
                            deleteDBInvoice(props.data[props.cardId].id)
                            props.goback(true);

                        }}>delete</Delete>

                    </RowWrap>
                </RowWrap>
            </InvoiceDetailsContainer>
            <div>
                <RowWrap style={{

                    justifyContent: 'space-between'
                }
                }>
                    <ColumnWrap>
                        <strong>#{props.data[props.cardId].id}</strong>
                        <div>{props.data[props.cardId].description}</div>
                    </ColumnWrap>
                    <ColumnWrap>
                        <div>{props.data[props.cardId].senderaddressstreet}</div>
                        <div>{props.data[props.cardId].senderaddresscity}</div>
                        <div>{props.data[props.cardId].senderaddresspostCode}</div>
                        <div>{props.data[props.cardId].senderaddresscountry}</div>
                    </ColumnWrap>
                </RowWrap>
                <RowWrap
                    style={{

                        justifyContent: 'space-between'
                    }
                    }
                >
                    <ColumnWrap >
                        <div>Invoice Date</div>
                        <strong
                            style={{
                                marginBottom: '10px'
                            }}
                        >{moment(props.data[props.cardId].createdAt).format('Do MMM YYYY')}</strong>
                        <div>Payment Due</div>
                        <strong>{moment(props.data[props.cardId].paymentDue).format('Do MMM YYYY')}</strong>
                    </ColumnWrap>
                    <ColumnWrap>
                        <div>Bill To</div>
                        <strong>{props.data[props.cardId].clientName}</strong>
                        <div>{props.data[props.cardId].clientaddressstreet}</div>
                        <div>{props.data[props.cardId].clientaddresscity}</div>
                        <div>{props.data[props.cardId].clientaddresspostcode}</div>
                        <div>{props.data[props.cardId].clientaddresscountry}</div>
                    </ColumnWrap>
                    <ColumnWrap>
                        <div>Sent To</div>
                        <div>{props.data[props.cardId].clientemail}</div>
                    </ColumnWrap>
                </RowWrap>
                <RowWrap
                    style={{

                        justifyContent: 'space-between',
                        padding: '30px',
                    }}
                >
                    <ColumnWrap>
                        <div>Item Name</div>
                        <strong>{props.data[props.cardId].items0name}</strong>
                        <strong>{props.data[props.cardId].items1name}</strong>

                    </ColumnWrap>
                    <ColumnWrap>
                        <div>QTY</div>

                        <strong>{props.data[props.cardId].items0quantity}</strong>
                        <strong>{props.data[props.cardId].items1quantity}</strong>

                    </ColumnWrap>
                    <ColumnWrap>
                        <div>Price</div>

                        <strong>
                            {props.data[props.cardId].items0price ?
                                <span>&pound;</span> : ''}
                            {props.data[props.cardId].items0price}
                        </strong>
                        <strong>
                            {props.data[props.cardId].items1price ?
                                <span>&pound;</span> : ''}
                            {props.data[props.cardId].items1price}
                        </strong>


                    </ColumnWrap>
                    <ColumnWrap>
                        <div>Total</div>

                        <strong>{props.data[props.cardId].items0total}</strong>
                        <strong>{props.data[props.cardId].items1total}</strong>

                    </ColumnWrap>
                </RowWrap>
                <RowWrap
                    style={{
                        justifyContent: 'space-between',
                        background: 'black',
                        color: 'white',
                        padding: '30px',
                        borderBottomLeftRadius: '8px',
                        borderBottomRightRadius: '8px',

                    }}>
                    <div>Amount Due</div>
                    <strong>&pound;{props.data[props.cardId].total}</strong>
                </RowWrap>
            </div>
        </>
    )
}