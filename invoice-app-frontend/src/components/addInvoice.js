import React, { useCallback, useState } from 'react'
import { Offcanvas, Button } from 'react-bootstrap'
import { CanvasContainer, SubmitButton, ErrorMessage, RowWrap } from '../styles';
import { addDBInvoice } from '../APIs/addInvoice';

export const AddInvoice = (props) => {

    const [formState, setFormState] = useState(
        {
            id: 'AA',
            createdat: "2021-09-02",
            paymentdue: "2021-09-02",
            description: '',
            paymentterms: 1,
            clientemail: '',
            status: 'Paid',
            senderaddressstreet: '',
            senderaddresscity: '',
            senderaddresspostcode: '',
            senderaddresscountry: '',
            clientaddressstreet: '',
            clientaddresscity: '',
            clientaddresspostcode: '',
            clientaddresscountry: '',
            clientname: '',
            items0name: '',
            items0quantity: 1,
            items0price: 1,
            items0total: 1,
            total: 1,
            items1name: '',
            items1quantity: 1,
            items1price: 1,
            items1total: 1,
        }
    )

    const handleFormState = useCallback((fieldName, e) => {
        setFormState((c) => {
            return {
                ...c,
                [fieldName]: e
            };
        });
        console.log(formState)
    }, [formState]);

    return (
        <Offcanvas show={props.show} onHide={props.close} backdrop={false} style={{ zIndex: 0, width: '600px' }} >
            <CanvasContainer>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>New Invoice</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <form>
                        <div class="form-group">
                            <label for="id">InvoiceId</label>
                            <input type="text" class="form-control" name="id" placeholder="Enter Invoice ID"
                                onChange={(e) => handleFormState('id', e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <label for="paymentdue">Payment Due</label>
                            <input type="date" class="form-control" name="paymentdue" placeholder="Password"
                                onChange={(e) => handleFormState('createdat', e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <label for="clientname">Client Name</label>
                            <input type="text" class="form-control" name="clientname" placeholder="Enter Client Name"
                                onChange={(e) => handleFormState('clientname', e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <label for="price">Price</label>
                            <input type="number" class="form-control" name="price" placeholder="Enter Price"
                                onChange={(e) => handleFormState('price', e.target.value)}
                            />
                        </div>
                        Enter Pay Status
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="status" id="flexRadioDefault1"
                                onChange={(e) => handleFormState('status', "Pending")}
                            />
                            <label class="form-check-label" for="status">
                                Pending
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="status" id="flexRadioDefault2" checked
                                onChange={(e) => handleFormState('status', "Paid")}
                            />
                            <label class="form-check-label" for="status">
                                Paid
                            </label>
                        </div>
                        <div class="form-group">
                            <label for="senderaddressstreet">Sender Address Street</label>
                            <input type="text" class="form-control" name="senderaddressstreet" placeholder="Enter Sender Address Street"
                                onChange={(e) => handleFormState('senderaddressstreet', e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <label for="senderaddressscity">Sender Address City</label>
                            <input type="text" class="form-control" name="senderaddresscity" placeholder="Enter Sender Address City"
                                onChange={(e) => handleFormState('senderaddresscity', e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <label for="senderaddresspostcode">Sender Address PostCode</label>
                            <input type="text" class="form-control" name="senderaddresspostcode" placeholder="Enter Sender Address PostCode"
                                onChange={(e) => handleFormState('senderaddresspostcode', e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <label for="senderaddresscountry">Sender Address Country</label>
                            <input type="text" class="form-control" name="senderaddresscountry" placeholder="Enter Sender Address Country"
                                onChange={(e) => handleFormState('senderaddresscountry', e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <label for="clientaddressstreet">Client Address Street</label>
                            <input type="text" class="form-control" name="clientaddressstreet" placeholder="Enter Client Address Street"
                                onChange={(e) => handleFormState('clientaddressstreet', e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <label for=" clientaddresscity">Client Address City</label>
                            <input type="text" class="form-control" name=" clientaddresscity" placeholder="Enter Client Address City"
                                onChange={(e) => handleFormState(' clientaddresscity', e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <label for=" clientaddresspostcode">Client Address PostCode</label>
                            <input type="number" class="form-control" name=" clientaddresspostcode" placeholder="Enter Client Address PostCode"
                                onChange={(e) => handleFormState('clientaddresspostcode', e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <label for="clientaddresscountry">Client Address Country</label>
                            <input type="text" class="form-control" name=" clientaddresscountry" placeholder="Enter Client Address Country"
                                onChange={(e) => handleFormState('clientaddresscountry', e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <label for="clientname">Enter Client Name</label>
                            <input type="text" class="form-control" name=" clientname" placeholder="Enter Client Name"
                                onChange={(e) => handleFormState('clientname', e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <label for="items0name">Item 1 Name</label>
                            <input type="text" class="form-control" name="items0name" placeholder="Enter Item 1 Name"
                                onChange={(e) => handleFormState('items0name', e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <label for="items0quantity">Item 1 Quantity</label>
                            <input type="number" class="form-control" name="items0quantity" placeholder="Enter Item 1 Quantity"
                                onChange={(e) => handleFormState('items0quantity', e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <label for="items0price">Item 1 Price</label>
                            <input type="number" class="form-control" name="items0price" placeholder="Enter Item 1 Price"
                                onChange={(e) => handleFormState('items0price', e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <label for="items0total">Item 1 Total</label>
                            <input type="number" class="form-control" name="items0total" placeholder="Enter Item 1 Total"
                                onChange={(e) => handleFormState('items0total', e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <label for="total">Total</label>
                            <input type="text" class="form-control" name="total" placeholder="total"
                                onChange={(e) => handleFormState('total', e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <label for="items1name">item 2 Name</label>
                            <input type="text" class="form-control" name="items1name" placeholder="Enter item 2 Name"
                                onChange={(e) => handleFormState('items1name', e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <label for="items1quantity">item 2 Quantity</label>
                            <input type="number" class="form-control" name="items1quantity" placeholder="Enter item 2 Quantity"
                                onChange={(e) => handleFormState('items1quantity', e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <label for="items1price">item 2 Price</label>
                            <input type="number" class="form-control" name=" items1price" placeholder="Enter item 2 Price"
                                onChange={(e) => handleFormState(' items1price', e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <label for="items1total">item 2 total</label>
                            <input type="number" class="form-control" name="items1total" placeholder="Enter item 2 total"
                                onChange={(e) => handleFormState(' items1total', e.target.value)}
                            />
                        </div>
                        <br></br>
                        <RowWrap>
                            <SubmitButton type="submit" onClick={() => {
                                props.save(formState)

                            }}>Submit</SubmitButton>
                            {/* <ErrorMessage>Please Make Sure all Inputs are filled</ErrorMessage> */}
                        </RowWrap>
                    </form>
                </Offcanvas.Body>
            </CanvasContainer>
        </Offcanvas>
    )
}