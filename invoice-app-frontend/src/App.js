import React, { useCallback, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from "./components/styles/globalStyles";
import { lightTheme, darkTheme } from "./components/styles/themes";
import { ExpandedCard } from './components/expandedCard';
import { getInvoices } from './APIs/getInvoices';
import { InvoiceContainer } from './styles'
import { SidePanel } from './components/SideBar';
import { MainCards } from './components/mainCards';
import { AddInvoice } from './components/addInvoice';
import { Header } from './components/header';
import { deleteDBInvoice } from './APIs/deleteInvoice';
import { addDBInvoice } from './APIs/addInvoice';


const initialFormData = () => require('./assets/data/data.json');

function App() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleClose = useCallback(() => setShow(false), []);

  const retreiveInvoices = useCallback(() => {
    getInvoices().then((response) => {
      // console.log(response);
      return response.json();
    })
      .then((data) => {
        console.log(data);
        // setLoading(false);
        setApiData(data)
      });
  }, [])

  useEffect(() => {
    retreiveInvoices()
  }, [retreiveInvoices])

  const saveInvoice = useCallback((formstate) => {
    addDBInvoice(formstate).then(() => retreiveInvoices())
    handleClose()
  }, [retreiveInvoices, handleClose])

  console.log(apiData)


  const [theme, setTheme] = useState('light');
  const [payState, setPayState] = useState('all');
  const [show, setShow] = useState(false);
  const [isMain, setMain] = useState(true);
  const [cardId, setCardId] = useState(0);


  const toggleShow = useCallback(() => setShow(true), []);
  const handlePaid = useCallback(() => setPayState('paid'), []);
  const handlePending = useCallback(() => setPayState('pending'), []);
  const handleAll = useCallback(() => setPayState('all'), []);
  const handleSetMain = useCallback(() => setMain, [])


  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  // const deleteInvoice = (index) => {
  //   let newData = data.filter(function (number) {
  //     return data.indexOf(number) !== index;
  //   });
  //   setData(newData)
  // }

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <SidePanel themeToggle={themeToggler} />
        <InvoiceContainer>
          <Header
            data={apiData}
            toggleAddInvoice={toggleShow}
            setPending={handlePending}
            setPaid={handlePaid}
            setAll={handleAll}
          />
          {!isMain ?
            <ExpandedCard
              data={apiData}
              cardId={cardId}
              // delete={deleteInvoice}
              goback={setMain}
            />
            :
            <MainCards
              data={apiData}
              payState={payState}
              main={setMain}
              cardid={setCardId}
            />

          }
        </InvoiceContainer>
        <AddInvoice show={show} close={handleClose} save={saveInvoice} />
      </ThemeProvider>
    </>
  );
}

export default App;
