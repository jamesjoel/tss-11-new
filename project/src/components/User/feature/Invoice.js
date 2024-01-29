import React from 'react'
import './Invoice.css';

const Invoice = () => {
  return (
    <>
    <section className="wrapper-invoice my-5">
     
      <div className="invoice">
        
        <div className="invoice-information">
          <p><b>Invoice #</b> : 12345</p>
          <p><b>Created Date </b>: May, 07 2022</p>
          <p><b>Due Date</b> : May, 09 2022</p>
        </div>
     
        <div className="invoice-logo-brand">
     
          <img src="./assets/img/logo.png" alt="" />
        </div>
     
        <div className="invoice-head">
          <div className="head client-info">
            <p>Tampsh, Inc.</p>
            <p>NPWP: 12.345.678.910.111213.1415</p>
            <p>Bondowoso, Jawa timur</p>
            <p>Jln. Rengganis 05, Bondowoso</p>
          </div>
          <div className="head client-data">
            <p>-</p>
            <p>Mohammad Sahrullah</p>
            <p>Bondowoso, Jawa timur</p>
            <p>Jln. Duko Kembang, Bondowoso</p>
          </div>
        </div>
     
        <div className="invoice-body">
          <table className="table">
            <thead>
              <tr>
                <th>Item Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Template Invoice</td>
                <td>Rp.75.000</td>
              </tr>
              <tr>
                <td>tax</td>
                <td>Rp.5.000</td>
              </tr>
            </tbody>
          </table>
          <div className="flex-table">
            <div className="flex-column"></div>
            <div className="flex-column">
              <table className="table-subtotal">
                <tbody>
                  <tr>
                    <td>Subtotal</td>
                    <td>Rp.80.000</td>
                  </tr>
                  <tr>
                    <td>PPN 10%</td>
                    <td>Rp.5.000</td>
                  </tr>
                  <tr>
                    <td>Credit</td>
                    <td>Rp.0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
     
          <div className="invoice-total-amount">
            <p>Total : Rp.80.000</p>
          </div>
        </div>
     
        <div className="invoice-footer">
          <p>Thankyou, happy shopping again</p>
        </div>
      </div>
    </section>
    <div className='container'>
        <div className='row'>
            <div className='col-md-4 offset-md-4 my-4'>
                <button onClick={()=>window.print()} className='btn btn-info btn-block'>Print</button>
                <button onClick={()=>window.print()} className='btn btn-info btn-block'>Download</button>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Invoice