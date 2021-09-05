import React from 'react';
import PlusSign from '../assets/icon-plus.svg';
import { Dropdown } from 'react-bootstrap';

import { TopBar, ColumnWrap, Add, Plus, RowWrap, PlusButtonLabel, Title, CustomToggle } from '../styles';


export const Header = (props) => {
    return (
        <TopBar>
            <ColumnWrap>
                <Title>Invoices</Title>
                <span>there are {props.data.length} total invoices </span>
            </ColumnWrap>
            <RowWrap>
                <Dropdown>
                    <CustomToggle>
                        <Dropdown.Toggle id="dropdown-basic">
                            Filter by Status
                        </Dropdown.Toggle>
                    </CustomToggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={props.setPending}>Paid</Dropdown.Item>
                        <Dropdown.Item onClick={props.setPaid}>Pending</Dropdown.Item>
                        <Dropdown.Item onClick={props.setAll}>All</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Add onClick={props.toggleAddInvoice}>
                    <Plus>
                        <img src={PlusSign} alt="+" />
                    </Plus>
                    <PlusButtonLabel>
                        New Invoice
                    </PlusButtonLabel>
                </Add>
            </RowWrap>
        </TopBar>
    )
}